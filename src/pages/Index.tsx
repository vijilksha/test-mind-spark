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
        "**What is Testing?** Imagine you build a car. Before selling it, you check: do brakes work? Does engine start? Do doors close? Testing software is similar - checking if everything works correctly.",
        
        "**What is AI Testing?** Traditional testing: you manually write instructions for every check. AI testing: the computer learns patterns and writes many tests automatically. Like having a robot assistant!",
        
        "**Step 1 - Why Manual Testing is Hard:** You have a shopping website with 100 pages. Testing each page manually takes 10 minutes = 16 hours! When developers add features daily, manual testing becomes impossible.",
        
        "**Step 2 - Enter Automation:** You write code (test scripts) to perform checks automatically. Computer runs tests in minutes, not hours. But problem: when website changes, you must update all test code manually.",
        
        "**Step 3 - How AI Solves This:** AI watches your app, learns how it works, and automatically updates tests when things change. Like GPS recalculating route when you take a wrong turn - automatically adapts!",
        
        "**Step 4 - Real Benefits in Numbers:** Companies using AI testing report: 70% less time fixing broken tests, finding 45% more bugs, tests run 80% faster. More importantly: QA teams focus on creative work, not repetitive updates.",
        
        "**Step 5 - AI Predicts Problems:** Like weather forecast predicts rain, AI analyzes code changes and predicts: 'This change might break login, payment, and checkout'. You test those areas first, find bugs faster!",
        
        "**Step 6 - Natural Language Magic:** Write tests in plain English: 'Open website, click login button, enter email, check if dashboard appears'. AI converts this to technical code automatically. No programming required to start!",
        
        "**Step 7 - AI Gets Smarter Over Time:** Every test run teaches AI more about your app. Like training a dog - initially clumsy, eventually expert. After 50 runs, AI understands your app better than many humans!",
        
        "**Beginner's Reality Check:** You don't need coding skills to start. Many AI tools let you click through your app - they watch and learn. Programming helps but isn't mandatory. Start simple, build confidence gradually."
      ]
    },
    {
      id: "automation",
      title: "Test Automation Strategies",
      description: "Building robust automated testing frameworks",
      icon: Zap,
      notes: [
        "**What is Test Automation?** Writing code that tests your code. Like building a robot to check if light switches work instead of manually flipping each switch daily. Set it up once, runs forever!",
        
        "**Step 1 - Understanding the Testing Pyramid:** Think of a pyramid: Wide base (70%) = quick unit tests checking individual features. Middle (20%) = integration tests checking features working together. Top (10%) = full user journey tests.",
        
        "**Why Pyramid Matters:** Bottom tests run in seconds, top tests take minutes. If you do mostly slow tests, waiting becomes painful. Pyramid keeps tests fast! Developers get instant feedback on code changes.",
        
        "**Step 2 - Page Object Model Explained:** Imagine instructions for 'login'. Instead of writing login steps 50 times in 50 tests, write once. When login page changes, update one file, not 50! This is Page Object Model.",
        
        "**Real Example:** Developer changes login button from 'Submit' to 'Sign In'. Without Page Objects: fix 50 tests manually (2-3 hours). With Page Objects: fix one file (5 minutes). That's why teams love it!",
        
        "**Step 3 - CI/CD Simple Explanation:** CI/CD = Continuous Integration/Continuous Deployment. Fancy name for: 'Every time developer adds code, automatically run tests and deploy if passing'. Catches bugs immediately!",
        
        "**Setting Up CI/CD:** Tools like GitHub Actions (free!), Jenkins (popular), or GitLab CI. They watch your code repository. Someone commits code? Automatically: run tests, show results, deploy to website if all green.",
        
        "**Step 4 - Parallel Testing Explained:** Instead of running 100 tests one-by-one (takes 2 hours), split across 10 computers running 10 tests each simultaneously (takes 12 minutes!). That's parallel execution.",
        
        "**Cloud Testing Services:** Don't have 10 computers? Services like BrowserStack or Sauce Labs rent you virtual computers. Pay per hour, get instant access to hundreds of browsers and devices. Test iPhone, Android, Chrome, Safari - all at once!",
        
        "**Step 5 - Data-Driven Testing:** You need to test login with 100 different users. Without data-driven: write 100 separate tests (nightmare!). With it: write one test, read 100 users from Excel file. One test, 100 scenarios!",
        
        "**Practical Example:** Test payment with: valid card, expired card, insufficient funds, wrong CVV, international card. One test script + 5 rows of data = 5 automated scenarios. Add more rows anytime without coding!",
        
        "**Step 6 - Smart Test Selection:** Changed payment code? AI runs payment tests immediately (2 minutes). Other tests run tonight (no rush). Developer gets fast feedback on what matters, doesn't wait hours for unrelated tests.",
        
        "**Getting Started Roadmap:** Week 1: Learn one tool (Selenium/Cypress). Week 2: Automate login test. Week 3: Add 5 more tests. Week 4: Set up CI/CD. Week 5: Try data-driven testing. Baby steps build expertise!"
      ]
    },
    {
      id: "integration",
      title: "AI Integration Techniques",
      description: "Implementing AI-powered testing tools",
      icon: Code,
      notes: [
        "**What is AI Integration?** Connecting AI superpowers to your existing tests. Like upgrading from regular car to self-driving car. Same basic vehicle, but now has AI features making life easier!",
        
        "**Step 1 - Visual AI Testing:** Human eyes miss tiny differences. AI takes screenshots and compares pixel-by-pixel. Detects: buttons moved 2 pixels, colors slightly different, text overlapping images. Perfect consistency checking!",
        
        "**Setting Up Visual Testing:** Install Applitools (free trial) or Percy. Add 3 lines of code to existing tests: 'Take screenshot, compare to baseline'. Done! Now every test run checks visual appearance automatically.",
        
        "**Real Success Story:** Company had subtle CSS bug - white text on white background (invisible!). Visual AI caught it immediately. Manual testers ran tests 10 times, nobody noticed because they focused on functionality, not pixels.",
        
        "**Step 2 - Self-Healing Tests:** Traditional test: 'Click button with id=login-btn'. Developer changes to id=submit-btn. Test breaks. Self-healing AI: 'Hmm, id changed, but button still says Login and is at same position - found it!'",
        
        "**How Healenium Works:** Install Healenium library (free, open source). It watches your tests. When tests fail due to UI changes, Healenium tries 10+ strategies to find elements. Success rate: 85-92% automatic fixes!",
        
        "**Step 3 - AI Test Generation:** You don't write test code. Instead: Open Chrome, visit your website, click around (login, browse, checkout). AI watches, records, generates professional test code automatically. Like screen recording that creates code!",
        
        "**Practical Session:** Install Playwright, run 'npx playwright codegen'. Browser opens. You perform login. Stop recording. AI generated 20 lines of code doing exactly what you did! Run 'npx playwright test' - it replays perfectly!",
        
        "**Step 4 - Fixing Flaky Tests:** Some tests randomly fail (pass sometimes, fail sometimes). Very frustrating! AI analyzes 100 test runs, identifies patterns: 'This test fails when backend is slow'. Suggests: 'Add 5-second timeout'.",
        
        "**Why Flaky Tests Matter:** One flaky test ruins everything. Team deploys new feature, test fails randomly, team panics. After investigation: false alarm, test problem not code problem. AI prevents this chaos by stabilizing tests.",
        
        "**Step 5 - Intelligent Test Prioritization:** You have 1000 tests. Running all takes 3 hours. AI analyzes what you changed today (login code) and says: 'Run these 50 login-related tests first (10 minutes). Others can wait.'",
        
        "**Business Value:** Developers get feedback in 10 minutes instead of 3 hours. They fix issues immediately while context is fresh. Productivity increases dramatically. Features ship faster, quality improves.",
        
        "**Step 6 - Anomaly Detection:** API returns data. Test passes all checks. But AI notices: 'Response took 3 seconds instead of usual 100ms'. Alerts you about performance problem before customers complain. AI watches patterns, not just pass/fail."
      ]
    },
    {
      id: "tools",
      title: "Essential Testing Tools",
      description: "Must-have tools for modern testing",
      icon: Target,
      notes: [
        "**Choosing Your First Tool:** Like choosing first programming language - there's no 'best', only 'best for your situation'. Consider: your team's skills, application type, budget, learning curve.",
        
        "**Tool #1: Selenium (Most Popular):** Works with all programming languages (Python, Java, JavaScript). Tests all browsers. Free forever. Large community = tons of help online. Downside: steeper learning curve for beginners.",
        
        "**When to Use Selenium:** Your company uses Java/Python already, or you test legacy web applications, or you need maximum flexibility and don't mind complexity. Industry standard for 15+ years.",
        
        "**Adding Healenium to Selenium:** Install Healenium library. It adds AI self-healing to Selenium tests. When UI changes, Healenium automatically fixes selectors. Success rate: 92% after training on your app for 2 weeks.",
        
        "**Tool #2: Cypress (Developer Favorite):** JavaScript only. Super fast, very reliable, beautiful interface showing test execution. Automatic waiting (no sleep commands). Downside: only Chrome-based browsers initially (Firefox support added recently).",
        
        "**When to Use Cypress:** Your team knows JavaScript, you build modern web apps (React, Vue, Angular), you value developer experience and speed over broad browser coverage. Perfect for startups and agile teams.",
        
        "**Cypress + Applitools = Visual AI:** Add Applitools Eyes plugin. Now every test includes visual validation. Catches CSS bugs, responsive issues, cross-browser rendering problems automatically. Free tier available!",
        
        "**Tool #3: Playwright (Rising Star):** Microsoft's tool. Similar to Cypress but supports all browsers (Chrome, Firefox, Safari) natively. Has built-in codegen for recording tests. Modern, powerful, actively developed.",
        
        "**When to Use Playwright:** You need cross-browser testing, want recording capabilities, value detailed debugging. Great for teams migrating from Selenium wanting modern features without giving up browser coverage.",
        
        "**Tool #4: Katalon Studio (No-Code Option):** Visual interface for creating tests. Drag-drop elements, click to create tests. Built-in AI self-healing, visual testing, analytics. Ideal for non-programmers. Free version available.",
        
        "**When to Use Katalon:** Your team has manual testers wanting to start automation without learning programming, or you need quick results for management, or budget is tight (free version is capable).",
        
        "**Tool #5: TestRigor (Plain English):** Write tests in normal English: 'click on Sign Up button', 'enter email as john@test.com'. AI converts to actions. No coding required at all! Expensive but magical for non-technical teams.",
        
        "**Decision Framework:** Coding skills? Yes → Cypress/Playwright/Selenium. No → Katalon/TestRigor. Budget? Limited → Selenium/Cypress/Playwright (free). Flexible → Consider paid tools. Browser coverage critical? → Selenium/Playwright. Speed critical? → Cypress.",
        
        "**Beginner's Path:** Start with Playwright Codegen (easiest). Record 5 tests. Feel the power! Then try Cypress (beautiful developer experience). Finally explore Selenium (industry standard). Master one before switching!"
      ]
    },
    {
      id: "workflow",
      title: "AI Testing Workflow",
      description: "Structuring your AI-enhanced testing process",
      icon: Workflow,
      notes: [
        "**What is a Workflow?** A workflow is your process - the steps you follow from 'feature requested' to 'feature tested and deployed'. Good workflow = organized, efficient. Bad workflow = chaos, missed bugs!",
        
        "**Phase 1: Understanding Requirements (Day 1):** Product manager writes: 'Users should be able to reset password via email'. You read this and think: What needs testing? Happy path (works correctly), sad path (wrong email), edge cases (expired links).",
        
        "**AI Helps Requirements:** Tools with Natural Language Processing read requirement documents and auto-generate test case ideas. 'Password reset' requirement → AI suggests 15 test scenarios you might have missed!",
        
        "**Phase 2: Creating Tests (Days 2-3):** Traditional: You write test code manually (slow). AI-enhanced: You perform actions in browser, AI records and generates test code (10x faster). Or write in plain English, AI converts to code.",
        
        "**Practical Example:** Requirement: 'Add shopping cart'. You open website, add products to cart, checkout. AI watches, generates tests automatically for: add item, remove item, update quantity, apply coupon, different payment methods.",
        
        "**Phase 3: Test Execution (Continuous):** Every time developer commits code, automated tests run. CI/CD system (GitHub Actions, Jenkins) triggers tests, runs them on cloud machines, shows green (pass) or red (fail) results in 5-10 minutes.",
        
        "**Smart Execution in Action:** Developer changed product page code. AI identifies: 'Need to run product tests, cart tests (related), checkout tests (also related)'. Skips login tests, profile tests (unrelated). Saves 70% of time!",
        
        "**Phase 4: Managing Test Data (Ongoing Challenge):** Tests need data: users, products, orders. AI generates realistic fake data: proper email formats, valid addresses, reasonable prices. Mimics production data without privacy issues.",
        
        "**Why Test Data Matters:** Bad data → tests fail for wrong reasons. Good data → tests accurately represent real usage. AI ensures data quality: referential integrity (orders link to real products), boundary conditions (test maximum prices), negative cases (invalid formats).",
        
        "**Phase 5: Analyzing Results (After Each Run):** Test fails. Is it a real bug or test problem? AI analyzes: checks error logs, examines screenshots, reviews network requests. Reports: 'API returned 500 error - backend problem, not test issue'.",
        
        "**Human-Readable Reports:** Traditional: 'NoSuchElementException at line 47'. Useless for non-coders! AI reports: 'Cannot click Login button because modal dialog is blocking it. Suggest: close modal first or wait longer'.",
        
        "**Phase 6: Continuous Learning (The Secret Sauce):** Bug found in production. AI asks: 'Why did tests miss this?' Automatically generates new test for this scenario. Over time, test coverage improves automatically based on real-world failures!",
        
        "**Feedback Loop Example:** User reports: 'App crashes when entering emoji in username'. Your tests didn't check emojis. AI generates test: 'Try username with emoji 😊'. Next time, this bug can't happen again!",
        
        "**Your First Workflow (Simplified):** Week 1: Read requirement, create 1 test manually. Week 2: Set up AI tool, record 5 tests. Week 3: Configure CI/CD, tests run automatically. Week 4: Review AI suggestions, improve coverage. Build from there!"
      ]
    },
    {
      id: "practices",
      title: "Best Practices",
      description: "Guidelines for successful AI testing implementation",
      icon: Shield,
      notes: [
        "**What are Best Practices?** These are lessons learned from thousands of teams over decades. Following them helps you avoid common mistakes, save time, reduce frustration. Like GPS preventing wrong turns!",
        
        "**Practice #1: Start Small (Critical!):** Don't try automating entire application in month one! Pick ONE critical feature (usually login). Master it completely. Then expand. Teams rushing to 100% automation often fail and abandon efforts.",
        
        "**Real Example:** Company tried automating 500 tests in 2 months. Hired 3 contractors. After 2 months: chaos, unmaintainable tests, frustration. They restarted, automated 20 tests in 1 month properly. Then 50, then 100. Success!",
        
        "**Practice #2: Measure Everything:** Before AI testing, track: How long to create tests? Fix tests? Find bugs? After AI, track same metrics. Show management: '70% faster test creation, 50% fewer bugs escaping to production.'",
        
        "**Why Metrics Matter:** Management asks: 'Why spend money on AI tools?' You show: 'We save $50,000 yearly in QA time, find bugs 60% faster, deploy 2x more frequently.' Data wins arguments!",
        
        "**Practice #3: Trust but Verify AI:** AI generates test. Looks correct. But run it! Verify it tests what you intended. AI is powerful but not perfect. 5-10% of AI-generated tests need human adjustment.",
        
        "**Review Process:** AI creates 50 tests. You review 5 random ones weekly. Catch and fix issues. Provide feedback to AI (approve good tests, reject bad ones). AI learns your preferences over time.",
        
        "**Practice #4: Update AI Models Regularly:** Your application evolves. New features added. UI redesigned. Retrain AI models monthly with new data. Like updating GPS with new roads - keeps AI accurate!",
        
        "**Retraining Example:** Every month, export last 30 days of test results. Feed to AI system. AI learns: new element patterns, changed workflows, updated assertions. Accuracy improves from 85% to 95%.",
        
        "**Practice #5: Document AI Decisions:** When AI generates test, it logs: 'Created because similar to Test #47', 'Confidence: 87%', 'Alternative approaches considered: 3'. This helps you understand and trust AI reasoning.",
        
        "**Why Documentation Helps:** New team member joins. They ask: 'Why do we test this scenario?' Documentation explains: 'AI generated based on production bug #1234, validated by Sarah'. Context preserved forever!",
        
        "**Practice #6: Balance Human and AI Testing:** AI handles: repetitive regression tests (boring but necessary). Humans handle: creative exploratory testing, usability evaluation, edge cases requiring domain knowledge. Perfect combination!",
        
        "**The 80/20 Rule:** AI does 80% of tests (repetitive, time-consuming). Humans do 20% (creative, judgment-based). This is much more efficient than either all-manual or attempting 100% automation.",
        
        "**Practice #7: Track Quality Metrics:** Monitor: False positives (test says bug but no bug) - target below 5%. Test coverage (% of code tested) - aim for 80%+ of critical paths. Execution time - should decrease 50% with AI. Defect escape rate - bugs reaching production.",
        
        "**Making Metrics Actionable:** False positives high? AI needs retraining. Coverage low? AI should generate more tests. Execution slow? Optimize test parallelization. Defects escaping? Add tests for those scenarios.",
        
        "**Practice #8: Version Control Everything:** Tests, AI models, configuration, training data - all in Git. Tag releases: 'v1.5 - Accuracy 92%, Coverage 87%'. Can rollback if new AI version performs worse.",
        
        "**Your Implementation Timeline:** Month 1: Choose tool, train on it. Month 2: Automate 10 key tests. Month 3: Set up CI/CD and basic AI features. Month 4-6: Expand coverage, refine AI. Month 7-12: Full implementation, measure ROI. Realistic expectations!"
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
