import { Navigation } from "@/components/Navigation";
import { HandsOnExercise } from "@/components/HandsOnExercise";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PlaywrightHandsOn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Playwright Hands-On Exercises
            </h1>
            <p className="text-lg text-muted-foreground">
              Master Playwright with AI-powered guidance using Gemini API
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
                title="Exercise 1: First Playwright Test"
                description="Create your first automated test with Playwright"
                level="beginner"
                tool="playwright"
                exercisePrompt="Write a Playwright test that navigates to a website, clicks a button, waits for navigation, and asserts the new page title. Use async/await syntax and proper assertions."
                starterCode={`import { test, expect } from '@playwright/test';

test('basic navigation test', async ({ page }) => {
  // TODO: Navigate to the homepage
  // TODO: Click on a link
  // TODO: Wait for navigation to complete
  // TODO: Assert the page title
});`}
              />

              <HandsOnExercise
                title="Exercise 2: Form Interaction and Validation"
                description="Learn to interact with form elements"
                level="beginner"
                tool="playwright"
                exercisePrompt="Create a test that fills out a contact form (name, email, message), submits it, and validates that a success message appears. Use Playwright's auto-waiting features."
                starterCode={`import { test, expect } from '@playwright/test';

test('contact form submission', async ({ page }) => {
  await page.goto('https://example.com/contact');
  
  // TODO: Fill in the form fields
  // TODO: Click submit button
  // TODO: Wait for and assert success message
});`}
              />

              <HandsOnExercise
                title="Exercise 3: Multiple Browser Contexts"
                description="Work with multiple browser contexts"
                level="beginner"
                tool="playwright"
                exercisePrompt="Create a test that opens two different browser contexts (simulating two users), performs actions in each, and validates that the contexts are isolated from each other."
              />
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: API Testing Integration"
                description="Combine UI and API testing"
                level="intermediate"
                tool="playwright"
                exercisePrompt="Write a test that uses Playwright's API testing capabilities to create test data via API calls, then validates the UI displays this data correctly. Clean up test data after the test."
                starterCode={`import { test, expect } from '@playwright/test';

test('API + UI test', async ({ page, request }) => {
  // TODO: Create test data via API
  // TODO: Navigate to UI
  // TODO: Verify data appears correctly
  // TODO: Clean up via API
});`}
              />

              <HandsOnExercise
                title="Exercise 2: Visual Regression Testing"
                description="Implement screenshot comparison tests"
                level="intermediate"
                tool="playwright"
                exercisePrompt="Create a visual regression test suite that captures screenshots of critical pages in different viewport sizes and compares them against baseline images. Use Playwright's built-in screenshot comparison."
              />

              <HandsOnExercise
                title="Exercise 3: AI-Enhanced Test Maintenance"
                description="Use AI to maintain test selectors"
                level="intermediate"
                tool="playwright"
                exercisePrompt="Build a test helper that uses AI to generate robust selectors. When a selector fails, use the Gemini API to analyze the page structure and suggest alternative selectors based on the element's context."
              />
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: AI-Driven Test Case Generation"
                description="Generate Playwright tests using AI"
                level="advanced"
                tool="playwright"
                exercisePrompt="Create a system that takes a URL and user flow description, crawls the website, analyzes the DOM structure with AI, and automatically generates a complete Playwright test with proper assertions and waits."
              />

              <HandsOnExercise
                title="Exercise 2: Intelligent Test Parallelization"
                description="Optimize test execution with AI"
                level="advanced"
                tool="playwright"
                exercisePrompt="Implement an AI-powered test orchestration system that analyzes test dependencies, execution times, and failure patterns to optimize parallel test execution across multiple workers."
              />

              <HandsOnExercise
                title="Exercise 3: AI-Powered Flaky Test Detection"
                description="Identify and fix flaky tests"
                level="advanced"
                tool="playwright"
                exercisePrompt="Build a system that runs tests multiple times, uses AI to analyze failure patterns and logs, identifies root causes of flakiness, and suggests specific fixes (better waits, retry strategies, etc.)."
              />
            </TabsContent>
          </Tabs>

          <Card className="bg-gradient-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">💡 Pro Tips for Playwright + AI</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Leverage Playwright's auto-waiting with AI to predict optimal wait strategies</li>
                <li>• Use AI to generate test data that covers edge cases automatically</li>
                <li>• Implement AI-powered visual testing beyond simple pixel comparison</li>
                <li>• Create intelligent test reports that use AI to categorize and prioritize failures</li>
                <li>• Use Gemini API to analyze trace files and suggest test improvements</li>
                <li>• Build AI assistants that can understand Playwright trace viewer data</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PlaywrightHandsOn;