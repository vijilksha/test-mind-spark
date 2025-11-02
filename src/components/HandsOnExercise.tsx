import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2, Lightbulb, CheckCircle, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface HandsOnExerciseProps {
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  tool: "selenium" | "playwright" | "cypress";
  exercisePrompt: string;
  starterCode?: string;
}

export const HandsOnExercise = ({
  title,
  description,
  level,
  tool,
  exercisePrompt,
  starterCode = ""
}: HandsOnExerciseProps) => {
  const [code, setCode] = useState(starterCode);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const callAI = async (exerciseType: "validate" | "hint" | "generate") => {
    setLoading(true);
    setAiResponse("");

    try {
      const { data, error } = await supabase.functions.invoke('ai-exercise-helper', {
        body: {
          exerciseType,
          userCode: exerciseType === "generate" ? exercisePrompt : code,
          level,
          tool
        }
      });

      if (error) throw error;

      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive"
        });
        return;
      }

      setAiResponse(data.response);
      
      if (exerciseType === "generate") {
        // Extract code from markdown if present
        const codeMatch = data.response.match(/```[\w]*\n([\s\S]*?)\n```/);
        if (codeMatch) {
          setCode(codeMatch[1]);
        }
      }

    } catch (error) {
      console.error('Error calling AI:', error);
      toast({
        title: "Error",
        description: "Failed to get AI assistance. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case "beginner": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "intermediate": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "advanced": return "bg-red-500/10 text-red-500 border-red-500/20";
      default: return "";
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className={getLevelColor(level)}>
              {level}
            </Badge>
            <Badge variant="secondary">{tool}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">📝 Exercise:</h4>
          <p className="text-sm text-muted-foreground">{exercisePrompt}</p>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Your Code:</label>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`Write your ${tool} test code here...`}
            className="font-mono text-sm min-h-[200px]"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            onClick={() => callAI("validate")}
            disabled={loading || !code.trim()}
            size="sm"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle className="mr-2 h-4 w-4" />}
            Validate with AI
          </Button>
          
          <Button
            onClick={() => callAI("hint")}
            disabled={loading}
            variant="outline"
            size="sm"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
            Get Hint
          </Button>
          
          <Button
            onClick={() => callAI("generate")}
            disabled={loading}
            variant="secondary"
            size="sm"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Code className="mr-2 h-4 w-4" />}
            Show Solution
          </Button>
        </div>

        {aiResponse && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">🤖 AI Feedback:</span>
            </h4>
            <div className="text-sm whitespace-pre-wrap">{aiResponse}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};