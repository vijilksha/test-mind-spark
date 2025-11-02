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
                aiExampleCode={`// AI-Enhanced Cypress Test with Self-Healing Selectors
// cypress/support/commands.js - Add this custom command
Cypress.Commands.add('smartGet', (selector, description) => {
  return cy.window().then((win) => {
    // Try original selector first
    const element = win.document.querySelector(selector);
    
    if (element) {
      return cy.get(selector);
    }
    
    // If selector fails, use AI to find alternative
    cy.log('⚠️ Original selector failed, consulting AI...');
    
    return cy.task('findElementWithAI', {
      pageHtml: win.document.documentElement.outerHTML,
      description: description,
      originalSelector: selector
    }).then((newSelector) => {
      cy.log('🤖 AI suggested: ' + newSelector);
      return cy.get(newSelector);
    });
  });
});

// cypress.config.js - Add AI task
const { defineConfig } = require('cypress');
const fetch = require('node-fetch');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async findElementWithAI({ pageHtml, description, originalSelector }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          const prompt = \`Find a CSS selector for: "\${description}"
Original selector failed: \${originalSelector}

HTML snippet:
\${pageHtml.substring(0, 2000)}

Return ONLY the CSS selector, nothing else.\`;

          try {
            const response = await fetch(
              \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contents: [{ parts: [{ text: prompt }] }]
                })
              }
            );
            
            const data = await response.json();
            const selector = data.candidates[0].content.parts[0].text.trim();
            return selector.replace(/['"]/g, '');
            
          } catch (error) {
            return 'button'; // Fallback
          }
        }
      });
    }
  }
});

// Test file with AI-powered selectors
describe('AI-Enhanced First Test', () => {
  it('should navigate and interact with smart selectors', () => {
    cy.visit('https://example.com');
    
    // Use AI-powered smart selector
    cy.smartGet('#submit-button', 'submit button')
      .should('be.visible')
      .click();
    
    // Verify outcome
    cy.smartGet('.success-message', 'success confirmation message')
      .should('contain', 'Success');
    
    cy.log('✅ Test passed with AI assistance!');
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
                aiExampleCode={`// AI-Powered Form Testing with Smart Test Data Generation
// cypress.config.js - Add AI task for test data generation
const { defineConfig } = require('cypress');
const fetch = require('node-fetch');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async generateTestData({ scenario }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          const prompt = \`Generate realistic test data for scenario: "\${scenario}"
Return as JSON with keys: email, password, name
Make it realistic and varied.\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            }
          );
          
          const data = await response.json();
          const text = data.candidates[0].content.parts[0].text;
          const jsonMatch = text.match(/\{[^}]+\}/);
          return jsonMatch ? JSON.parse(jsonMatch[0]) : {
            email: 'test@example.com',
            password: 'Test123!'
          };
        },
        
        async analyzeLoginError({ errorMessage, pageHtml }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          const prompt = \`Analyze this login error and suggest fixes:
Error: \${errorMessage}
Page HTML: \${pageHtml.substring(0, 1000)}

What's wrong and how to fix it?\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            }
          );
          
          const data = await response.json();
          return data.candidates[0].content.parts[0].text;
        }
      });
    }
  }
});

// Test file with AI-generated data
describe('AI-Enhanced Login Form Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with AI-generated valid credentials', () => {
    // Generate realistic test data using AI
    cy.task('generateTestData', { scenario: 'valid login credentials' })
      .then((testData) => {
        cy.log('🤖 Using AI-generated data:', testData);
        
        cy.get('[data-testid="email"]').type(testData.email);
        cy.get('[data-testid="password"]').type(testData.password);
        cy.get('button[type="submit"]').click();
        
        // Verify success
        cy.url().should('include', '/dashboard');
        cy.contains('Welcome').should('be.visible');
      });
  });

  it('should handle invalid credentials with AI analysis', () => {
    cy.get('[data-testid="email"]').type('invalid@test.com');
    cy.get('[data-testid="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    
    // Capture error for AI analysis
    cy.get('.error-message').invoke('text').then((errorText) => {
      cy.document().then((doc) => {
        cy.task('analyzeLoginError', {
          errorMessage: errorText,
          pageHtml: doc.documentElement.outerHTML
        }).then((analysis) => {
          cy.log('🤖 AI Error Analysis:', analysis);
        });
      });
    });
    
    cy.get('.error-message').should('be.visible');
  });

  it('should test edge cases with AI-generated data', () => {
    const scenarios = [
      'SQL injection attempt',
      'XSS attack attempt',
      'Very long email address',
      'Special characters in password'
    ];
    
    scenarios.forEach((scenario) => {
      cy.task('generateTestData', { scenario }).then((testData) => {
        cy.log(\`🤖 Testing: \${scenario}\`, testData);
        
        cy.get('[data-testid="email"]').clear().type(testData.email);
        cy.get('[data-testid="password"]').clear().type(testData.password);
        cy.get('button[type="submit"]').click();
        
        // Should handle gracefully
        cy.get('body').should('exist'); // Page shouldn't crash
      });
    });
  });
});`}
              />

              <HandsOnExercise
                title="Exercise 3: Navigation and URL Testing"
                description="Test navigation flows and URL changes"
                level="beginner"
                tool="cypress"
                exercisePrompt="Create tests that navigate through multiple pages of a website, verify URL changes, use browser back/forward buttons, and validate that the correct content appears on each page."
                aiExampleCode={`// AI-Enhanced Navigation Testing with Flow Analysis
// cypress.config.js
const { defineConfig } = require('cypress');
const fetch = require('node-fetch');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async analyzeNavigationFlow({ pages, currentUrl }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          const prompt = \`Analyze this navigation flow:
Pages visited: \${pages.join(' -> ')}
Current URL: \${currentUrl}

Is this a logical user journey? Suggest improvements.\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            }
          );
          
          const data = await response.json();
          return data.candidates[0].content.parts[0].text;
        }
      });
    }
  }
});

// cypress/support/commands.js
Cypress.Commands.add('trackNavigation', () => {
  const navigationHistory = [];
  
  return cy.window().then((win) => {
    // Track all navigation events
    cy.wrap(navigationHistory).as('navHistory');
    
    return cy.url().then((url) => {
      navigationHistory.push(url);
      cy.log('📍 Navigated to:', url);
    });
  });
});

// Test file
describe('AI-Enhanced Navigation Tests', () => {
  const visitedPages = [];
  
  beforeEach(() => {
    cy.visit('/');
    visitedPages.length = 0; // Reset
  });

  it('should track and analyze navigation flow with AI', () => {
    // Navigate through site
    cy.url().then((url) => visitedPages.push(url));
    cy.contains('Products').click();
    
    cy.url().should('include', '/products');
    cy.url().then((url) => visitedPages.push(url));
    
    cy.contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.url().then((url) => visitedPages.push(url));
    
    // Ask AI to analyze the navigation flow
    cy.url().then((currentUrl) => {
      cy.task('analyzeNavigationFlow', {
        pages: visitedPages,
        currentUrl: currentUrl
      }).then((analysis) => {
        cy.log('🤖 AI Navigation Analysis:', analysis);
        
        // AI can detect unusual patterns
        // e.g., "User jumped from Home to Contact without viewing Products"
      });
    });
  });

  it('should test browser navigation with AI validation', () => {
    // Forward navigation
    cy.visit('/home');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    
    // Back navigation
    cy.go('back');
    cy.url().should('include', '/home');
    
    // Forward navigation
    cy.go('forward');
    cy.url().should('include', '/about');
    
    // Verify correct content after navigation
    cy.get('h1').invoke('text').then((heading) => {
      cy.task('analyzeNavigationFlow', {
        pages: ['/home', '/about', '/home', '/about'],
        currentUrl: window.location.href
      }).then((analysis) => {
        cy.log('🤖 AI says:', analysis);
        expect(heading).to.include('About');
      });
    });
  });

  it('should detect broken navigation links with AI', () => {
    cy.visit('/');
    
    // Collect all navigation links
    const links = [];
    cy.get('nav a').each(($link) => {
      links.push({
        text: $link.text(),
        href: $link.attr('href')
      });
    });
    
    // Test each link
    cy.get('nav a').each(($link) => {
      const href = $link.attr('href');
      cy.log('Testing link:', href);
      
      cy.request({
        url: href,
        failOnStatusCode: false
      }).then((response) => {
        if (response.status >= 400) {
          cy.log('⚠️ Broken link detected:', href);
          
          // AI can suggest fixes
          cy.task('analyzeNavigationFlow', {
            pages: ['broken: ' + href],
            currentUrl: href
          });
        }
      });
    });
  });
});`}
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
                aiExampleCode={`// AI-Enhanced Custom Commands with Dynamic Fixtures
// cypress/support/commands.js
Cypress.Commands.add('aiLogin', (userType = 'standard') => {
  // AI generates appropriate test user based on type
  cy.task('generateUserData', { userType }).then((userData) => {
    cy.log('🤖 AI generated user:', userData);
    
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(userData.email);
    cy.get('[data-testid="password"]').type(userData.password);
    cy.get('button[type="submit"]').click();
    
    cy.url().should('not.include', '/login');
  });
});

Cypress.Commands.add('aiAddToCart', (productDescription) => {
  // AI finds product by natural language description
  cy.task('findProduct', { description: productDescription })
    .then((selector) => {
      cy.log('🤖 AI found product:', selector);
      cy.get(selector).click();
      cy.contains('Add to Cart').click();
      cy.contains('Added to cart').should('be.visible');
    });
});

Cypress.Commands.add('aiVerifyCheckout', () => {
  // AI validates checkout flow completeness
  cy.get('body').then(($body) => {
    const pageHtml = $body.html();
    
    cy.task('validateCheckoutPage', { html: pageHtml })
      .then((validation) => {
        cy.log('🤖 AI Validation:', validation);
        expect(validation.isValid).to.be.true;
      });
  });
});

// cypress.config.js
const { defineConfig } = require('cypress');
const fetch = require('node-fetch');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async generateUserData({ userType }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          const prompt = \`Generate test user data for: "\${userType} user"
Return JSON: { email, password, name, role }
Make it realistic.\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            }
          );
          
          const data = await response.json();
          const text = data.candidates[0].content.parts[0].text;
          const jsonMatch = text.match(/\{[^}]+\}/);
          return JSON.parse(jsonMatch[0]);
        },
        
        async findProduct({ description }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          // In real implementation, would pass page HTML
          const prompt = \`Find CSS selector for product: "\${description}"
Return ONLY the selector.\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            }
          );
          
          const data = await response.json();
          return data.candidates[0].content.parts[0].text.trim();
        },
        
        async validateCheckoutPage({ html }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          const prompt = \`Validate this checkout page has all required elements:
- Cart summary
- Payment method selection
- Shipping address form
- Place order button

HTML: \${html.substring(0, 2000)}

Return JSON: { isValid: boolean, missing: [] }\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            }
          );
          
          const data = await response.json();
          const text = data.candidates[0].content.parts[0].text;
          const jsonMatch = text.match(/\{[^}]+\}/);
          return JSON.parse(jsonMatch[0]);
        }
      });
    }
  }
});

// Test file using AI-enhanced commands
describe('AI-Enhanced E-commerce Tests', () => {
  it('should complete purchase flow with AI assistance', () => {
    // AI generates appropriate user
    cy.aiLogin('premium');
    
    // AI finds products by description
    cy.aiAddToCart('blue t-shirt size medium');
    cy.aiAddToCart('running shoes');
    
    // Navigate to checkout
    cy.get('[data-testid="cart"]').click();
    cy.contains('Checkout').click();
    
    // AI validates checkout page
    cy.aiVerifyCheckout();
    
    cy.log('✅ AI-assisted test completed!');
  });

  it('should handle different user types', () => {
    const userTypes = ['standard', 'premium', 'admin'];
    
    userTypes.forEach((userType) => {
      cy.aiLogin(userType);
      
      // Different users see different features
      cy.get('body').should('exist');
      
      cy.contains('Logout').click();
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
                aiExampleCode={`// AI-Generated API Mocks and Intelligent Response Simulation
// cypress.config.js
const { defineConfig } = require('cypress');
const fetch = require('node-fetch');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async generateMockData({ endpoint, scenario }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          const prompt = \`Generate realistic mock API response for:
Endpoint: \${endpoint}
Scenario: \${scenario}

Return as JSON with appropriate structure.\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            }
          );
          
          const data = await response.json();
          const text = data.candidates[0].content.parts[0].text;
          const jsonMatch = text.match(/\{[\\s\\S]*\}/);
          return JSON.parse(jsonMatch[0]);
        }
      });
    }
  }
});

// Test file with AI-generated mocks
describe('AI-Enhanced API Mocking Tests', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('should handle successful API response with AI-generated data', () => {
    // AI generates realistic mock data
    cy.task('generateMockData', {
      endpoint: '/api/users',
      scenario: 'successful user list retrieval'
    }).then((mockData) => {
      cy.log('🤖 AI generated mock:', mockData);
      
      // Intercept with AI-generated data
      cy.intercept('GET', '/api/users', {
        statusCode: 200,
        body: mockData
      }).as('getUsers');
      
      cy.contains('Load Users').click();
      cy.wait('@getUsers');
      
      // Verify UI displays AI-generated data
      cy.get('.user-list').should('be.visible');
    });
  });

  it('should handle error scenarios with AI-generated errors', () => {
    const errorScenarios = [
      'rate limit exceeded',
      'authentication failed',
      'server timeout',
      'invalid request format'
    ];
    
    errorScenarios.forEach((scenario) => {
      cy.task('generateMockData', {
        endpoint: '/api/users',
        scenario: \`error: \${scenario}\`
      }).then((errorResponse) => {
        cy.log(\`🤖 Testing error: \${scenario}\`, errorResponse);
        
        cy.intercept('GET', '/api/users', {
          statusCode: errorResponse.statusCode || 500,
          body: errorResponse
        }).as('errorRequest');
        
        cy.contains('Load Users').click();
        cy.wait('@errorRequest');
        
        // Verify error handling
        cy.get('.error-message').should('be.visible');
      });
    });
  });

  it('should test pagination with AI-generated pages', () => {
    let page = 1;
    const pages = [1, 2, 3];
    
    pages.forEach((pageNum) => {
      cy.task('generateMockData', {
        endpoint: \`/api/users?page=\${pageNum}\`,
        scenario: \`page \${pageNum} of user data with 10 users\`
      }).then((pageData) => {
        cy.intercept('GET', \`/api/users?page=\${pageNum}\`, {
          body: pageData
        }).as(\`page\${pageNum}\`);
      });
    });
    
    // Navigate through pages
    cy.contains('Load Users').click();
    cy.wait('@page1');
    
    cy.contains('Next').click();
    cy.wait('@page2');
    
    cy.contains('Next').click();
    cy.wait('@page3');
    
    cy.log('✅ Pagination tested with AI-generated data');
  });

  it('should simulate slow API responses', () => {
    cy.task('generateMockData', {
      endpoint: '/api/products',
      scenario: 'product catalog'
    }).then((products) => {
      // Simulate slow network
      cy.intercept('GET', '/api/products', (req) => {
        req.reply({
          statusCode: 200,
          body: products,
          delay: 3000 // 3 second delay
        });
      }).as('slowProducts');
      
      cy.contains('Load Products').click();
      
      // Should show loading state
      cy.get('.loading-spinner').should('be.visible');
      
      cy.wait('@slowProducts');
      
      // Loading should disappear
      cy.get('.loading-spinner').should('not.exist');
      cy.get('.product-list').should('be.visible');
    });
  });

  it('should test partial data loading', () => {
    cy.task('generateMockData', {
      endpoint: '/api/users',
      scenario: 'incomplete user data with missing fields'
    }).then((incompleteData) => {
      cy.log('🤖 Testing with incomplete data:', incompleteData);
      
      cy.intercept('GET', '/api/users', {
        body: incompleteData
      }).as('incompleteUsers');
      
      cy.contains('Load Users').click();
      cy.wait('@incompleteUsers');
      
      // App should handle missing fields gracefully
      cy.get('.user-list').should('be.visible');
      cy.get('.error-message').should('not.exist');
    });
  });
});`}
              />

              <HandsOnExercise
                title="Exercise 3: AI-Enhanced Test Generation"
                description="Use AI to generate Cypress tests"
                level="intermediate"
                tool="cypress"
                exercisePrompt="Build a tool that analyzes a webpage, identifies testable elements and user flows, and uses the Gemini API to generate comprehensive Cypress tests including proper assertions and error handling."
                aiExampleCode={`// AI Test Generator - Analyzes pages and generates Cypress tests
// generate-tests.js (Node.js script)
const fs = require('fs');
const fetch = require('node-fetch');

async function generateCypressTests(url, pageHtml) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  
  const prompt = \`Analyze this webpage and generate comprehensive Cypress tests.

URL: \${url}
HTML: \${pageHtml.substring(0, 3000)}

Generate tests for:
1. All interactive elements (buttons, links, forms)
2. Navigation flows
3. Form validations
4. Error states
5. Loading states

Return complete Cypress test code with:
- Proper describe/it blocks
- Data-testid selectors
- Meaningful assertions
- Error handling
- Comments explaining each test

Return ONLY the test code, no explanations.\`;

  const response = await fetch(
    \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 2048
        }
      })
    }
  );
  
  const data = await response.json();
  let testCode = data.candidates[0].content.parts[0].text;
  
  // Clean up markdown code blocks
  testCode = testCode.replace(/^\`\`\`(javascript|js)?\\n/gm, '');
  testCode = testCode.replace(/\\n\`\`\`$/gm, '');
  
  return testCode;
}

// Usage example
async function main() {
  const testUrl = 'https://example.com/login';
  
  // Fetch page HTML
  const response = await fetch(testUrl);
  const html = await response.text();
  
  console.log('🤖 Analyzing page and generating tests...');
  
  // Generate tests
  const testCode = await generateCypressTests(testUrl, html);
  
  // Save to file
  const filename = 'cypress/e2e/generated-login.cy.js';
  fs.writeFileSync(filename, testCode);
  
  console.log(\`✅ Generated tests saved to: \${filename}\`);
  console.log('\\n' + testCode);
}

main().catch(console.error);

// Example of generated output:
/* 
describe('AI-Generated Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://example.com/login');
  });

  it('should display login form elements', () => {
    cy.get('[data-testid="email"]').should('be.visible');
    cy.get('[data-testid="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
    cy.contains('Forgot Password?').should('be.visible');
  });

  it('should validate empty form submission', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'required');
  });

  it('should validate email format', () => {
    cy.get('[data-testid="email"]').type('invalid-email');
    cy.get('[data-testid="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    cy.get('.error-message')
      .should('contain', 'valid email');
  });

  it('should handle successful login', () => {
    cy.get('[data-testid="email"]').type('user@example.com');
    cy.get('[data-testid="password"]').type('correctPassword');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('not.include', '/login');
    cy.url().should('include', '/dashboard');
  });

  it('should handle invalid credentials', () => {
    cy.get('[data-testid="email"]').type('user@example.com');
    cy.get('[data-testid="password"]').type('wrongPassword');
    cy.get('button[type="submit"]').click();
    
    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
    
    cy.url().should('include', '/login');
  });

  it('should toggle password visibility', () => {
    cy.get('[data-testid="password"]').should('have.attr', 'type', 'password');
    cy.get('[data-testid="toggle-password"]').click();
    cy.get('[data-testid="password"]').should('have.attr', 'type', 'text');
  });

  it('should navigate to forgot password', () => {
    cy.contains('Forgot Password?').click();
    cy.url().should('include', '/forgot-password');
  });

  it('should show loading state during submission', () => {
    cy.intercept('POST', '/api/login', (req) => {
      req.reply({ delay: 1000, body: { success: true } });
    });
    
    cy.get('[data-testid="email"]').type('user@example.com');
    cy.get('[data-testid="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    cy.get('.loading-spinner').should('be.visible');
    cy.get('button[type="submit"]').should('be.disabled');
  });
});
*/`}
              />
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: AI-Powered Visual Testing"
                description="Implement intelligent visual regression"
                level="advanced"
                tool="cypress"
                exercisePrompt="Create a visual testing system that captures screenshots, uses AI to identify meaningful differences (ignoring dynamic content like dates), and generates detailed reports showing only significant visual changes."
                aiExampleCode={`// AI-Powered Visual Regression Testing
// cypress.config.js
const { defineConfig } = require('cypress');
const fs = require('fs');
const fetch = require('node-fetch');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async compareScreenshotsWithAI({ baseline, current, pageName }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          
          // Convert images to base64
          const baselineBase64 = fs.readFileSync(baseline, 'base64');
          const currentBase64 = fs.readFileSync(current, 'base64');
          
          const prompt = \`Compare these two screenshots of "\${pageName}" page.

Ignore:
- Timestamps and dates
- Dynamic content (ads, recommendations)
- Minor color variations
- Loading indicators

Focus on:
- Layout changes
- Missing elements
- Text changes
- Broken images
- Alignment issues

Return JSON:
{
  "hasDifferences": boolean,
  "significance": "none|minor|major",
  "differences": ["list of changes"],
  "recommendation": "approve|review|reject"
}\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{
                  parts: [
                    { text: prompt },
                    { inline_data: { mime_type: 'image/png', data: baselineBase64 } },
                    { inline_data: { mime_type: 'image/png', data: currentBase64 } }
                  ]
                }]
              })
            }
          );
          
          const data = await response.json();
          const text = data.candidates[0].content.parts[0].text;
          const jsonMatch = text.match(/\{[\\s\\S]*\}/);
          const result = JSON.parse(jsonMatch[0]);
          
          // Save report
          const report = {
            pageName,
            timestamp: new Date().toISOString(),
            baseline,
            current,
            analysis: result
          };
          
          fs.writeFileSync(
            \`cypress/reports/visual-\${pageName}-\${Date.now()}.json\`,
            JSON.stringify(report, null, 2)
          );
          
          return result;
        }
      });
    }
  }
});

// cypress/support/commands.js
Cypress.Commands.add('visualTest', (pageName) => {
  const baselineDir = 'cypress/screenshots/baseline';
  const currentDir = 'cypress/screenshots/current';
  
  // Ensure directories exist
  cy.task('exec', \`mkdir -p \${baselineDir} \${currentDir}\`);
  
  // Capture current screenshot
  cy.screenshot(\`current/\${pageName}\`, { capture: 'fullPage' });
  
  // Compare with baseline if exists
  const baselinePath = \`\${baselineDir}/\${pageName}.png\`;
  const currentPath = \`\${currentDir}/\${pageName}.png\`;
  
  cy.task('fileExists', baselinePath).then((exists) => {
    if (!exists) {
      cy.log('📸 Creating baseline for:', pageName);
      cy.task('copyFile', { from: currentPath, to: baselinePath });
    } else {
      cy.log('🔍 Comparing with baseline...');
      cy.task('compareScreenshotsWithAI', {
        baseline: baselinePath,
        current: currentPath,
        pageName
      }).then((result) => {
        cy.log('🤖 AI Visual Analysis:', result);
        
        if (result.significance === 'major') {
          cy.log('⚠️ Major visual differences detected!');
          expect(result.hasDifferences).to.be.false;
        } else if (result.significance === 'minor') {
          cy.log('ℹ️ Minor differences detected');
        } else {
          cy.log('✅ No significant differences');
        }
      });
    }
  });
});

// Test file
describe('AI-Enhanced Visual Regression Tests', () => {
  const pages = [
    { url: '/', name: 'homepage' },
    { url: '/products', name: 'products' },
    { url: '/about', name: 'about' }
  ];

  pages.forEach(({ url, name }) => {
    it(\`should have no visual regressions on \${name}\`, () => {
      cy.visit(url);
      
      // Wait for page to fully load
      cy.get('body').should('be.visible');
      cy.wait(1000); // Wait for animations
      
      // Perform AI visual test
      cy.visualTest(name);
    });
  });

  it('should detect intentional UI changes', () => {
    cy.visit('/');
    
    // Make a deliberate change
    cy.get('h1').invoke('css', 'color', 'red');
    
    cy.visualTest('homepage-modified');
    
    // AI should detect this as a significant change
  });

  it('should ignore dynamic content', () => {
    cy.visit('/dashboard');
    
    // Page has timestamps, user notifications, etc.
    // AI should ignore these dynamic elements
    cy.visualTest('dashboard');
    
    // Visit again after a few seconds
    cy.wait(2000);
    cy.reload();
    cy.visualTest('dashboard-reload');
    
    // AI should recognize these are the same despite timestamp changes
  });
});`}
              />

              <HandsOnExercise
                title="Exercise 2: Intelligent Test Data Generation"
                description="Generate test data with AI"
                level="advanced"
                tool="cypress"
                exercisePrompt="Build a system that uses AI to analyze your application's data models and generate realistic, edge-case-covering test data. Integrate this with Cypress tests to automatically populate forms with diverse test scenarios."
                aiExampleCode={`// Intelligent Test Data Generator with AI
// cypress.config.js
const { defineConfig } = require('cypress');
const fetch = require('node-fetch');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async generateTestDataset({ formSchema, scenarios }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          
          const prompt = \`Generate comprehensive test data for this form schema:
\${JSON.stringify(formSchema, null, 2)}

Create \${scenarios.length} test cases for these scenarios:
\${scenarios.map((s, i) => \`\${i + 1}. \${s}\`).join('\\n')}

For each scenario, generate realistic data that tests:
- Happy path
- Edge cases
- Boundary values
- Invalid inputs
- Special characters
- Internationalization

Return as JSON array of test cases:
[
  {
    "scenario": "scenario name",
    "data": { field: value, ... },
    "expectedResult": "success|error",
    "reasoning": "why this test case"
  }
]\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                  temperature: 0.8,
                  maxOutputTokens: 4096
                }
              })
            }
          );
          
          const data = await response.json();
          const text = data.candidates[0].content.parts[0].text;
          const jsonMatch = text.match(/\\[[\\s\\S]*\\]/);
          return JSON.parse(jsonMatch[0]);
        },
        
        async analyzeFormStructure({ html }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          const prompt = \`Analyze this HTML form and extract the data model:

\${html}

Return JSON schema:
{
  "formName": "name",
  "fields": [
    {
      "name": "field name",
      "type": "text|email|number|date|...",
      "required": boolean,
      "validation": "rules",
      "constraints": {}
    }
  ]
}\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            }
          );
          
          const data = await response.json();
          const text = data.candidates[0].content.parts[0].text;
          const jsonMatch = text.match(/\{[\\s\\S]*\}/);
          return JSON.parse(jsonMatch[0]);
        }
      });
    }
  }
});

// Test file
describe('AI-Generated Test Data Suite', () => {
  let testDatasets;
  
  before(() => {
    // Define form schema
    const formSchema = {
      name: { type: 'text', required: true, minLength: 2, maxLength: 50 },
      email: { type: 'email', required: true },
      age: { type: 'number', min: 18, max: 120 },
      phone: { type: 'tel', pattern: '^\\\\+?[1-9]\\\\d{1,14}$' },
      country: { type: 'select', options: ['US', 'UK', 'CA', 'AU'] },
      termsAccepted: { type: 'checkbox', required: true }
    };
    
    const scenarios = [
      'Valid registration - happy path',
      'Invalid email format',
      'Age below minimum',
      'Age above maximum',
      'Very long name (boundary test)',
      'Special characters in name',
      'International phone numbers',
      'SQL injection attempt',
      'XSS attempt',
      'Unicode characters',
      'Missing required fields',
      'All edge cases combined'
    ];
    
    // Generate comprehensive test dataset
    cy.task('generateTestDataset', { formSchema, scenarios })
      .then((datasets) => {
        testDatasets = datasets;
        cy.log(\`🤖 Generated \${datasets.length} test cases\`);
      });
  });

  it('should test all AI-generated scenarios', () => {
    testDatasets.forEach((testCase, index) => {
      cy.log(\`\\n📝 Test Case \${index + 1}: \${testCase.scenario}\`);
      cy.log('Reasoning:', testCase.reasoning);
      
      cy.visit('/register');
      
      // Fill form with AI-generated data
      Object.entries(testCase.data).forEach(([field, value]) => {
        if (typeof value === 'boolean') {
          if (value) {
            cy.get(\`[name="\${field}"]\`).check();
          }
        } else if (field === 'country') {
          cy.get(\`[name="\${field}"]\`).select(value);
        } else {
          cy.get(\`[name="\${field}"]\`).type(value);
        }
      });
      
      cy.get('button[type="submit"]').click();
      
      // Validate expected result
      if (testCase.expectedResult === 'success') {
        cy.url().should('not.include', '/register');
        cy.get('.success-message').should('be.visible');
      } else {
        cy.url().should('include', '/register');
        cy.get('.error-message').should('be.visible');
      }
    });
  });

  it('should analyze form and generate data automatically', () => {
    cy.visit('/signup');
    
    // Get form HTML
    cy.get('form').then(($form) => {
      const formHtml = $form[0].outerHTML;
      
      // AI analyzes form structure
      cy.task('analyzeFormStructure', { html: formHtml })
        .then((schema) => {
          cy.log('🤖 AI extracted form schema:', schema);
          
          // Generate test data based on analysis
          return cy.task('generateTestDataset', {
            formSchema: schema.fields.reduce((acc, field) => {
              acc[field.name] = {
                type: field.type,
                required: field.required,
                validation: field.validation
              };
              return acc;
            }, {}),
            scenarios: ['Valid input', 'Edge cases', 'Invalid input']
          });
        })
        .then((datasets) => {
          cy.log(\`🤖 Generated \${datasets.length} dynamic test cases\`);
          
          // Run tests with generated data
          datasets.forEach((testCase) => {
            cy.log('Testing:', testCase.scenario);
            // Execute test...
          });
        });
    });
  });
});`}
              />

              <HandsOnExercise
                title="Exercise 3: AI Test Maintenance System"
                description="Auto-fix broken tests with AI"
                level="advanced"
                tool="cypress"
                exercisePrompt="Create an intelligent test maintenance system that detects failing tests due to selector changes, uses AI to analyze the page and find the element using context clues, and automatically updates the test code with new selectors."
                aiExampleCode={`// Self-Healing Test Maintenance System with AI
// cypress.config.js
const { defineConfig } = require('cypress');
const fs = require('fs');
const fetch = require('node-fetch');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const selectorHistory = {};
      
      on('task', {
        async healBrokenSelector({ selector, elementDescription, pageHtml, testFile, lineNumber }) {
          const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
          
          const prompt = \`A Cypress test failed because selector "\${selector}" no longer works.
Element description: \${elementDescription}

Current page HTML:
\${pageHtml.substring(0, 3000)}

Tasks:
1. Find the element based on description
2. Suggest a NEW, STABLE selector (prefer data-testid, then role/aria, then text content)
3. Explain what changed

Return JSON:
{
  "newSelector": "suggested selector",
  "selectorType": "data-testid|role|text|css",
  "confidence": 0-100,
  "reasoning": "why this selector",
  "whatChanged": "description of the change"
}\`;

          const response = await fetch(
            \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=\${GEMINI_API_KEY}\`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
              })
            }
          );
          
          const data = await response.json();
          const text = data.candidates[0].content.parts[0].text;
          const jsonMatch = text.match(/\{[\\s\\S]*\}/);
          const result = JSON.parse(jsonMatch[0]);
          
          // Store healing history
          const historyEntry = {
            timestamp: new Date().toISOString(),
            oldSelector: selector,
            newSelector: result.newSelector,
            elementDescription,
            testFile,
            lineNumber,
            ...result
          };
          
          selectorHistory[selector] = historyEntry;
          
          // Save to healing log
          const logPath = 'cypress/healing-log.json';
          const log = fs.existsSync(logPath) 
            ? JSON.parse(fs.readFileSync(logPath, 'utf8'))
            : [];
          log.push(historyEntry);
          fs.writeFileSync(logPath, JSON.stringify(log, null, 2));
          
          // Optionally auto-fix test file
          if (result.confidence > 80) {
            const testCode = fs.readFileSync(testFile, 'utf8');
            const updatedCode = testCode.replace(
              new RegExp(\`cy\\\\.get\\\\(['"\]\${selector}['"]\\\\)\`, 'g'),
              \`cy.get('\${result.newSelector}') // AI-healed from: \${selector}\`
            );
            fs.writeFileSync(testFile, updatedCode);
            console.log(\`✅ Auto-fixed selector in \${testFile}\`);
          }
          
          return result;
        },
        
        getHealingHistory() {
          const logPath = 'cypress/healing-log.json';
          return fs.existsSync(logPath)
            ? JSON.parse(fs.readFileSync(logPath, 'utf8'))
            : [];
        }
      });
      
      // Intercept test failures
      on('after:spec', (spec, results) => {
        results.tests.forEach((test) => {
          if (test.state === 'failed') {
            const error = test.displayError;
            if (error && error.includes('Timed out retrying')) {
              console.log('🔧 Test failed - AI healing may help:', test.title);
            }
          }
        });
      });
    }
  }
});

// cypress/support/commands.js
Cypress.Commands.add('smartGet', (selector, description = '') => {
  // Try original selector
  return cy.get('body').then(($body) => {
    const exists = $body.find(selector).length > 0;
    
    if (exists) {
      return cy.get(selector);
    }
    
    // Selector failed - invoke AI healing
    cy.log('⚠️ Selector failed, attempting AI heal...', selector);
    
    const testFile = Cypress.spec.relative;
    const lineNumber = new Error().stack.split('\\n')[2];
    
    return cy.document().then((doc) => {
      const pageHtml = doc.documentElement.outerHTML;
      
      return cy.task('healBrokenSelector', {
        selector,
        elementDescription: description,
        pageHtml,
        testFile,
        lineNumber
      }).then((healing) => {
        cy.log('🤖 AI Healing Result:', healing);
        
        if (healing.confidence > 70) {
          cy.log(\`✅ Using healed selector: \${healing.newSelector}\`);
          cy.log(\`Reasoning: \${healing.reasoning}\`);
          return cy.get(healing.newSelector);
        } else {
          throw new Error(\`Could not heal selector: \${selector}. Confidence too low: \${healing.confidence}%\`);
        }
      });
    });
  });
});

// Test file
describe('Self-Healing Test Suite', () => {
  it('should automatically heal broken selectors', () => {
    cy.visit('/');
    
    // This selector might break if page changes
    cy.smartGet('#old-button-id', 'submit button')
      .should('be.visible')
      .click();
    
    // AI will find it even if ID changes
    cy.smartGet('.confirmation-message', 'success message')
      .should('contain', 'Success');
  });

  it('should handle multiple selector failures', () => {
    cy.visit('/profile');
    
    // Multiple potentially fragile selectors
    cy.smartGet('#user-name-field', 'user name input').type('John Doe');
    cy.smartGet('#email-input', 'email input').type('john@example.com');
    cy.smartGet('#save-profile-btn', 'save button').click();
    
    // All selectors will self-heal if they break
    cy.smartGet('.success-toast', 'success notification')
      .should('be.visible');
  });

  it('should report healing statistics', () => {
    cy.task('getHealingHistory').then((history) => {
      cy.log(\`📊 Healing History: \${history.length} fixes\`);
      
      history.forEach((entry) => {
        cy.log(\`
          Test: \${entry.testFile}
          Old: \${entry.oldSelector}
          New: \${entry.newSelector}
          Reason: \${entry.whatChanged}
          Confidence: \${entry.confidence}%
        \`);
      });
      
      // Generate report
      const report = {
        totalHealings: history.length,
        highConfidence: history.filter(h => h.confidence > 80).length,
        recentHealings: history.slice(-5)
      };
      
      cy.log('📈 Healing Report:', report);
    });
  });

  it('should prevent regression with healed selectors', () => {
    cy.visit('/dashboard');
    
    // Use previously healed selector
    cy.smartGet('[data-testid="user-menu"]', 'user menu button')
      .click();
    
    // If this breaks again, AI will re-heal
    cy.smartGet('[role="menuitem"]', 'logout option')
      .contains('Logout')
      .click();
  });
});`}
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