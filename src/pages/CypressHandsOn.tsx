import { Navigation } from "@/components/Navigation";
import { HandsOnExercise } from "@/components/HandsOnExercise";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CypressHandsOn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Cypress Hands-On Exercises
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn Cypress testing with AI-powered guidance using Gemini API
            </p>
          </div>

          <Tabs defaultValue="beginner" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="beginner" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: First Cypress Test"
                description="Write your first Cypress test"
                level="beginner"
                tool="cypress"
                exercisePrompt="Create a Cypress test that visits a webpage, finds an element by its selector, checks if it's visible, clicks it, and verifies the resulting behavior. Use Cypress commands and assertions."
                starterCode={`describe('My First Test', () => {
  it('should navigate and interact with elements', () => {
    // TODO: Visit the page
    // TODO: Find and verify element visibility
    // TODO: Click the element
    // TODO: Assert the expected outcome
  });
});`}
              />

              <HandsOnExercise
                title="Exercise 2: Form Testing with Cypress"
                description="Test form submissions and validations"
                level="beginner"
                tool="cypress"
                exercisePrompt="Write a Cypress test that fills out a login form, submits it with valid credentials, and verifies successful login. Then test with invalid credentials and verify error messages appear."
                starterCode={`describe('Login Form Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login successfully with valid credentials', () => {
    // TODO: Fill in email and password
    // TODO: Submit form
    // TODO: Assert successful login
  });

  it('should show error with invalid credentials', () => {
    // TODO: Fill in invalid credentials
    // TODO: Submit form
    // TODO: Assert error message appears
  });
});`}
              />

              <HandsOnExercise
                title="Exercise 3: Navigation and URL Testing"
                description="Test navigation flows and URL changes"
                level="beginner"
                tool="cypress"
                exercisePrompt="Create tests that navigate through multiple pages of a website, verify URL changes, use browser back/forward buttons, and validate that the correct content appears on each page."
              />
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: Custom Commands and Fixtures"
                description="Create reusable test helpers"
                level="intermediate"
                tool="cypress"
                exercisePrompt="Create custom Cypress commands for common actions (login, logout, add item to cart). Use fixtures to load test data. Write tests that use these custom commands and fixtures for cleaner, more maintainable tests."
                starterCode={`// commands.js
Cypress.Commands.add('login', (email, password) => {
  // TODO: Implement login command
});

// test file
describe('E-commerce Tests', () => {
  it('should add items to cart after login', () => {
    cy.fixture('users').then((users) => {
      // TODO: Use custom command and fixture data
    });
  });
});`}
              />

              <HandsOnExercise
                title="Exercise 2: API Stubbing and Mocking"
                description="Control API responses in tests"
                level="intermediate"
                tool="cypress"
                exercisePrompt="Write tests that use cy.intercept() to stub API responses. Test both success and error scenarios by mocking different API responses. Verify that the UI handles each response correctly."
              />

              <HandsOnExercise
                title="Exercise 3: AI-Enhanced Test Generation"
                description="Use AI to generate Cypress tests"
                level="intermediate"
                tool="cypress"
                exercisePrompt="Build a tool that analyzes a webpage, identifies testable elements and user flows, and uses the Gemini API to generate comprehensive Cypress tests including proper assertions and error handling."
              />
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: AI-Powered Visual Testing"
                description="Implement intelligent visual regression"
                level="advanced"
                tool="cypress"
                exercisePrompt="Create a visual testing system that captures screenshots, uses AI to identify meaningful differences (ignoring dynamic content like dates), and generates detailed reports showing only significant visual changes."
              />

              <HandsOnExercise
                title="Exercise 2: Intelligent Test Data Generation"
                description="Generate test data with AI"
                level="advanced"
                tool="cypress"
                exercisePrompt="Build a system that uses AI to analyze your application's data models and generate realistic, edge-case-covering test data. Integrate this with Cypress tests to automatically populate forms with diverse test scenarios."
              />

              <HandsOnExercise
                title="Exercise 3: AI Test Maintenance System"
                description="Auto-fix broken tests with AI"
                level="advanced"
                tool="cypress"
                exercisePrompt="Create an intelligent test maintenance system that detects failing tests due to selector changes, uses AI to analyze the page and find the element using context clues, and automatically updates the test code with new selectors."
              />
            </TabsContent>
          </Tabs>

          <Card className="bg-gradient-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">💡 Pro Tips for Cypress + AI</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use AI to analyze Cypress test videos and suggest improvements</li>
                <li>• Implement AI-powered test case prioritization based on code changes</li>
                <li>• Create intelligent retry logic that uses AI to determine if retries are worthwhile</li>
                <li>• Use Gemini API to generate comprehensive test documentation from test code</li>
                <li>• Build AI assistants that can write Cypress plugins for custom functionality</li>
                <li>• Leverage AI to optimize test execution order for faster feedback</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CypressHandsOn;