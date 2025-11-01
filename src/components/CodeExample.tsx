import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CodeExampleProps {
  title: string;
  description: string;
  language: string;
  code: string;
  framework?: string;
}

export const CodeExample = ({ title, description, language, code, framework }: CodeExampleProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-card">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          {framework && (
            <Badge variant="secondary" className="ml-2">
              {framework}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="text-xs">
              {language}
            </Badge>
          </div>
          <pre className="p-4 overflow-x-auto rounded-lg bg-muted/50">
            <code className="text-sm text-foreground">{code}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};
