import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2, Lightbulb, CheckCircle, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HandsOnExerciseProps {
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  tool: "selenium" | "playwright" | "cypress";
  exercisePrompt: string;
  starterCode?: string;
  aiExampleCode?: string;
}

export const HandsOnExercise = ({
  title,
  description,
  level,
  tool,
  exercisePrompt,
  starterCode = "",
  aiExampleCode = ""
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
    <Card className="overflow-hidden [box-shadow:var(--shadow-card)]">
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
        <Tabs defaultValue="exercise" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="exercise">Exercise</TabsTrigger>
            <TabsTrigger value="ai-example">AI Automation Example</TabsTrigger>
          </TabsList>
          
          <TabsContent value="exercise" className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg [box-shadow:var(--shadow-code)]">
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
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 [box-shadow:var(--shadow-code)]">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-primary">🤖 AI Feedback:</span>
                </h4>
                <div className="text-sm whitespace-pre-wrap">{aiResponse}</div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="ai-example" className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20 [box-shadow:var(--shadow-code)]">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-500" />
                <span>AI-Powered Automation Example</span>
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                This example shows how to integrate AI into your test automation to make tests more intelligent and self-healing.
              </p>
            </div>
            
            {aiExampleCode ? (
              <Textarea
                value={aiExampleCode}
                readOnly
                className="font-mono text-sm min-h-[400px] bg-muted/50"
              />
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>AI automation example coming soon for this exercise</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};