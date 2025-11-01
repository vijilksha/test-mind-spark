import { Button } from "@/components/ui/button";
import { BookOpen, Code2, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(186,230,253,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container relative z-10 px-4 py-16 mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/50 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-accent-foreground" />
          <span className="text-sm font-medium text-accent-foreground">Master AI Testing</span>
        </div>
        
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          AI-Powered Testing
          <span className="block mt-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Mastery Guide
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-200 md:text-xl">
          Comprehensive notes and strategies to transform your testing workflow with artificial intelligence.
          From fundamentals to advanced automation techniques.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 shadow-glow">
            <BookOpen className="w-5 h-5" />
            Start Learning
          </Button>
          <Button size="lg" variant="secondary" className="gap-2">
            <Code2 className="w-5 h-5" />
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
};
