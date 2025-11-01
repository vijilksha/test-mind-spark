import { CodeExample } from "./CodeExample";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ExamplesSection = () => {
  const examples = {
    selenium: {
      title: "AI Self-Healing with Selenium",
      description: "Automatic locator healing when UI elements change",
      language: "Python",
      framework: "Selenium + Healenium",
      code: `from selenium import webdriver
from healenium import Healenium

# Step 1: Initialize driver with Healenium
driver = webdriver.Chrome()
driver = Healenium(driver)

# Step 2: Navigate and perform actions
driver.get("https://example.com")

# Step 3: AI auto-heals if locator changes
login_button = driver.find_element_by_id("login-btn")
login_button.click()

# Step 4: Self-healing kicks in automatically
# If "login-btn" ID changes to "submit-btn"
# Healenium will find it using AI algorithms

driver.quit()`
    },
    cypress: {
      title: "Visual AI Testing with Cypress",
      description: "Detect visual regressions across browsers automatically",
      language: "JavaScript",
      framework: "Cypress + Applitools",
      code: `import '@applitools/eyes-cypress';

describe('Visual AI Testing', () => {
  // Step 1: Open eyes before test
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'My App',
      testName: 'Homepage Test',
    });
  });

  it('should match baseline screenshot', () => {
    // Step 2: Navigate to page
    cy.visit('https://example.com');
    
    // Step 3: AI visual checkpoint
    cy.eyesCheckWindow('Homepage');
    
    // Step 4: Test user interactions
    cy.get('[data-testid="login"]').click();
    cy.eyesCheckWindow('Login Modal');
  });

  // Step 5: Close eyes after test
  afterEach(() => {
    cy.eyesClose();
  });
});`
    },
    playwright: {
      title: "AI Test Generation with Playwright",
      description: "Generate tests from user interactions automatically",
      language: "TypeScript",
      framework: "Playwright Codegen",
      code: `import { test, expect } from '@playwright/test';

test('AI-generated user flow', async ({ page }) => {
  // Step 1: Navigate to application
  await page.goto('https://example.com');
  
  // Step 2: AI-detected interactions
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  // Step 3: Smart waiting (AI-powered)
  await page.waitForSelector('[data-testid="email"]');
  
  // Step 4: Fill form with AI suggestions
  await page.fill('[data-testid="email"]', 'user@test.com');
  await page.fill('[data-testid="password"]', 'password123');
  
  // Step 5: AI assertion recommendations
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*dashboard/);
  
  // Step 6: Visual AI validation
  await expect(page).toHaveScreenshot('dashboard.png');
});

// Generate this test automatically:
// npx playwright codegen https://example.com`
    },
    testim: {
      title: "Smart Test Maintenance",
      description: "AI automatically updates tests when app changes",
      language: "JavaScript",
      framework: "Testim.io",
      code: `// Step 1: Record test using Testim Chrome extension
// AI learns element patterns during recording

// Step 2: Define test with smart locators
testim.test('User Login Flow', async () => {
  // AI uses multiple attributes to find elements
  await testim.click('Login Button', {
    smartLocator: true,
    aiHealing: true
  });
  
  // Step 3: AI predicts best input strategy
  await testim.type('Email Field', 'test@example.com');
  await testim.type('Password Field', 'securepass');
  
  // Step 4: Submit with AI-powered retry
  await testim.click('Submit', {
    retry: 3,
    waitForStability: true
  });
  
  // Step 5: AI validates success state
  await testim.validate('Dashboard', {
    aiValidation: true,
    visualCheck: true
  });
});

// AI automatically:
// - Updates locators if UI changes
// - Suggests alternative selectors
// - Detects flaky elements
// - Recommends wait strategies`
    },
    katalon: {
      title: "AI-Powered Object Recognition",
      description: "Visual object detection for robust test automation",
      language: "Groovy",
      framework: "Katalon Studio",
      code: `import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

// Step 1: Enable AI-powered visual testing
WebUI.openBrowser('')
WebUI.navigateToUrl('https://example.com')

// Step 2: AI object recognition
// Finds button even if ID/class changes
WebUI.clickImage(findTestObject('AI_Objects/LoginButton'))

// Step 3: Self-healing object detection
def emailField = findTestObject('Object Repository/Email_Input')
WebUI.setText(emailField, 'user@test.com', 
  FailureHandling.OPTIONAL)

// Step 4: AI fallback strategy
if (!WebUI.verifyElementPresent(emailField, 2)) {
  // AI finds alternative locator
  WebUI.setText(findImageObject('Email_Field_Image'), 
    'user@test.com')
}

// Step 5: Smart wait with AI
WebUI.waitForElementPresent(
  findTestObject('Dashboard_Container'),
  timeout: 10,
  aiAssisted: true
)

WebUI.closeBrowser()`
    },
    api: {
      title: "AI-Driven API Testing",
      description: "Intelligent API test generation and validation",
      language: "JavaScript",
      framework: "REST Assured + ML",
      code: `const axios = require('axios');
const { AITestValidator } = require('ai-test-tools');

// Step 1: Initialize AI validator
const validator = new AITestValidator({
  learningMode: true,
  generateAssertions: true
});

async function testUserAPI() {
  // Step 2: Make API request
  const response = await axios.get(
    'https://api.example.com/users/123'
  );
  
  // Step 3: AI generates assertions automatically
  const aiChecks = await validator.analyze(response);
  
  // AI learns expected patterns:
  // - Response time < 200ms
  // - Status code = 200
  // - Required fields present
  // - Data types match schema
  
  // Step 4: Smart validation
  expect(response.status).toBe(200);
  expect(response.data).toMatchSchema(aiChecks.schema);
  
  // Step 5: AI detects anomalies
  const anomalies = await validator.detectAnomalies(
    response.data,
    historicalData
  );
  
  if (anomalies.length > 0) {
    console.warn('AI detected unusual patterns:', anomalies);
  }
  
  // Step 6: Auto-generate edge cases
  const edgeCases = await validator.suggestEdgeCases({
    endpoint: '/users/:id',
    method: 'GET'
  });
  
  return { response, aiChecks, edgeCases };
}`
    }
  };

  return (
    <section id="examples" className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Code Examples
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Real-world implementations of AI-powered testing across different frameworks
          </p>
        </div>

        <Tabs defaultValue="selenium" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 lg:grid-cols-6">
            <TabsTrigger value="selenium">Selenium</TabsTrigger>
            <TabsTrigger value="cypress">Cypress</TabsTrigger>
            <TabsTrigger value="playwright">Playwright</TabsTrigger>
            <TabsTrigger value="testim">Testim</TabsTrigger>
            <TabsTrigger value="katalon">Katalon</TabsTrigger>
            <TabsTrigger value="api">API Testing</TabsTrigger>
          </TabsList>

          {Object.entries(examples).map(([key, example]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <CodeExample {...example} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
