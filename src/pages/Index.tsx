import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { TopicCard } from "@/components/TopicCard";
import { 
  Brain, 
  Zap, 
  Target, 
  Code, 
  Workflow, 
  Shield 
} from "lucide-react";

const Index = () => {
  const topics = [
    {
      id: "introduction",
      title: "Introduction to AI Testing",
      description: "Foundation concepts and why AI transforms testing",
      icon: Brain,
      notes: [
        "AI testing leverages machine learning algorithms to identify patterns, predict potential issues, and optimize test coverage automatically",
        "Traditional testing relies on manual script creation while AI testing learns from historical data to generate intelligent test scenarios",
        "Key benefits include reduced testing time (up to 80%), improved bug detection rates, and adaptive test maintenance",
        "AI models can analyze application behavior to predict which areas are most likely to contain defects",
        "Natural Language Processing (NLP) enables tests to be created from user stories and requirements documentation"
      ]
    },
    {
      id: "automation",
      title: "Test Automation Strategies",
      description: "Building robust automated testing frameworks",
      icon: Zap,
      notes: [
        "The testing pyramid prioritizes unit tests (70%), integration tests (20%), and E2E tests (10%) for optimal efficiency",
        "Page Object Model (POM) design pattern creates maintainable test architectures by separating test logic from UI elements",
        "Continuous Integration/Continuous Deployment (CI/CD) pipelines should trigger automated tests on every code commit",
        "Implement parallel test execution to reduce overall testing time and provide faster feedback to developers",
        "Use data-driven testing to run the same test scenario with multiple input datasets automatically"
      ]
    },
    {
      id: "integration",
      title: "AI Integration Techniques",
      description: "Implementing AI-powered testing tools",
      icon: Code,
      notes: [
        "Visual AI tools like Applitools use computer vision to detect UI inconsistencies across browsers and devices",
        "Self-healing test scripts automatically update locators when UI elements change, reducing test maintenance",
        "AI-powered test generation tools like Testim analyze application behavior to create comprehensive test suites",
        "Machine learning models predict test flakiness and suggest improvements to make tests more reliable",
        "Intelligent test prioritization runs the most critical and failure-prone tests first in the CI/CD pipeline"
      ]
    },
    {
      id: "tools",
      title: "Essential Testing Tools",
      description: "Must-have tools for modern testing",
      icon: Target,
      notes: [
        "Selenium with AI extensions (Healenium) provides self-healing capabilities for web automation",
        "Cypress offers built-in automatic waiting and retry logic, reducing flaky tests without AI additions",
        "Playwright provides cross-browser testing with automatic wait mechanisms and network interception",
        "Katalon Studio integrates AI for smart object recognition and auto-healing test maintenance",
        "TestRigor uses natural language processing to create tests in plain English, reducing technical barriers"
      ]
    },
    {
      id: "workflow",
      title: "AI Testing Workflow",
      description: "Structuring your AI-enhanced testing process",
      icon: Workflow,
      notes: [
        "Start with AI-assisted test case generation from requirements to ensure comprehensive coverage",
        "Implement continuous testing with AI-prioritized test execution based on code changes and risk analysis",
        "Use AI for intelligent test data generation that covers edge cases and boundary conditions automatically",
        "Apply machine learning to analyze test results and identify patterns in failures across test runs",
        "Integrate feedback loops where AI learns from production incidents to improve test coverage"
      ]
    },
    {
      id: "practices",
      title: "Best Practices",
      description: "Guidelines for successful AI testing implementation",
      icon: Shield,
      notes: [
        "Start small with AI adoption - pilot one testing area before full-scale implementation",
        "Maintain human oversight of AI-generated tests to ensure they align with business requirements",
        "Regularly retrain AI models with new test data and application changes to maintain accuracy",
        "Document AI test decisions and confidence scores for transparency and debugging purposes",
        "Balance AI automation with manual exploratory testing for comprehensive quality assurance",
        "Monitor AI test performance metrics: false positive rates, test coverage, and execution time",
        "Implement version control for both test code and AI model configurations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <main className="container px-4 py-16 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Comprehensive Testing Notes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to master AI-powered testing, organized by topic
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              notes={topic.notes}
            />
          ))}
        </div>
      </main>
      
      <footer className="py-8 mt-16 border-t bg-muted/30 border-border">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            AI-Powered Testing Mastery Guide • Built for modern QA professionals
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
