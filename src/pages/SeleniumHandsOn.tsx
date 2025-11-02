import { Navigation } from "@/components/Navigation";
import { HandsOnExercise } from "@/components/HandsOnExercise";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SeleniumHandsOn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Selenium Hands-On Exercises
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn Selenium with AI-powered guidance using Gemini API
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
                title="Exercise 1: Basic Element Interaction"
                description="Learn to locate and interact with web elements"
                level="beginner"
                tool="selenium"
                exercisePrompt="Create a Selenium script that opens Google, finds the search box, types 'Selenium WebDriver', and clicks the search button. Use proper waits and handle exceptions."
                starterCode={`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# TODO: Initialize the webdriver
# TODO: Navigate to Google
# TODO: Find and interact with search box
# TODO: Submit search
# TODO: Close the browser`}
              />

              <HandsOnExercise
                title="Exercise 2: Form Filling with Validation"
                description="Practice filling forms and validating results"
                level="beginner"
                tool="selenium"
                exercisePrompt="Create a test that fills out a registration form (name, email, password) on a sample website, submits it, and validates the success message appears."
                starterCode={`from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

# TODO: Navigate to form page
# TODO: Fill in name field
# TODO: Fill in email field
# TODO: Fill in password field
# TODO: Click submit button
# TODO: Assert success message appears`}
              />

              <HandsOnExercise
                title="Exercise 3: Multiple Elements Handling"
                description="Work with lists of elements"
                level="beginner"
                tool="selenium"
                exercisePrompt="Write a script that finds all links on a webpage, prints their text and href attributes, and counts how many external links exist (links starting with http)."
              />
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: Dynamic Content Handling"
                description="Master waiting strategies for dynamic content"
                level="intermediate"
                tool="selenium"
                exercisePrompt="Create a test that handles AJAX-loaded content. Wait for specific elements to appear after a button click, handle loading states, and validate the dynamically loaded content."
                starterCode={`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# TODO: Set up explicit waits
# TODO: Click button that triggers AJAX
# TODO: Wait for loading indicator to disappear
# TODO: Wait for content to appear
# TODO: Validate content`}
              />

              <HandsOnExercise
                title="Exercise 2: Page Object Model Implementation"
                description="Structure tests using POM design pattern"
                level="intermediate"
                tool="selenium"
                exercisePrompt="Implement a Page Object Model for a login page. Create a LoginPage class with methods for entering credentials, submitting, and validating login success or error messages."
              />

              <HandsOnExercise
                title="Exercise 3: AI-Enhanced Visual Testing"
                description="Integrate AI for visual regression testing"
                level="intermediate"
                tool="selenium"
                exercisePrompt="Create a test that captures screenshots at different stages, uses AI to compare them with baseline images, and detects visual differences. Integrate with an AI API for image comparison."
              />
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: AI-Powered Self-Healing Tests"
                description="Implement intelligent element location"
                level="advanced"
                tool="selenium"
                exercisePrompt="Build a self-healing locator system that uses AI to automatically find elements when original locators fail. When a locator breaks, capture the page context and use AI to suggest alternative locators."
              />

              <HandsOnExercise
                title="Exercise 2: Parallel Test Execution with AI Optimization"
                description="Run tests in parallel with AI-driven test selection"
                level="advanced"
                tool="selenium"
                exercisePrompt="Create a parallel test execution framework using Selenium Grid. Implement an AI layer that analyzes test history and code changes to intelligently select which tests to run in each execution."
              />

              <HandsOnExercise
                title="Exercise 3: AI Test Generation from Requirements"
                description="Generate test cases using AI"
                level="advanced"
                tool="selenium"
                exercisePrompt="Build a system that takes user stories or requirements as input and uses AI to generate complete Selenium test scripts, including locators, test data, and assertions."
              />
            </TabsContent>
          </Tabs>

          <Card className="bg-gradient-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">💡 Pro Tips for Selenium + AI</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use AI to generate intelligent wait conditions based on page behavior</li>
                <li>• Implement AI-powered element recognition to make tests more resilient</li>
                <li>• Use Gemini API to analyze test failures and suggest fixes automatically</li>
                <li>• Create AI-assisted test data generation for comprehensive coverage</li>
                <li>• Leverage AI for visual testing and screenshot comparison</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SeleniumHandsOn;