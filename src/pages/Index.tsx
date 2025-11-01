import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { TopicCard } from "@/components/TopicCard";
import { ExamplesSection } from "@/components/ExamplesSection";
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
        "Step 1 - Understand the fundamentals: AI testing uses machine learning algorithms to identify patterns, predict bugs, and optimize test coverage by learning from historical test data and application behavior",
        "Step 2 - Compare with traditional testing: Unlike manual script creation, AI testing automatically generates intelligent test scenarios based on user behavior patterns, application structure, and defect history",
        "Step 3 - Quantify the benefits: Studies show AI testing reduces testing time by 60-80%, improves bug detection rates by 45%, decreases false positives by 70%, and cuts test maintenance effort by 50%",
        "Step 4 - Learn predictive analysis: AI models analyze code changes, commit history, and system architecture to predict which modules are most likely to contain defects, allowing teams to focus testing efforts strategically",
        "Step 5 - Leverage NLP capabilities: Natural Language Processing enables automatic test case generation from requirements documents, user stories, and acceptance criteria, bridging the gap between business requirements and technical tests",
        "Step 6 - Implement continuous learning: AI testing systems improve over time by learning from test results, production incidents, and user feedback to enhance coverage and accuracy with each iteration"
      ]
    },
    {
      id: "automation",
      title: "Test Automation Strategies",
      description: "Building robust automated testing frameworks",
      icon: Zap,
      notes: [
        "Step 1 - Build your testing pyramid: Allocate 70% unit tests (fast, isolated), 20% integration tests (component interaction), and 10% E2E tests (full user flows). This balance ensures comprehensive coverage while maintaining speed",
        "Step 2 - Implement Page Object Model: Separate test logic from UI implementation by creating page objects that encapsulate element locators and actions. Update one page object instead of hundreds of tests when UI changes",
        "Step 3 - Set up CI/CD integration: Configure your pipeline to trigger tests on every commit, pull request, and deployment. Use Jenkins, GitLab CI, GitHub Actions, or CircleCI with automatic test execution and reporting",
        "Step 4 - Enable parallel execution: Distribute tests across multiple machines or containers using Selenium Grid, cloud services (BrowserStack, Sauce Labs), or Kubernetes clusters to reduce execution time from hours to minutes",
        "Step 5 - Adopt data-driven testing: Externalize test data into CSV, JSON, or database tables. One test script can validate 100+ scenarios by iterating through different input combinations, edge cases, and boundary conditions",
        "Step 6 - Implement smart test selection: Use AI to analyze code changes and run only affected tests in pre-commit hooks, while full regression suites run nightly or on release branches"
      ]
    },
    {
      id: "integration",
      title: "AI Integration Techniques",
      description: "Implementing AI-powered testing tools",
      icon: Code,
      notes: [
        "Step 1 - Deploy visual AI testing: Integrate Applitools Eyes or Percy.io to capture screenshots and use computer vision algorithms to detect pixel-level differences, layout shifts, and responsive design issues across 50+ browser/device combinations",
        "Step 2 - Enable self-healing tests: Implement Healenium (Selenium), Testim, or mabl to automatically update element locators when UI changes. These tools use multiple attributes (ID, class, XPath, visual position) to maintain test stability",
        "Step 3 - Use AI test generation: Tools like Testim, Functionize, and test.ai watch you interact with your application and automatically generate tests. They learn element patterns, user flows, and validation points without manual scripting",
        "Step 4 - Predict and fix flaky tests: Apply machine learning models to analyze test execution history, identify patterns in intermittent failures, and recommend fixes like adding explicit waits, improving locators, or parallelization adjustments",
        "Step 5 - Implement intelligent prioritization: Use AI algorithms to analyze code coverage, defect history, and business criticality to run high-risk tests first. This provides 80% confidence with only 20% of tests in fast feedback loops",
        "Step 6 - Set up anomaly detection: Train ML models on API responses, performance metrics, and application logs to automatically flag unusual patterns that might indicate bugs even when assertions pass"
      ]
    },
    {
      id: "tools",
      title: "Essential Testing Tools",
      description: "Must-have tools for modern testing",
      icon: Target,
      notes: [
        "Step 1 - Selenium + Healenium: Add Healenium dependency to your Selenium project for automatic locator healing. It stores multiple attributes per element and uses ML algorithms to find elements when primary locators fail. Success rate: 92% after training",
        "Step 2 - Cypress for stability: Leverage Cypress's automatic waiting (no explicit waits needed), time-travel debugging, and real-time reloading. Add Applitools plugin for AI visual testing. Built-in retry logic reduces flakiness by 60%",
        "Step 3 - Playwright advantages: Use Playwright for reliable cross-browser testing (Chromium, Firefox, WebKit) with auto-waiting, network interception, and parallel execution. Its trace viewer provides detailed execution analysis with screenshots",
        "Step 4 - Katalon Studio AI features: Enable AI-powered object spy to record tests with self-healing locators. Smart wait automatically adjusts timeouts. Visual testing compares screenshots. Built-in analytics for test optimization",
        "Step 5 - TestRigor for accessibility: Write tests in plain English like 'click on Sign In button' or 'enter email as test@example.com'. AI translates to actions, making tests maintainable by non-technical team members",
        "Step 6 - Tool selection matrix: Use Selenium for legacy apps and maximum flexibility, Cypress for modern web apps prioritizing developer experience, Playwright for cross-browser coverage, Katalon for codeless teams, TestRigor for natural language"
      ]
    },
    {
      id: "workflow",
      title: "AI Testing Workflow",
      description: "Structuring your AI-enhanced testing process",
      icon: Workflow,
      notes: [
        "Step 1 - Requirement analysis phase: Use NLP tools to parse user stories, acceptance criteria, and documentation. Generate initial test cases covering happy paths, alternative flows, and error conditions automatically from requirements",
        "Step 2 - AI-powered test creation: Deploy test generation tools that record user interactions and create test scripts. Tools analyze application structure to suggest additional test scenarios based on similar applications",
        "Step 3 - Smart test execution: Implement risk-based testing where AI prioritizes tests based on: code changes (git diff), historical failure rates, business criticality, coverage gaps, and production incident patterns",
        "Step 4 - Intelligent test data management: Use AI to generate realistic test data that maintains referential integrity, covers boundary conditions, includes negative scenarios, and mimics production data distributions while respecting privacy",
        "Step 5 - Result analysis and learning: Apply ML models to identify patterns in test failures, correlate failures across different test suites, detect environmental issues vs real bugs, and suggest root causes based on error patterns",
        "Step 6 - Continuous improvement loop: Feed production incidents, user-reported bugs, and performance issues back into AI models to automatically generate regression tests, update coverage strategies, and refine test prioritization algorithms"
      ]
    },
    {
      id: "practices",
      title: "Best Practices",
      description: "Guidelines for successful AI testing implementation",
      icon: Shield,
      notes: [
        "Step 1 - Start with a pilot: Choose one critical user journey or feature area as your AI testing pilot. Measure baseline metrics (test creation time, maintenance effort, defect detection) before and after to demonstrate ROI clearly",
        "Step 2 - Maintain human oversight: Review AI-generated tests weekly to ensure they validate actual business requirements, not just technical functionality. AI might create technically correct but business-irrelevant tests",
        "Step 3 - Establish retraining schedule: Retrain AI models monthly with new test results, quarterly with application architecture changes, and immediately after major feature releases. Track model accuracy over time",
        "Step 4 - Document everything: Log AI decisions (why test was generated, confidence scores, alternative approaches), maintain test case lineage (AI-generated vs human-created), and track model versions for reproducibility",
        "Step 5 - Balance automation levels: Use AI for repetitive regression tests (80%), keep human exploratory testing for UX evaluation (15%), and manual testing for edge cases requiring domain expertise (5%)",
        "Step 6 - Track performance metrics: Monitor false positive rate (target <5%), test coverage (aim for 80%+ critical paths), execution time (reduce by 50%), maintenance time (cut by 60%), and defect escape rate",
        "Step 7 - Version control strategy: Store test scripts, AI model weights, training data sets, and configuration files in Git. Use semantic versioning for AI models and tag releases with model performance metrics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <main id="notes" className="container px-4 py-16 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Comprehensive Testing Notes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to master AI-powered testing, organized by topic with detailed step-by-step guides
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

      <ExamplesSection />
      
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
