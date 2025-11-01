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
        "**What is Testing?** Imagine you build a car. Before selling it, you check: do brakes work? Does engine start? Do doors close? Testing software is similar - checking if everything works correctly.\n\n**Solution:** Start with manual testing - click through your app, try different scenarios. Document what works and what breaks. Use a simple checklist: Login ✓, Add to cart ✓, Checkout ✓, etc.",
        
        "**What is AI Testing?** Traditional testing: you manually write instructions for every check. AI testing: the computer learns patterns and writes many tests automatically. Like having a robot assistant!\n\n**Solution:** Install Playwright Codegen: `npm init playwright@latest`. Run `npx playwright codegen https://yoursite.com`. Click through your app - watch AI generate test code in real-time!",
        
        "**Step 1 - Why Manual Testing is Hard:** You have a shopping website with 100 pages. Testing each page manually takes 10 minutes = 16 hours! When developers add features daily, manual testing becomes impossible.\n\n**Solution:** Calculate your testing time: [Number of pages] × [Minutes per page] = Total hours. If result > 4 hours, you NEED automation. Start automating your top 5 most-used features first.",
        
        "**Step 2 - Enter Automation:** You write code (test scripts) to perform checks automatically. Computer runs tests in minutes, not hours. But problem: when website changes, you must update all test code manually.\n\n**Solution:** Create your first test:\n```javascript\ntest('login works', async () => {\n  await page.goto('https://mysite.com');\n  await page.fill('#email', 'test@test.com');\n  await page.fill('#password', 'password123');\n  await page.click('#login-btn');\n  expect(page.url()).toContain('dashboard');\n});\n```",
        
        "**Step 3 - How AI Solves This:** AI watches your app, learns how it works, and automatically updates tests when things change. Like GPS recalculating route when you take a wrong turn - automatically adapts!\n\n**Solution:** Add Healenium to Selenium:\n```python\npip install healenium\ndriver = Healenium(webdriver.Chrome())\n# AI now auto-fixes locators when UI changes!\n```\nOr use Testim.io (no-code) - just click the AI self-healing toggle in settings.",
        
        "**Step 4 - Real Benefits in Numbers:** Companies using AI testing report: 70% less time fixing broken tests, finding 45% more bugs, tests run 80% faster. More importantly: QA teams focus on creative work, not repetitive updates.\n\n**Solution:** Track your metrics BEFORE and AFTER:\n- Time to create 1 test: ____ minutes\n- Time to fix broken test: ____ minutes\n- Bugs found per week: ____\n- Test execution time: ____ minutes\nRecord these, then implement AI and compare after 1 month!",
        
        "**Step 5 - AI Predicts Problems:** Like weather forecast predicts rain, AI analyzes code changes and predicts: 'This change might break login, payment, and checkout'. You test those areas first, find bugs faster!\n\n**Solution:** Use GitHub Actions with smart test selection:\n```yaml\n- name: Run AI-prioritized tests\n  run: |\n    npm run test:ai-select\n    # Runs only tests affected by code changes\n```\nTools like Launchable.ai ($0 for open source) analyze git diff and run relevant tests only.",
        
        "**Step 6 - Natural Language Magic:** Write tests in plain English: 'Open website, click login button, enter email, check if dashboard appears'. AI converts this to technical code automatically. No programming required to start!\n\n**Solution:** Use TestRigor (paid) or Katalon (free):\n```\nnavigate to \"https://mysite.com\"\nclick \"Login\"\nenter \"user@test.com\" into \"Email\"\nenter \"password123\" into \"Password\"\nclick \"Submit\"\ncheck that page contains \"Welcome\"\n```\nAI converts this to working test code automatically!",
        
        "**Step 7 - AI Gets Smarter Over Time:** Every test run teaches AI more about your app. Like training a dog - initially clumsy, eventually expert. After 50 runs, AI understands your app better than many humans!\n\n**Solution:** Enable learning mode in your AI tool:\n```javascript\nconst validator = new AITestValidator({\n  learningMode: true,  // AI learns from each run\n  minRuns: 50  // Needs 50 runs to be confident\n});\n```\nRun tests frequently (daily CI/CD) so AI learns faster!",
        
        "**Beginner's Reality Check:** You don't need coding skills to start. Many AI tools let you click through your app - they watch and learn. Programming helps but isn't mandatory. Start simple, build confidence gradually.\n\n**Solution - Your 4-Week Roadmap:**\n**Week 1:** Record 1 test with Playwright Codegen (30 min setup)\n**Week 2:** Record 5 more tests, run daily (1 hour)\n**Week 3:** Set up GitHub Actions to run tests automatically (2 hours)\n**Week 4:** Add AI self-healing with Healenium (1 hour)\n**Total time investment:** 8-10 hours to transform your testing forever!"
      ]
    },
    {
      id: "automation",
      title: "Test Automation Strategies",
      description: "Building robust automated testing frameworks",
      icon: Zap,
      notes: [
        "**What is Test Automation?** Writing code that tests your code. Like building a robot to check if light switches work instead of manually flipping each switch daily. Set it up once, runs forever!\n\n**Solution:** Choose your first tool:\n- Cypress: `npm install cypress --save-dev` then `npx cypress open`\n- Playwright: `npm init playwright@latest`\n- Selenium: `pip install selenium` (Python) or `npm install selenium-webdriver` (JS)\nPick ONE, master it before trying others!",
        
        "**Step 1 - Understanding the Testing Pyramid:** Think of a pyramid: Wide base (70%) = quick unit tests checking individual features. Middle (20%) = integration tests checking features working together. Top (10%) = full user journey tests.\n\n**Solution - Build Your Pyramid:**\n```\n🔺 E2E Tests (10%): Full checkout flow\n🔸🔸 Integration (20%): Cart + Payment together  \n🔹🔹🔹🔹 Unit Tests (70%): Individual functions\n```\nCount your tests. Are you inverted (90% slow E2E)? Rebalance by adding unit tests first!",
        
        "**Why Pyramid Matters:** Bottom tests run in seconds, top tests take minutes. If you do mostly slow tests, waiting becomes painful. Pyramid keeps tests fast! Developers get instant feedback on code changes.\n\n**Solution:** Measure execution time:\n```bash\nnpm run test:unit    # Should be < 30 seconds\nnpm run test:integration  # Should be < 2 minutes\nnpm run test:e2e     # Can be 5-10 minutes\n```\nIf unit tests take >1 min, you're doing integration tests disguised as unit tests!",
        
        "**Step 2 - Page Object Model Explained:** Imagine instructions for 'login'. Instead of writing login steps 50 times in 50 tests, write once. When login page changes, update one file, not 50! This is Page Object Model.\n\n**Solution:** Create LoginPage class:\n```javascript\n// pages/LoginPage.js\nclass LoginPage {\n  async login(email, password) {\n    await page.fill('#email', email);\n    await page.fill('#password', password);\n    await page.click('#login-btn');\n  }\n}\n// test.spec.js\nconst loginPage = new LoginPage();\nawait loginPage.login('user@test.com', 'pass123');\n```\nNow 50 tests use loginPage.login() - change once, fixes everywhere!",
        
        "**Real Example:** Developer changes login button from 'Submit' to 'Sign In'. Without Page Objects: fix 50 tests manually (2-3 hours). With Page Objects: fix one file (5 minutes). That's why teams love it!\n\n**Solution:** When button changes:\n```javascript\n// Without Page Objects: Update 50 files 😰\nawait page.click('#submit-btn'); // Change in test1.js\nawait page.click('#submit-btn'); // Change in test2.js\n// ...48 more times\n\n// With Page Objects: Update 1 file 😎\nclass LoginPage {\n  async clickSubmit() {\n    await page.click('#signin-btn'); // Change ONCE\n  }\n}\n```",
        
        "**Step 3 - CI/CD Simple Explanation:** CI/CD = Continuous Integration/Continuous Deployment. Fancy name for: 'Every time developer adds code, automatically run tests and deploy if passing'. Catches bugs immediately!\n\n**Solution:** Create `.github/workflows/tests.yml`:\n```yaml\nname: Run Tests\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm install\n      - run: npm test\n```\nCommit this file - tests now run automatically on every code push!",
        
        "**Setting Up CI/CD:** Tools like GitHub Actions (free!), Jenkins (popular), or GitLab CI. They watch your code repository. Someone commits code? Automatically: run tests, show results, deploy to website if all green.\n\n**Solution - Complete GitHub Actions Setup:**\n```yaml\nname: Test & Deploy\non:\n  push:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n      - run: npm ci\n      - run: npm run test:all\n  deploy:\n    needs: test\n    if: success()\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm run deploy\n```\nTests pass? Auto-deploy! Tests fail? Deployment blocked!",
        
        "**Step 4 - Parallel Testing Explained:** Instead of running 100 tests one-by-one (takes 2 hours), split across 10 computers running 10 tests each simultaneously (takes 12 minutes!). That's parallel execution.\n\n**Solution - Enable Parallel Tests:**\n```javascript\n// playwright.config.js\nexport default {\n  workers: 4,  // Run 4 tests simultaneously\n  // OR use all CPU cores:\n  workers: process.env.CI ? 2 : undefined,\n};\n```\n```bash\n# Cypress parallel\nnpx cypress run --parallel --record --key abc123\n```\nGo from 60 minutes → 15 minutes instantly!",
        
        "**Cloud Testing Services:** Don't have 10 computers? Services like BrowserStack or Sauce Labs rent you virtual computers. Pay per hour, get instant access to hundreds of browsers and devices. Test iPhone, Android, Chrome, Safari - all at once!\n\n**Solution - BrowserStack Integration:**\n```javascript\nconst capabilities = {\n  'browserName': 'Chrome',\n  'browser_version': 'latest',\n  'os': 'Windows',\n  'os_version': '11',\n  'browserstack.user': process.env.BS_USER,\n  'browserstack.key': process.env.BS_KEY\n};\ndriver = new webdriver.Builder()\n  .usingServer('https://hub.browserstack.com/wd/hub')\n  .withCapabilities(capabilities)\n  .build();\n```\nRun same test on 20 browsers/devices in parallel!",
        
        "**Step 5 - Data-Driven Testing:** You need to test login with 100 different users. Without data-driven: write 100 separate tests (nightmare!). With it: write one test, read 100 users from Excel file. One test, 100 scenarios!\n\n**Solution - CSV Data-Driven Test:**\n```javascript\n// users.csv\nemail,password,shouldPass\nvalid@test.com,Pass123!,true\ninvalid@test.com,wrong,false\nadmin@test.com,Admin123,true\n\n// test.spec.js\nconst users = readCSV('users.csv');\nusers.forEach(user => {\n  test(`Login ${user.email}`, async () => {\n    await loginPage.login(user.email, user.password);\n    if (user.shouldPass) {\n      expect(page.url()).toContain('dashboard');\n    } else {\n      expect(page).toHaveText('Invalid credentials');\n    }\n  });\n});\n```",
        
        "**Practical Example:** Test payment with: valid card, expired card, insufficient funds, wrong CVV, international card. One test script + 5 rows of data = 5 automated scenarios. Add more rows anytime without coding!\n\n**Solution:**\n```javascript\nconst testData = [\n  { card: '4242424242424242', cvv: '123', expected: 'success' },\n  { card: '4000000000000069', cvv: '123', expected: 'expired' },\n  { card: '4000000000009995', cvv: '123', expected: 'declined' },\n  { card: '4242424242424242', cvv: '000', expected: 'invalid_cvv' },\n];\n\ntestData.forEach(data => {\n  test(`Payment with ${data.expected}`, async () => {\n    await checkoutPage.enterCard(data.card, data.cvv);\n    await checkoutPage.submit();\n    expect(await checkoutPage.getStatus()).toBe(data.expected);\n  });\n});\n```\nAdd more scenarios? Just add rows!",
        
        "**Step 6 - Smart Test Selection:** Changed payment code? AI runs payment tests immediately (2 minutes). Other tests run tonight (no rush). Developer gets fast feedback on what matters, doesn't wait hours for unrelated tests.\n\n**Solution - Git-Based Test Selection:**\n```bash\n# Install Launchable (free for open source)\nnpm install -g launchable\n\n# In CI/CD:\nlaunchable record build\nlaunchable subset --target 10m npm test\n# Runs only tests affected by changed files\n# Target: finish in 10 minutes\n```\nOr simpler approach:\n```bash\ngit diff --name-only | grep payment && npm run test:payment\n```",
        
        "**Getting Started Roadmap:** Week 1: Learn one tool (Selenium/Cypress). Week 2: Automate login test. Week 3: Add 5 more tests. Week 4: Set up CI/CD. Week 5: Try data-driven testing. Baby steps build expertise!\n\n**Solution - 5-Week Action Plan:**\n```\n✅ Week 1: Install Cypress, record 1 test (2 hours)\n✅ Week 2: Convert to Page Object Model (3 hours)\n✅ Week 3: Add 5 critical path tests (4 hours)\n✅ Week 4: Set up GitHub Actions CI (2 hours)\n✅ Week 5: Add data-driven testing (2 hours)\n\nTotal: 13 hours over 5 weeks\nResult: Automated test suite running on every commit!\n```\nSet calendar reminders NOW for each week!"
      ]
    },
    {
      id: "integration",
      title: "AI Integration Techniques",
      description: "Implementing AI-powered testing tools",
      icon: Code,
      notes: [
        "**What is AI Integration?** Connecting AI superpowers to your existing tests. Like upgrading from regular car to self-driving car. Same basic vehicle, but now has AI features making life easier!\n\n**Solution:** Start with easiest AI integration:\n```bash\n# Add AI self-healing to existing Selenium tests\npip install healenium\n# Or add Visual AI to Cypress\nnpm install @applitools/eyes-cypress\ncypress open\n```\nNo need to rewrite tests - just add AI layer on top!",
        
        "**Step 1 - Visual AI Testing:** Human eyes miss tiny differences. AI takes screenshots and compares pixel-by-pixel. Detects: buttons moved 2 pixels, colors slightly different, text overlapping images. Perfect consistency checking!\n\n**Solution - Add Applitools to Existing Tests:**\n```javascript\nimport { eyes } from '@applitools/eyes-cypress';\n\n// In existing test, add 1 line:\nit('homepage looks correct', () => {\n  cy.visit('/home');\n  cy.eyesCheckWindow('Homepage');  // AI visual check!\n});\n```\nFirst run: AI saves baseline. Future runs: AI compares!",
        
        "**Setting Up Visual Testing:** Install Applitools (free trial) or Percy. Add 3 lines of code to existing tests: 'Take screenshot, compare to baseline'. Done! Now every test run checks visual appearance automatically.\n\n**Solution - Complete Percy Setup:**\n```bash\nnpm install --save-dev @percy/cli @percy/cypress\nexport PERCY_TOKEN=your_token_here\n```\n```javascript\n// cypress/support/commands.js\nimport '@percy/cypress';\n\n// In test:\ncy.visit('/products');\ncy.percySnapshot('Product Page');  // That's it!\n```\nRun: `percy exec -- cypress run`. Percy compares across browsers automatically!",
        
        "**Real Success Story:** Company had subtle CSS bug - white text on white background (invisible!). Visual AI caught it immediately. Manual testers ran tests 10 times, nobody noticed because they focused on functionality, not pixels.\n\n**Solution - Prevent This Bug:**\n```javascript\n// Add contrast checking\ncy.eyesCheckWindow('Login Form', {\n  accessibility: {\n    level: 'AA',  // WCAG AA standard\n    guidelinesVersion: 'WCAG_2_1'\n  }\n});\n```\nApplitools checks: color contrast, text readability, ARIA labels automatically!\nResult: Catches accessibility + visual bugs humans miss!",
        
        "**Step 2 - Self-Healing Tests:** Traditional test: 'Click button with id=login-btn'. Developer changes to id=submit-btn. Test breaks. Self-healing AI: 'Hmm, id changed, but button still says Login and is at same position - found it!'\n\n**Solution - Enable Healenium:**\n```python\nfrom selenium import webdriver\nfrom healenium import Healenium\n\ndriver = webdriver.Chrome()\ndriver = Healenium(driver)  # Add this 1 line!\n\n# Your existing tests work unchanged\ndriver.find_element_by_id('login-btn').click()\n# If ID changes, Healenium auto-fixes! 🎉\n```\nNo code changes needed to existing 100 tests!",
        
        "**How Healenium Works:** Install Healenium library (free, open source). It watches your tests. When tests fail due to UI changes, Healenium tries 10+ strategies to find elements. Success rate: 85-92% automatic fixes!\n\n**Solution - View Healing Reports:**\n```bash\ndocker-compose up -d  # Start Healenium\n# Run tests normally\n# Visit http://localhost:7878\n```\nSee dashboard showing:\n✓ Which elements were healed\n✓ Old vs new locators  \n✓ Confidence scores\n✓ Approve or reject AI suggestions\nFailed to heal? Dashboard suggests alternatives!",
        
        "**Step 3 - AI Test Generation:** You don't write test code. Instead: Open Chrome, visit your website, click around (login, browse, checkout). AI watches, records, generates professional test code automatically. Like screen recording that creates code!\n\n**Solution - Generate 10 Tests in 30 Minutes:**\n```bash\n# Playwright Codegen\nnpx playwright codegen https://yoursite.com\n\n# Browser opens with recorder panel\n# 1. Click through login flow (2 min)\n# 2. Click \"Copy code\" → save as login.spec.js\n# 3. Click through checkout (3 min)\n# 4. Copy code → save as checkout.spec.js\n# Repeat for 10 critical flows (30 min total)\n\nnpx playwright test  # Run all 10 tests!\n```",
        
        "**Practical Session:** Install Playwright, run 'npx playwright codegen'. Browser opens. You perform login. Stop recording. AI generated 20 lines of code doing exactly what you did! Run 'npx playwright test' - it replays perfectly!\n\n**Solution - Save & Organize Generated Tests:**\n```bash\nmkdir -p tests/generated\nnpx playwright codegen --target javascript -o tests/generated/login.spec.js\n# After recording:\nnpm test tests/generated/login.spec.js\n```\nTips for better generation:\n✓ Use data-testid attributes (AI loves them)\n✓ Record slowly (let pages load fully)\n✓ Click exactly on buttons (not near them)\n✓ AI generates better selectors from good HTML!",
        
        "**Step 4 - Fixing Flaky Tests:** Some tests randomly fail (pass sometimes, fail sometimes). Very frustrating! AI analyzes 100 test runs, identifies patterns: 'This test fails when backend is slow'. Suggests: 'Add 5-second timeout'.\n\n**Solution - AI Flaky Test Detection:**\n```javascript\n// Install test-retry with AI analysis\nnpm install --save-dev @testim/root-cause\n\n// Add to your test config:\nreporters: [\n  ['@testim/root-cause/reporter', {\n    generateReport: true,\n    detectFlaky: true  // AI analyzes patterns\n  }]\n]\n```\nAfter 50 runs, AI reports:\n\"Test 'checkout' fails 20% of time when backend >2s\"\nSuggestion: Increase timeout or mock backend!",
        
        "**Why Flaky Tests Matter:** One flaky test ruins everything. Team deploys new feature, test fails randomly, team panics. After investigation: false alarm, test problem not code problem. AI prevents this chaos by stabilizing tests.\n\n**Solution - Fix Common Flaky Patterns:**\n```javascript\n// BAD: Race condition\nawait page.click('#submit');\nawait expect(page.locator('.success')).toBeVisible();\n\n// GOOD: AI-recommended fix\nawait page.click('#submit');\nawait page.waitForLoadState('networkidle');  // Wait for all requests\nawait expect(page.locator('.success')).toBeVisible({ timeout: 10000 });\n\n// EVEN BETTER: Retry with exponential backoff\nawait page.click('#submit');\nawait expect(async () => {\n  const elem = await page.locator('.success');\n  await expect(elem).toBeVisible();\n}).toPass({ timeout: 15000, intervals: [1000, 2000, 5000] });\n```",
        
        "**Step 5 - Intelligent Test Prioritization:** You have 1000 tests. Running all takes 3 hours. AI analyzes what you changed today (login code) and says: 'Run these 50 login-related tests first (10 minutes). Others can wait.'\n\n**Solution - Implement Smart Prioritization:**\n```yaml\n# .github/workflows/tests.yml\n- name: Smart test selection\n  run: |\n    # Changed files\n    CHANGED=$(git diff --name-only HEAD~1)\n    \n    if echo $CHANGED | grep -q \"auth/\"; then\n      npm run test:auth  # 5 min\n    elif echo $CHANGED | grep -q \"payment/\"; then\n      npm run test:payment  # 8 min\n    else\n      npm run test:smoke  # 2 min quick check\n    fi\n```\nDevelopers get 2-8 minute feedback instead of 3 hours!",
        
        "**Business Value:** Developers get feedback in 10 minutes instead of 3 hours. They fix issues immediately while context is fresh. Productivity increases dramatically. Features ship faster, quality improves.\n\n**Solution - Measure Business Impact:**\n```javascript\n// Track metrics\nconst metrics = {\n  beforeAI: {\n    avgFeedbackTime: '180 min',\n    testsPerDay: 2,\n    bugsEscaping: 15,\n    maintenanceHours: 12\n  },\n  afterAI: {\n    avgFeedbackTime: '10 min',  // 18x faster!\n    testsPerDay: 20,            // 10x more!\n    bugsEscaping: 3,            // 80% reduction!\n    maintenanceHours: 2         // 83% less time!\n  }\n};\n```\nShow this to management = instant approval for AI tools budget!",
        
        "**Step 6 - Anomaly Detection:** API returns data. Test passes all checks. But AI notices: 'Response took 3 seconds instead of usual 100ms'. Alerts you about performance problem before customers complain. AI watches patterns, not just pass/fail.\n\n**Solution - Add Performance Monitoring:**\n```javascript\nconst { AITestValidator } = require('ai-test-validator');\nconst validator = new AITestValidator({ learningMode: true });\n\ntest('API performance', async () => {\n  const start = Date.now();\n  const response = await fetch('/api/users');\n  const duration = Date.now() - start;\n  \n  // Traditional check\n  expect(response.status).toBe(200);\n  \n  // AI anomaly detection\n  const anomalies = await validator.detectAnomalies({\n    endpoint: '/api/users',\n    duration,\n    responseSize: response.headers.get('content-length')\n  });\n  \n  if (anomalies.length > 0) {\n    console.warn('⚠️ Performance anomaly:', anomalies);\n    // AI learned: usually 100-150ms\n    // This run: 3000ms (20x slower!)\n  }\n});\n```\nCatches performance regressions before production!"
      ]
    },
    {
      id: "tools",
      title: "Essential Testing Tools",
      description: "Must-have tools for modern testing",
      icon: Target,
      notes: [
        "**Choosing Your First Tool:** Like choosing first programming language - there's no 'best', only 'best for your situation'. Consider: your team's skills, application type, budget, learning curve.\n\n**Solution - Quick Decision Tree:**\n```\nDo you know JavaScript? \n  YES → Cypress or Playwright\n  NO → Katalon Studio (visual interface)\n\nNeed all browsers (Chrome, Firefox, Safari)?\n  YES → Playwright or Selenium\n  NO → Cypress is fine\n\nTeam has zero coding experience?\n  YES → Start with TestRigor or Katalon\n  NO → Start with Playwright (easiest code-based)\n```",
        
        "**Tool #1: Selenium (Most Popular):** Works with all programming languages (Python, Java, JavaScript). Tests all browsers. Free forever. Large community = tons of help online. Downside: steeper learning curve for beginners.\n\n**Solution - Selenium Quick Start:**\n```python\n# Installation (Python)\npip install selenium\n\n# Your first test (5 lines!)\nfrom selenium import webdriver\ndriver = webdriver.Chrome()\ndriver.get('https://google.com')\ndriver.find_element('name', 'q').send_keys('Selenium')\ndriver.find_element('name', 'q').submit()\ndriver.quit()\n```\nRun: `python test.py`. Browser opens, searches, closes! 🎉",
        
        "**When to Use Selenium:** Your company uses Java/Python already, or you test legacy web applications, or you need maximum flexibility and don't mind complexity. Industry standard for 15+ years.\n\n**Solution - Production-Ready Selenium:**\n```python\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\nclass TestLogin:\n    def setup(self):\n        self.driver = webdriver.Chrome()\n        self.wait = WebDriverWait(self.driver, 10)\n    \n    def test_login_success(self):\n        self.driver.get('https://myapp.com/login')\n        self.wait.until(EC.presence_of_element_located((By.ID, 'email')))\n        self.driver.find_element(By.ID, 'email').send_keys('user@test.com')\n        self.driver.find_element(By.ID, 'password').send_keys('pass123')\n        self.driver.find_element(By.ID, 'login-btn').click()\n        self.wait.until(EC.url_contains('dashboard'))\n        assert 'Dashboard' in self.driver.title\n```",
        
        "**Adding Healenium to Selenium:** Install Healenium library. It adds AI self-healing to Selenium tests. When UI changes, Healenium automatically fixes selectors. Success rate: 92% after training on your app for 2 weeks.\n\n**Solution - Selenium + AI in 10 Minutes:**\n```bash\n# Install Healenium\npip install healenium\n\n# Start Healenium services\ndocker-compose -f healenium-docker-compose.yml up -d\n```\n```python\nfrom selenium import webdriver\nfrom healenium import Healenium\n\ndriver = webdriver.Chrome()\ndriver = Healenium(driver)  # Add AI self-healing!\n\n# All your existing tests now self-heal! 🚀\n```\nZero code changes to existing tests!",
        
        "**Tool #2: Cypress (Developer Favorite):** JavaScript only. Super fast, very reliable, beautiful interface showing test execution. Automatic waiting (no sleep commands). Downside: only Chrome-based browsers initially (Firefox support added recently).\n\n**Solution - Cypress Quick Start:**\n```bash\nnpm install cypress --save-dev\nnpx cypress open\n# Click \"Create new spec\"\n# Select \"Scaffold example specs\"\n```\n```javascript\n// cypress/e2e/login.cy.js\ndescribe('Login Test', () => {\n  it('logs in successfully', () => {\n    cy.visit('https://myapp.com')\n    cy.get('#email').type('user@test.com')\n    cy.get('#password').type('pass123')\n    cy.get('#login-btn').click()\n    cy.url().should('include', '/dashboard')\n    cy.contains('Welcome').should('be.visible')\n  })\n})\n```\nRun: `npx cypress run`. Watch beautiful video recording!",
        
        "**When to Use Cypress:** Your team knows JavaScript, you build modern web apps (React, Vue, Angular), you value developer experience and speed over broad browser coverage. Perfect for startups and agile teams.\n\n**Solution - Cypress Best Practices:**\n```javascript\n// ✓ GOOD: Use data-testid\ncy.get('[data-testid=\"login-btn\"]').click()\n\n// ✗ BAD: Use brittle selectors\ncy.get('.btn.btn-primary.ml-2').click()\n\n// ✓ GOOD: Custom commands\nCypress.Commands.add('login', (email, password) => {\n  cy.visit('/login')\n  cy.get('#email').type(email)\n  cy.get('#password').type(password)\n  cy.get('#login-btn').click()\n})\n\n// Now in tests:\ncy.login('user@test.com', 'pass123')\n```",
        
        "**Cypress + Applitools = Visual AI:** Add Applitools Eyes plugin. Now every test includes visual validation. Catches CSS bugs, responsive issues, cross-browser rendering problems automatically. Free tier available!\n\n**Solution - Add Visual AI to Cypress:**\n```bash\nnpm install @applitools/eyes-cypress\nnpx eyes-setup\n```\n```javascript\nimport '@applitools/eyes-cypress'\n\ndescribe('Visual tests', () => {\n  beforeEach(() => {\n    cy.eyesOpen({ appName: 'MyApp', testName: Cypress.currentTest.title })\n  })\n\n  it('homepage looks perfect', () => {\n    cy.visit('/')\n    cy.eyesCheckWindow('Homepage')  // AI visual check!\n  })\n\n  afterEach(() => {\n    cy.eyesClose()\n  })\n})\n```\nAI checks layout, colors, fonts across all browsers!",
        
        "**Tool #3: Playwright (Rising Star):** Microsoft's tool. Similar to Cypress but supports all browsers (Chrome, Firefox, Safari) natively. Has built-in codegen for recording tests. Modern, powerful, actively developed.\n\n**Solution - Playwright Complete Setup:**\n```bash\nnpm init playwright@latest\n# Select: TypeScript, GitHub Actions, Playwright Test\n\n# Generate your first test\nnpx playwright codegen https://myapp.com\n```\n```typescript\n// tests/login.spec.ts\nimport { test, expect } from '@playwright/test'\n\ntest('login flow', async ({ page }) => {\n  await page.goto('https://myapp.com')\n  await page.fill('#email', 'user@test.com')\n  await page.fill('#password', 'pass123')\n  await page.click('#login-btn')\n  await expect(page).toHaveURL(/.*dashboard/)\n  await expect(page.locator('.welcome')).toBeVisible()\n})\n```\nRun on ALL browsers: `npx playwright test --project=chromium --project=firefox --project=webkit`",
        
        "**When to Use Playwright:** You need cross-browser testing, want recording capabilities, value detailed debugging. Great for teams migrating from Selenium wanting modern features without giving up browser coverage.\n\n**Solution - Playwright Power Features:**\n```typescript\n// Auto-wait (no more sleep!)\nawait page.click('button')  // Waits until clickable\n\n// Multiple browsers in one test\ntest.describe('cross-browser', () => {\n  test.use({ browserName: 'chromium' })\n  test.use({ browserName: 'firefox' })\n  test.use({ browserName: 'webkit' })  // Safari!\n})\n\n// Mobile testing\ntest.use({\n  ...devices['iPhone 12'],\n  locale: 'en-US',\n  geolocation: { longitude: -122.4194, latitude: 37.7749 },\n  permissions: ['geolocation']\n})\n\n// Network mocking\nawait page.route('**/api/users', route => {\n  route.fulfill({ status: 200, body: JSON.stringify([...]) })\n})\n```",
        
        "**Tool #4: Katalon Studio (No-Code Option):** Visual interface for creating tests. Drag-drop elements, click to create tests. Built-in AI self-healing, visual testing, analytics. Ideal for non-programmers. Free version available.\n\n**Solution - Katalon in 30 Minutes:**\n```\n1. Download Katalon Studio (free): https://katalon.com/download\n2. Open Katalon → Create New Project\n3. Click \"Record Web\" button\n4. Browser opens → Click through your app\n5. Stop recording → Katalon generated test!\n6. Click \"Run\" → Watch it replay!\n\nNo coding required! 🎉\n```\nFor coders, Katalon generates Groovy code you can customize.",
        
        "**When to Use Katalon:** Your team has manual testers wanting to start automation without learning programming, or you need quick results for management, or budget is tight (free version is capable).\n\n**Solution - Katalon Best Workflow:**\n```groovy\n// Katalon supports custom keywords\n@Keyword\ndef login(String email, String password) {\n  WebUI.navigateToUrl('https://myapp.com/login')\n  WebUI.setText(findTestObject('Login/Email'), email)\n  WebUI.setText(findTestObject('Login/Password'), password)\n  WebUI.click(findTestObject('Login/SubmitBtn'))\n}\n\n// In tests:\nCustomKeywords.'com.myapp.Login.login'('user@test.com', 'pass123')\n\n// Enable AI self-healing:\n// Project → Settings → Self-Healing → Enable\n// Threshold: 0.85 (85% confidence)\n```",
        
        "**Tool #5: TestRigor (Plain English):** Write tests in normal English: 'click on Sign Up button', 'enter email as john@test.com'. AI converts to actions. No coding required at all! Expensive but magical for non-technical teams.\n\n**Solution - TestRigor Example:**\n```\nTest Case: User Registration\n\nopen \"https://myapp.com\"\nclick \"Sign Up\"\nenter \"John Doe\" into \"Full Name\"\nenter \"john@example.com\" into \"Email\"\nenter \"SecurePass123!\" into \"Password\"\nclick \"Create Account\"\ncheck that page contains \"Welcome, John!\"\ncheck that url contains \"dashboard\"\n```\nThat's it! No code! AI figures out which button, which field, how to interact.",
        
        "**Decision Framework:** Coding skills? Yes → Cypress/Playwright/Selenium. No → Katalon/TestRigor. Budget? Limited → Selenium/Cypress/Playwright (free). Flexible → Consider paid tools. Browser coverage critical? → Selenium/Playwright. Speed critical? → Cypress.\n\n**Solution - Complete Decision Matrix:**\n```\nIF team_knows_python THEN selenium\nELSE IF team_knows_javascript AND need_speed THEN cypress\nELSE IF team_knows_javascript AND need_all_browsers THEN playwright\nELSE IF team_has_no_coders AND has_budget THEN testRigor\nELSE IF team_has_no_coders AND limited_budget THEN katalon\nELSE default_to playwright  // Best all-rounder\n\nMy recommendation for beginners:\n1st choice: Playwright (easiest + most powerful)\n2nd choice: Cypress (if JS-only apps)\n3rd choice: Katalon (if zero coding experience)\n```",
        
        "**Beginner's Path:** Start with Playwright Codegen (easiest). Record 5 tests. Feel the power! Then try Cypress (beautiful developer experience). Finally explore Selenium (industry standard). Master one before switching!\n\n**Solution - Your 12-Week Learning Path:**\n```\nWeek 1-2: Playwright Codegen\n- Install Playwright\n- Record 10 tests by clicking\n- Run tests, see them pass\n- Confidence boost! ✓\n\nWeek 3-4: Playwright Code\n- Read generated code\n- Modify small things\n- Write 1 test from scratch\n- Understanding grows ✓\n\nWeek 5-6: Page Objects\n- Extract LoginPage class\n- Extract CheckoutPage class\n- Reuse in multiple tests\n- Code cleaner! ✓\n\nWeek 7-8: CI/CD\n- Set up GitHub Actions\n- Tests run on every commit\n- Team gets automated reports\n- Professional setup! ✓\n\nWeek 9-10: Data-Driven\n- Add CSV test data\n- 1 test → 50 scenarios\n- Explosion of coverage! ✓\n\nWeek 11-12: AI Features\n- Add visual AI (Applitools)\n- Add self-healing (Healenium)\n- Become AI testing expert! 🚀\n\nTotal: 12 weeks to mastery!\n```"
      ]
    },
    {
      id: "workflow",
      title: "AI Testing Workflow",
      description: "Structuring your AI-enhanced testing process",
      icon: Workflow,
      notes: [
        "**What is a Workflow?** A workflow is your process - the steps you follow from 'feature requested' to 'feature tested and deployed'. Good workflow = organized, efficient. Bad workflow = chaos, missed bugs!\n\n**Solution:** Map your current workflow:\n```\n1. Feature request → _____ days\n2. Test creation → _____ hours  \n3. Test execution → _____ minutes\n4. Bug fixing → _____ hours\n5. Deployment → _____ days\nTotal: _____ \n```\nTarget with AI: Cut each phase by 50-70%!",
        
        "**Phase 1: Understanding Requirements (Day 1):** Product manager writes: 'Users should be able to reset password via email'. You read this and think: What needs testing? Happy path (works correctly), sad path (wrong email), edge cases (expired links).\n\n**Solution:** Use AI to generate test scenarios:\n```javascript\nconst scenarios = await aiTool.generateTestCases({\n  feature: 'Password reset via email',\n  userStory: 'As a user, I want to reset my password...'\n});\n// AI returns 15+ scenarios including edge cases you missed!\n```",
        
        "**Phase 2: Creating Tests (Days 2-3):** Traditional: You write test code manually (slow). AI-enhanced: You perform actions in browser, AI records and generates test code (10x faster). Or write in plain English, AI converts to code.\n\n**Solution:** Record tests with Playwright:\n```bash\nnpx playwright codegen https://myapp.com\n# Click through feature\n# Copy generated code\n# Save as password-reset.spec.js\n```\n10 tests in 1 hour instead of 1 day!",
        
        "**Phase 3: Test Execution (Continuous):** Every time developer commits code, automated tests run. CI/CD system (GitHub Actions, Jenkins) triggers tests, runs them on cloud machines, shows green (pass) or red (fail) results in 5-10 minutes.\n\n**Solution:** GitHub Actions config:\n```yaml\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm ci && npm test\n```",
        
        "**Phase 4: Managing Test Data (Ongoing Challenge):** Tests need data: users, products, orders. AI generates realistic fake data: proper email formats, valid addresses, reasonable prices. Mimics production data without privacy issues.\n\n**Solution:** Use Faker.js + AI:\n```javascript\nconst { faker } = require('@faker-js/faker');\nconst testUser = {\n  email: faker.internet.email(),\n  name: faker.person.fullName(),\n  address: faker.location.streetAddress(),\n  creditCard: faker.finance.creditCardNumber()\n};\n```",
        
        "**Phase 5: Analyzing Results (After Each Run):** Test fails. Is it a real bug or test problem? AI analyzes: checks error logs, examines screenshots, reviews network requests. Reports: 'API returned 500 error - backend problem, not test issue'.\n\n**Solution:** Enable detailed reporting:\n```javascript\nuse: {\n  screenshot: 'only-on-failure',\n  video: 'retain-on-failure',\n  trace: 'on-first-retry'\n}\n```\nPlaywright captures everything for debugging!",
        
        "**Your First Workflow (Simplified):** Week 1: Read requirement, create 1 test manually. Week 2: Set up AI tool, record 5 tests. Week 3: Configure CI/CD, tests run automatically. Week 4: Review AI suggestions, improve coverage. Build from there!\n\n**Solution - Complete 4-Week Plan:**\n```\nWeek 1: Manual baseline (5 hours)\nWeek 2: AI tool setup + 5 tests (3 hours)\nWeek 3: CI/CD config (2 hours)\nWeek 4: Review & optimize (2 hours)\nTotal: 12 hours = Production-ready AI workflow! 🚀\n```"
      ]
    },
    {
      id: "practices",
      title: "Best Practices",
      description: "Guidelines for successful AI testing implementation",
      icon: Shield,
      notes: [
        "**What are Best Practices?** These are lessons learned from thousands of teams over decades. Following them helps you avoid common mistakes, save time, reduce frustration. Like GPS preventing wrong turns!\n\n**Solution:** Create a checklist:\n```\n✓ Start with 1 feature, not 100\n✓ Measure before/after metrics\n✓ Review AI-generated tests\n✓ Retrain AI monthly\n✓ Document everything in Git\n✓ Balance AI (80%) + Human (20%) testing\n```",
        
        "**Practice #1: Start Small (Critical!):** Don't try automating entire application in month one! Pick ONE critical feature (usually login). Master it completely. Then expand. Teams rushing to 100% automation often fail and abandon efforts.\n\n**Solution - Month 1 Focus:**\n```\nPick your #1 critical feature (login/checkout/signup)\nWrite 3-5 tests for it\nMake them bulletproof\nRun in CI/CD\nTHEN expand to feature #2\n```\nSuccess breeds success!",
        
        "**Practice #2: Measure Everything:** Before AI testing, track: How long to create tests? Fix tests? Find bugs? After AI, track same metrics. Show management: '70% faster test creation, 50% fewer bugs escaping to production.'\n\n**Solution - Metrics Dashboard:**\n```javascript\nconst metrics = {\n  testCreationTime: '45min → 8min (82% faster)',\n  testMaintenance: '12hrs/week → 2hrs/week (83% less)',\n  bugsFound: '8/sprint → 15/sprint (87% more)',\n  deployment: '2/week → 8/week (4x faster)'\n};\n```\nShow this to management = instant ROI proof!",
        
        "**Practice #3: Trust but Verify AI:** AI generates test. Looks correct. But run it! Verify it tests what you intended. AI is powerful but not perfect. 5-10% of AI-generated tests need human adjustment.\n\n**Solution - Review Process:**\n```bash\n# After AI generates 20 tests\nnpm run test:ai-generated\n# Review failures\n# Fix 1-2 tests that need adjustment\n# Approve remaining 18\n# Provide feedback to AI\n```",
        
        "**Practice #4: Version Control Everything:** Tests, AI models, configuration, training data - all in Git. Tag releases: 'v1.5 - Accuracy 92%, Coverage 87%'. Can rollback if new AI version performs worse.\n\n**Solution:**\n```bash\ngit add tests/ ai-config/ training-data/\ngit commit -m \"AI Test Suite v2.1 - 94% accuracy\"\ngit tag v2.1-ai-tests\n# Can always rollback: git checkout v2.0-ai-tests\n```",
        
        "**Your Implementation Timeline:** Month 1: Choose tool, train on it. Month 2: Automate 10 key tests. Month 3: Set up CI/CD and basic AI features. Month 4-6: Expand coverage, refine AI. Month 7-12: Full implementation, measure ROI. Realistic expectations!\n\n**Solution - 12-Month Roadmap:**\n```\nM1: Tool selection + training (20hrs)\nM2: First 10 tests (15hrs)\nM3: CI/CD setup (10hrs)\nM4-6: Expand to 50 tests (25hrs)\nM7-9: Add AI features (20hrs)\nM10-12: Optimize & scale (15hrs)\n\nTotal: 105 hours over 12 months\nResult: Enterprise-grade AI test automation! 🎉\n```"
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
