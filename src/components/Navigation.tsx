import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-md bg-background/80 border-border">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">AI Testing Hub</span>
        </div>
        
        <div className="items-center hidden gap-6 md:flex">
          <a href="#introduction" className="text-sm font-medium transition-colors hover:text-primary">
            Introduction
          </a>
          <a href="#automation" className="text-sm font-medium transition-colors hover:text-primary">
            Automation
          </a>
          <a href="#integration" className="text-sm font-medium transition-colors hover:text-primary">
            AI Integration
          </a>
          <a href="#practices" className="text-sm font-medium transition-colors hover:text-primary">
            Best Practices
          </a>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};
