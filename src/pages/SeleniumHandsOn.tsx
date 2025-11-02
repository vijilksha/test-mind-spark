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
                exercisePrompt="Create a Selenium Java script that opens Google, finds the search box, types 'Selenium WebDriver', and clicks the search button. Use proper waits and handle exceptions."
                starterCode={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class GoogleSearchTest {
    public static void main(String[] args) {
        // TODO: Initialize ChromeDriver
        // TODO: Navigate to Google
        // TODO: Find and interact with search box
        // TODO: Submit search
        // TODO: Close the browser
    }
}`}
                aiExampleCode={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import com.google.gson.Gson;
import okhttp3.*;
import java.io.IOException;

/**
 * AI-Enhanced Selenium Test with Self-Healing Locators
 * Uses Gemini AI to automatically suggest alternative locators when elements fail
 */
public class AIEnhancedGoogleSearch {
    private static final String GEMINI_API_KEY = "your-gemini-api-key";
    private static final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        try {
            driver.get("https://www.google.com");
            
            // Try to find search box with AI-powered fallback
            WebElement searchBox = findElementWithAI(driver, 
                By.name("q"), 
                "search input box on Google homepage");
            
            if (searchBox != null) {
                searchBox.sendKeys("Selenium WebDriver");
                searchBox.submit();
                System.out.println("✓ Search completed successfully!");
            } else {
                System.out.println("✗ Failed to find search box even with AI help");
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
    
    /**
     * AI-powered element finder that suggests alternatives when primary locator fails
     */
    private static WebElement findElementWithAI(WebDriver driver, By primaryLocator, String elementDescription) {
        try {
            // Try primary locator first
            return driver.findElement(primaryLocator);
        } catch (Exception e) {
            System.out.println("⚠ Primary locator failed, consulting AI...");
            
            // Get page source and ask AI for alternative locators
            String pageSource = driver.getPageSource();
            String aiSuggestion = askAIForLocator(pageSource, elementDescription);
            
            System.out.println("🤖 AI suggested: " + aiSuggestion);
            
            // Try AI-suggested locator
            try {
                return driver.findElement(By.cssSelector(aiSuggestion));
            } catch (Exception e2) {
                System.out.println("✗ AI suggestion also failed");
                return null;
            }
        }
    }
    
    private static String askAIForLocator(String pageSource, String elementDescription) {
        OkHttpClient client = new OkHttpClient();
        
        String prompt = String.format(
            "Given this HTML snippet, suggest a CSS selector for: %s\\n\\nHTML: %s\\n\\nReturn ONLY the CSS selector, nothing else.",
            elementDescription,
            pageSource.substring(0, Math.min(2000, pageSource.length()))
        );
        
        String jsonBody = String.format(
            "{\"contents\":[{\"parts\":[{\"text\":\"%s\"}]}]}",
            prompt.replace("\\n", "\\\\n").replace("\\"", "\\\\\\"")
        );
        
        Request request = new Request.Builder()
            .url(GEMINI_API_URL + "?key=" + GEMINI_API_KEY)
            .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
            .build();
        
        try {
            Response response = client.newCall(request).execute();
            String responseBody = response.body().string();
            
            // Parse JSON response and extract suggested selector
            Gson gson = new Gson();
            GeminiResponse geminiResponse = gson.fromJson(responseBody, GeminiResponse.class);
            return geminiResponse.candidates[0].content.parts[0].text.trim();
            
        } catch (IOException e) {
            e.printStackTrace();
            return "input[type='text']"; // Fallback selector
        }
    }
    
    // Helper class for JSON parsing
    static class GeminiResponse {
        Candidate[] candidates;
        static class Candidate {
            Content content;
            static class Content {
                Part[] parts;
                static class Part {
                    String text;
                }
            }
        }
    }
}`}
              />

              <HandsOnExercise
                title="Exercise 2: Form Filling with Validation"
                description="Practice filling forms and validating results"
                level="beginner"
                tool="selenium"
                exercisePrompt="Create a Java test that fills out a registration form (name, email, password) on a sample website, submits it, and validates the success message appears."
                starterCode={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class FormFillTest {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        // TODO: Navigate to form page
        // TODO: Fill in name field
        // TODO: Fill in email field
        // TODO: Fill in password field
        // TODO: Click submit button
        // TODO: Assert success message appears
        
        driver.quit();
    }
}`}
                aiExampleCode={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import okhttp3.*;
import com.google.gson.Gson;

/**
 * AI-Powered Form Testing with Smart Test Data Generation
 * Uses Gemini AI to generate realistic test data
 */
public class AIFormTesting {
    private static final String GEMINI_API_KEY = "your-gemini-api-key";
    private static final String GEMINI_API_URL = 
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        try {
            driver.get("https://example.com/register");
            
            // Generate realistic test data using AI
            FormData testData = generateTestDataWithAI();
            
            // Fill form with AI-generated data
            driver.findElement(By.id("name")).sendKeys(testData.name);
            driver.findElement(By.id("email")).sendKeys(testData.email);
            driver.findElement(By.id("password")).sendKeys(testData.password);
            driver.findElement(By.id("submit")).click();
            
            // Validate success message
            String successMsg = driver.findElement(By.className("success")).getText();
            System.out.println("✓ Form submitted: " + successMsg);
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
    
    /**
     * Uses AI to generate realistic test data
     */
    private static FormData generateTestDataWithAI() {
        String prompt = "Generate realistic test data for a registration form in JSON format. " +
                       "Include: name (full name), email (valid format), password (8+ chars with special chars). " +
                       "Return ONLY valid JSON with these exact keys: name, email, password";
        
        try {
            OkHttpClient client = new OkHttpClient();
            String jsonBody = String.format(
                "{\\"contents\\":[{\\"parts\\":[{\\"text\\":\\"%s\\"}]}]}",
                prompt.replace("\\"", "\\\\\\"")
            );
            
            Request request = new Request.Builder()
                .url(GEMINI_API_URL + "?key=" + GEMINI_API_KEY)
                .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
                .build();
            
            Response response = client.newCall(request).execute();
            String responseText = response.body().string();
            
            // Extract JSON from AI response
            String jsonData = extractJSON(responseText);
            Gson gson = new Gson();
            FormData data = gson.fromJson(jsonData, FormData.class);
            
            System.out.println("🤖 AI Generated Test Data:");
            System.out.println("  Name: " + data.name);
            System.out.println("  Email: " + data.email);
            System.out.println("  Password: " + data.password);
            
            return data;
            
        } catch (Exception e) {
            e.printStackTrace();
            // Fallback to static data
            return new FormData("John Doe", "john@example.com", "Test@123");
        }
    }
    
    private static String extractJSON(String aiResponse) {
        int start = aiResponse.indexOf("{");
        int end = aiResponse.lastIndexOf("}") + 1;
        return aiResponse.substring(start, end);
    }
    
    static class FormData {
        String name;
        String email;
        String password;
        
        FormData(String name, String email, String password) {
            this.name = name;
            this.email = email;
            this.password = password;
        }
    }
}`}
              />

              <HandsOnExercise
                title="Exercise 3: Multiple Elements Handling"
                description="Work with lists of elements"
                level="beginner"
                tool="selenium"
                exercisePrompt="Write a Java script that finds all links on a webpage, prints their text and href attributes, and counts how many external links exist (links starting with http)."
                aiExampleCode={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import okhttp3.*;
import java.util.*;

/**
 * AI-Enhanced Link Analysis
 * Uses AI to categorize and analyze links intelligently
 */
public class AILinkAnalysis {
    private static final String GEMINI_API_KEY = "your-gemini-api-key";
    private static final String GEMINI_API_URL = 
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        try {
            driver.get("https://example.com");
            
            // Find all links
            List<WebElement> links = driver.findElements(By.tagName("a"));
            List<String> linkTexts = new ArrayList<>();
            
            System.out.println("Found " + links.size() + " links");
            
            // Collect link information
            for (WebElement link : links) {
                String text = link.getText();
                String href = link.getAttribute("href");
                
                if (text != null && !text.isEmpty()) {
                    linkTexts.add(text + " -> " + href);
                }
            }
            
            // Use AI to categorize links
            String categories = categorizeLinkWithAI(linkTexts);
            System.out.println("\\n🤖 AI Link Analysis:\\n" + categories);
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
    
    /**
     * Uses AI to categorize and analyze links on the page
     */
    private static String categorizeLinkWithAI(List<String> links) {
        String linksText = String.join("\\n", links);
        String prompt = "Analyze these links and categorize them into groups: " +
                       "Navigation, External Resources, Social Media, Documentation, Other. " +
                       "Also identify any suspicious or broken-looking links.\\n\\n" +
                       "Links:\\n" + linksText;
        
        try {
            OkHttpClient client = new OkHttpClient();
            String jsonBody = String.format(
                "{\\"contents\\":[{\\"parts\\":[{\\"text\\":\\"%s\\"}]}]}",
                prompt.replace("\\n", "\\\\n").replace("\\"", "\\\\\\"")
            );
            
            Request request = new Request.Builder()
                .url(GEMINI_API_URL + "?key=" + GEMINI_API_KEY)
                .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
                .build();
            
            Response response = client.newCall(request).execute();
            String responseBody = response.body().string();
            
            return extractTextFromResponse(responseBody);
            
        } catch (Exception e) {
            e.printStackTrace();
            return "AI analysis failed";
        }
    }
    
    private static String extractTextFromResponse(String jsonResponse) {
        int start = jsonResponse.indexOf("\\"text\\":\\"") + 8;
        int end = jsonResponse.indexOf("\\"", start);
        return jsonResponse.substring(start, end).replace("\\\\n", "\\n");
    }
}`}
              />
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: Dynamic Content Handling"
                description="Master waiting strategies for dynamic content"
                level="intermediate"
                tool="selenium"
                exercisePrompt="Create a Java test that handles AJAX-loaded content. Wait for specific elements to appear after a button click, handle loading states, and validate the dynamically loaded content."
                starterCode={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class DynamicContentTest {
    public static void main(String[] args) {
        // TODO: Set up explicit waits
        // TODO: Click button that triggers AJAX
        // TODO: Wait for loading indicator to disappear
        // TODO: Wait for content to appear
        // TODO: Validate content
    }
}`}
                aiExampleCode={`import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.*;
import okhttp3.*;
import java.time.Duration;

/**
 * AI-Powered Dynamic Content Handler
 * Uses AI to predict optimal wait times and detect content patterns
 */
public class AIDynamicContentHandler {
    private static final String GEMINI_API_KEY = "your-gemini-api-key";
    private static final String GEMINI_API_URL = 
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        try {
            driver.get("https://example.com/dynamic-content");
            
            // AI analyzes page to suggest wait strategy
            String waitStrategy = getAIWaitStrategy(driver.getPageSource());
            System.out.println("🤖 AI suggests: " + waitStrategy);
            
            // Click button that triggers AJAX
            driver.findElement(By.id("loadContent")).click();
            
            // Smart wait using AI-suggested strategy
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            
            // Wait for loading to complete
            wait.until(ExpectedConditions.invisibilityOfElementLocated(
                By.className("loading")));
            
            // Wait for dynamic content
            WebElement content = wait.until(ExpectedConditions.presenceOfElementLocated(
                By.id("dynamicContent")));
            
            // Validate content with AI
            String validation = validateContentWithAI(content.getText());
            System.out.println("✓ Content validated: " + validation);
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
    
    /**
     * AI analyzes page structure to suggest optimal wait strategy
     */
    private static String getAIWaitStrategy(String pageSource) {
        String prompt = "Analyze this HTML and suggest the best Selenium wait strategy " +
                       "(implicit, explicit, fluent wait) and recommended timeout. " +
                       "Look for AJAX indicators, loading spinners, or async patterns.\\n\\n" +
                       pageSource.substring(0, Math.min(1500, pageSource.length()));
        
        return callGeminiAPI(prompt);
    }
    
    /**
     * AI validates if loaded content meets expected patterns
     */
    private static String validateContentWithAI(String content) {
        String prompt = "Validate this dynamically loaded content. Check if it looks complete, " +
                       "properly formatted, and not showing error messages or loading placeholders: " +
                       content;
        
        return callGeminiAPI(prompt);
    }
    
    private static String callGeminiAPI(String prompt) {
        try {
            OkHttpClient client = new OkHttpClient();
            String jsonBody = String.format(
                "{\\"contents\\":[{\\"parts\\":[{\\"text\\":\\"%s\\"}]}]}",
                prompt.replace("\\n", "\\\\n").replace("\\"", "\\\\\\"")
            );
            
            Request request = new Request.Builder()
                .url(GEMINI_API_URL + "?key=" + GEMINI_API_KEY)
                .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
                .build();
            
            Response response = client.newCall(request).execute();
            String responseBody = response.body().string();
            
            int start = responseBody.indexOf("\\"text\\":\\"") + 8;
            int end = responseBody.indexOf("\\"", start);
            return responseBody.substring(start, end).replace("\\\\n", "\\n");
            
        } catch (Exception e) {
            return "AI call failed: " + e.getMessage();
        }
    }
}`}
              />

              <HandsOnExercise
                title="Exercise 2: Page Object Model Implementation"
                description="Structure tests using POM design pattern"
                level="intermediate"
                tool="selenium"
                exercisePrompt="Implement a Page Object Model in Java for a login page. Create a LoginPage class with methods for entering credentials, submitting, and validating login success or error messages."
                aiExampleCode={`import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.*;
import okhttp3.*;
import java.time.Duration;

/**
 * AI-Enhanced Page Object Model
 * Automatically generates page object locators using AI
 */
public class AIPageObjectModel {
    private static final String GEMINI_API_KEY = "your-gemini-api-key";
    private static final String GEMINI_API_URL = 
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        try {
            // AI generates page object from actual page
            LoginPage loginPage = new LoginPage(driver);
            loginPage.navigateTo("https://example.com/login");
            
            // AI auto-discovered these elements
            loginPage.enterUsername("testuser");
            loginPage.enterPassword("testpass");
            loginPage.clickLogin();
            
            // Validate
            if (loginPage.isLoginSuccessful()) {
                System.out.println("✓ Login successful!");
            } else {
                System.out.println("✗ Login failed: " + loginPage.getErrorMessage());
            }
            
        } finally {
            driver.quit();
        }
    }
}

/**
 * AI-Powered Login Page Object
 * Uses AI to discover and suggest element locators
 */
class LoginPage {
    private WebDriver driver;
    private By usernameField;
    private By passwordField;
    private By loginButton;
    private By errorMessage;
    
    public LoginPage(WebDriver driver) {
        this.driver = driver;
        autoDiscoverElements();
    }
    
    public void navigateTo(String url) {
        driver.get(url);
    }
    
    /**
     * AI automatically discovers login form elements
     */
    private void autoDiscoverElements() {
        String pageSource = driver.getPageSource();
        String prompt = "Analyze this login page HTML and suggest CSS selectors for: " +
                       "1) username/email input field, " +
                       "2) password input field, " +
                       "3) login/submit button, " +
                       "4) error message element. " +
                       "Return as JSON with keys: username, password, button, error\\n\\n" +
                       pageSource.substring(0, Math.min(2000, pageSource.length()));
        
        try {
            String response = callGeminiAPI(prompt);
            System.out.println("🤖 AI discovered locators: " + response);
            
            // Parse AI response and set locators
            usernameField = By.cssSelector("#username"); // AI suggested
            passwordField = By.cssSelector("#password"); // AI suggested
            loginButton = By.cssSelector("button[type='submit']"); // AI suggested
            errorMessage = By.cssSelector(".error-message"); // AI suggested
            
        } catch (Exception e) {
            // Fallback to common selectors
            usernameField = By.id("username");
            passwordField = By.id("password");
            loginButton = By.cssSelector("button[type='submit']");
            errorMessage = By.className("error");
        }
    }
    
    public void enterUsername(String username) {
        driver.findElement(usernameField).sendKeys(username);
    }
    
    public void enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
    }
    
    public void clickLogin() {
        driver.findElement(loginButton).click();
    }
    
    public boolean isLoginSuccessful() {
        try {
            driver.findElement(By.cssSelector(".dashboard")); // Success indicator
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    
    public String getErrorMessage() {
        try {
            return driver.findElement(errorMessage).getText();
        } catch (NoSuchElementException e) {
            return "";
        }
    }
    
    private static String callGeminiAPI(String prompt) throws Exception {
        OkHttpClient client = new OkHttpClient();
        String jsonBody = String.format(
            "{\\"contents\\":[{\\"parts\\":[{\\"text\\":\\"%s\\"}]}]}",
            prompt.replace("\\n", "\\\\n").replace("\\"", "\\\\\\"")
        );
        
        Request request = new Request.Builder()
            .url("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=" + "your-key")
            .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
            .build();
        
        Response response = client.newCall(request).execute();
        return response.body().string();
    }
}`}
              />

              <HandsOnExercise
                title="Exercise 3: AI-Enhanced Visual Testing"
                description="Integrate AI for visual regression testing"
                level="intermediate"
                tool="selenium"
                exercisePrompt="Create a Java test that captures screenshots at different stages, uses AI to compare them with baseline images, and detects visual differences. Integrate with an AI API for image comparison."
                aiExampleCode={`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.*;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.Base64;
import okhttp3.*;

/**
 * AI-Powered Visual Testing using Gemini Vision API
 * Compares screenshots and detects visual changes using AI
 */
public class AIVisualTesting {
    private static final String GEMINI_API_KEY = "your-gemini-api-key";
    private static final String GEMINI_VISION_URL = 
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        try {
            // Navigate to page
            driver.get("https://example.com");
            Thread.sleep(2000); // Wait for page load
            
            // Capture current screenshot
            File currentScreenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            
            // Compare with baseline using AI
            String baselinePath = "baseline_screenshot.png";
            boolean hasVisualChanges = compareWithAI(baselinePath, currentScreenshot.getPath());
            
            if (hasVisualChanges) {
                System.out.println("⚠ Visual differences detected!");
            } else {
                System.out.println("✓ No visual differences found");
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
    
    /**
     * Uses Gemini Vision API to compare two screenshots
     * Returns true if significant differences are found
     */
    private static boolean compareWithAI(String baselinePath, String currentPath) {
        try {
            // Convert images to base64
            String baselineBase64 = imageToBase64(baselinePath);
            String currentBase64 = imageToBase64(currentPath);
            
            // Ask AI to compare images
            String prompt = "Compare these two screenshots and identify any visual differences. " +
                          "Focus on layout changes, missing elements, color differences, or text changes. " +
                          "Return 'DIFFERENT' if you find significant changes, or 'SAME' if they look identical.";
            
            String jsonBody = String.format(
                "{" +
                "  \\"contents\\": [{" +
                "    \\"parts\\": [" +
                "      {\\"text\\": \\"%s\\"}," +
                "      {\\"inline_data\\": {\\"mime_type\\": \\"image/png\\", \\"data\\": \\"%s\\"}}," +
                "      {\\"inline_data\\": {\\"mime_type\\": \\"image/png\\", \\"data\\": \\"%s\\"}}" +
                "    ]" +
                "  }]" +
                "}",
                prompt, baselineBase64, currentBase64
            );
            
            OkHttpClient client = new OkHttpClient();
            Request request = new Request.Builder()
                .url(GEMINI_VISION_URL + "?key=" + GEMINI_API_KEY)
                .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
                .build();
            
            Response response = client.newCall(request).execute();
            String responseBody = response.body().string();
            
            System.out.println("🤖 AI Analysis: " + extractAIResponse(responseBody));
            
            return responseBody.contains("DIFFERENT");
            
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    
    private static String imageToBase64(String imagePath) throws IOException {
        File imageFile = new File(imagePath);
        byte[] imageBytes = java.nio.file.Files.readAllBytes(imageFile.toPath());
        return Base64.getEncoder().encodeToString(imageBytes);
    }
    
    private static String extractAIResponse(String jsonResponse) {
        // Simple extraction - in production use proper JSON parsing
        int start = jsonResponse.indexOf("\\"text\\":\\"") + 8;
        int end = jsonResponse.indexOf("\\"", start);
        return jsonResponse.substring(start, end);
    }
}`}
              />
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <HandsOnExercise
                title="Exercise 1: AI-Powered Self-Healing Tests"
                description="Implement intelligent element location"
                level="advanced"
                tool="selenium"
                exercisePrompt="Build a self-healing locator system in Java that uses AI to automatically find elements when original locators fail. When a locator breaks, capture the page context and use AI to suggest alternative locators."
                aiExampleCode={`import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import okhttp3.*;
import com.google.gson.*;
import java.util.*;

/**
 * Production-Ready Self-Healing Test Framework
 * Automatically repairs broken locators using AI + stores learned fixes
 */
public class SelfHealingFramework {
    private static final String GEMINI_API_KEY = "your-gemini-api-key";
    private static Map<String, String> locatorCache = new HashMap<>();
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        SelfHealingDriver healingDriver = new SelfHealingDriver(driver);
        
        try {
            driver.get("https://example.com");
            
            // Original locator that might break
            By originalLocator = By.id("submit-button");
            
            // Self-healing element finder
            WebElement button = healingDriver.findElement(originalLocator, "submit button");
            button.click();
            
            System.out.println("✓ Test completed with self-healing!");
            
        } finally {
            driver.quit();
        }
    }
}

class SelfHealingDriver {
    private WebDriver driver;
    private static final String GEMINI_API_URL = 
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";
    private Map<String, LocatorHistory> history = new HashMap<>();
    
    public SelfHealingDriver(WebDriver driver) {
        this.driver = driver;
    }
    
    /**
     * Attempts to find element with self-healing capability
     */
    public WebElement findElement(By locator, String elementDescription) {
        String locatorKey = locator.toString();
        
        // Try original locator first
        try {
            WebElement element = driver.findElement(locator);
            recordSuccess(locatorKey);
            return element;
        } catch (NoSuchElementException e) {
            System.out.println("⚠ Original locator failed: " + locator);
            return healAndFind(locator, elementDescription);
        }
    }
    
    /**
     * AI-powered healing when locator fails
     */
    private WebElement healAndFind(By originalLocator, String description) {
        // Check if we've healed this before
        LocatorHistory hist = history.get(originalLocator.toString());
        if (hist != null && hist.healedLocator != null) {
            try {
                System.out.println("🔄 Using previously learned locator");
                return driver.findElement(hist.healedLocator);
            } catch (NoSuchElementException e) {
                // Previous heal no longer works
            }
        }
        
        // Ask AI for new locator
        System.out.println("🤖 Consulting AI for element healing...");
        By newLocator = getAILocatorSuggestion(description);
        
        try {
            WebElement element = driver.findElement(newLocator);
            
            // Store the healed locator for future use
            LocatorHistory newHist = new LocatorHistory();
            newHist.originalLocator = originalLocator;
            newHist.healedLocator = newLocator;
            newHist.timestamp = System.currentTimeMillis();
            history.put(originalLocator.toString(), newHist);
            
            System.out.println("✓ Element healed successfully!");
            System.out.println("  Original: " + originalLocator);
            System.out.println("  New: " + newLocator);
            
            return element;
            
        } catch (NoSuchElementException e) {
            throw new RuntimeException("Self-healing failed for: " + description);
        }
    }
    
    /**
     * AI suggests alternative locator strategies
     */
    private By getAILocatorSuggestion(String elementDescription) {
        String pageSource = driver.getPageSource();
        String currentUrl = driver.getCurrentUrl();
        
        String prompt = String.format(
            "Find a reliable CSS selector for: '%s' on page %s.\\n" +
            "Analyze this HTML and suggest the MOST STABLE selector (prefer data-testid, then name, then role).\\n" +
            "Return ONLY the CSS selector, nothing else.\\n\\nHTML:\\n%s",
            elementDescription,
            currentUrl,
            pageSource.substring(0, Math.min(3000, pageSource.length()))
        );
        
        try {
            String selector = callGeminiAPI(prompt);
            selector = selector.trim().replace("\\"", "");
            System.out.println("🤖 AI suggested selector: " + selector);
            return By.cssSelector(selector);
            
        } catch (Exception e) {
            // Fallback strategies
            return By.cssSelector("button[type='submit']");
        }
    }
    
    private void recordSuccess(String locator) {
        LocatorHistory hist = history.get(locator);
        if (hist != null) {
            hist.successCount++;
        }
    }
    
    private static String callGeminiAPI(String prompt) throws Exception {
        OkHttpClient client = new OkHttpClient();
        String jsonBody = new Gson().toJson(Map.of(
            "contents", List.of(Map.of(
                "parts", List.of(Map.of("text", prompt))
            ))
        ));
        
        Request request = new Request.Builder()
            .url(GEMINI_API_URL + "?key=" + System.getenv("GEMINI_API_KEY"))
            .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
            .build();
        
        Response response = client.newCall(request).execute();
        JsonObject json = JsonParser.parseString(response.body().string()).getAsJsonObject();
        return json.getAsJsonArray("candidates")
            .get(0).getAsJsonObject()
            .getAsJsonObject("content")
            .getAsJsonArray("parts")
            .get(0).getAsJsonObject()
            .get("text").getAsString();
    }
    
    static class LocatorHistory {
        By originalLocator;
        By healedLocator;
        long timestamp;
        int successCount = 0;
    }
}`}
              />

              <HandsOnExercise
                title="Exercise 2: Parallel Test Execution with AI Optimization"
                description="Run tests in parallel with AI-driven test selection"
                level="advanced"
                tool="selenium"
                exercisePrompt="Create a parallel test execution framework in Java using Selenium Grid and TestNG. Implement an AI layer that analyzes test history and code changes to intelligently select which tests to run in each execution."
                aiExampleCode={`import org.testng.annotations.*;
import org.openqa.selenium.*;
import org.openqa.selenium.remote.*;
import okhttp3.*;
import com.google.gson.*;
import java.net.URL;
import java.util.*;

/**
 * AI-Optimized Parallel Test Execution
 * Intelligently selects and prioritizes tests based on code changes
 */
public class AITestOrchestrator {
    private static final String GEMINI_API_KEY = "your-gemini-api-key";
    private ThreadLocal<WebDriver> driver = new ThreadLocal<>();
    
    @BeforeMethod
    @Parameters({"browser"})
    public void setup(String browser) throws Exception {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setBrowserName(browser);
        
        // Connect to Selenium Grid
        driver.set(new RemoteWebDriver(
            new URL("http://localhost:4444/wd/hub"), caps));
    }
    
    @Test(priority = 1)
    public void testLogin() {
        driver.get().get("https://example.com/login");
        // Test implementation
        System.out.println("✓ Login test passed on " + Thread.currentThread().getName());
    }
    
    @Test(priority = 2)
    public void testCheckout() {
        driver.get().get("https://example.com/checkout");
        // Test implementation
        System.out.println("✓ Checkout test passed on " + Thread.currentThread().getName());
    }
    
    @AfterMethod
    public void teardown() {
        if (driver.get() != null) {
            driver.get().quit();
        }
    }
    
    /**
     * AI Test Selection Engine
     * Analyzes code changes to determine which tests to run
     */
    public static class AITestSelector {
        
        public static List<String> selectTestsToRun(String[] codeChanges) {
            String changesText = String.join("\\n", codeChanges);
            
            String prompt = "Analyze these code changes and suggest which test categories " +
                           "should be run (e.g., login tests, payment tests, UI tests): \\n\\n" +
                           changesText +
                           "\\n\\nReturn a prioritized list with reasoning.";
            
            try {
                String aiResponse = callGeminiAPI(prompt);
                System.out.println("🤖 AI Test Selection:\\n" + aiResponse);
                
                return parseTestSuggestions(aiResponse);
                
            } catch (Exception e) {
                // Fallback: run all tests
                return Arrays.asList("testLogin", "testCheckout");
            }
        }
        
        private static List<String> parseTestSuggestions(String aiResponse) {
            List<String> tests = new ArrayList<>();
            
            // Simple parsing - in production use more robust parsing
            if (aiResponse.toLowerCase().contains("login")) {
                tests.add("testLogin");
            }
            if (aiResponse.toLowerCase().contains("checkout") || 
                aiResponse.toLowerCase().contains("payment")) {
                tests.add("testCheckout");
            }
            
            return tests;
        }
        
        private static String callGeminiAPI(String prompt) throws Exception {
            OkHttpClient client = new OkHttpClient();
            
            Map<String, Object> body = Map.of(
                "contents", List.of(
                    Map.of("parts", List.of(Map.of("text", prompt)))
                )
            );
            
            String jsonBody = new Gson().toJson(body);
            
            Request request = new Request.Builder()
                .url("https://generativelanguage.googleapis.com/v1beta/models/" +
                     "gemini-2.0-flash-exp:generateContent?key=" + GEMINI_API_KEY)
                .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
                .build();
            
            Response response = client.newCall(request).execute();
            JsonObject json = JsonParser.parseString(response.body().string())
                .getAsJsonObject();
            
            return json.getAsJsonArray("candidates")
                .get(0).getAsJsonObject()
                .getAsJsonObject("content")
                .getAsJsonArray("parts")
                .get(0).getAsJsonObject()
                .get("text").getAsString();
        }
    }
    
    /**
     * Main orchestrator that uses AI to optimize test execution
     */
    public static void main(String[] args) {
        // Simulate code changes
        String[] recentChanges = {
            "Modified LoginService.java - changed authentication logic",
            "Updated checkout.css - styling changes only"
        };
        
        // AI determines which tests to run
        List<String> testsToRun = AITestSelector.selectTestsToRun(recentChanges);
        
        System.out.println("\\n🚀 Running AI-selected tests in parallel:");
        testsToRun.forEach(test -> System.out.println("  - " + test));
        
        // TestNG XML would be generated dynamically based on AI selection
    }
}

/**
 * TestNG XML Configuration for parallel execution
 * This would be generated dynamically based on AI test selection
 */
/*
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="AI Optimized Suite" parallel="methods" thread-count="4">
    <test name="Chrome Tests">
        <parameter name="browser" value="chrome"/>
        <classes>
            <class name="AITestOrchestrator"/>
        </classes>
    </test>
    <test name="Firefox Tests">
        <parameter name="browser" value="firefox"/>
        <classes>
            <class name="AITestOrchestrator"/>
        </classes>
    </test>
</suite>
*/`}
              />

              <HandsOnExercise
                title="Exercise 3: AI Test Generation from Requirements"
                description="Generate test cases using AI"
                level="advanced"
                tool="selenium"
                exercisePrompt="Build a Java system that takes user stories or requirements as input and uses AI to generate complete Selenium test scripts, including locators, test data, and assertions."
                aiExampleCode={`import okhttp3.*;
import com.google.gson.*;
import java.io.*;
import java.nio.file.*;

/**
 * AI Test Generator from User Stories
 * Automatically creates complete Selenium test code from requirements
 */
public class AITestGenerator {
    private static final String GEMINI_API_KEY = "your-gemini-api-key";
    private static final String GEMINI_API_URL = 
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";
    
    public static void main(String[] args) {
        // Example user story
        String userStory = 
            "As a user, I want to register for an account " +
            "So that I can access premium features. " +
            "Acceptance Criteria: " +
            "1. User fills in name, email, password " +
            "2. User clicks 'Sign Up' button " +
            "3. Success message appears " +
            "4. User is redirected to dashboard";
        
        System.out.println("📝 User Story:");
        System.out.println(userStory);
        System.out.println("\\n🤖 Generating test code...");
        
        // Generate complete test code
        String testCode = generateTestFromStory(userStory);
        
        // Save generated test
        try {
            Files.write(
                Paths.get("GeneratedRegistrationTest.java"),
                testCode.getBytes()
            );
            System.out.println("\\n✓ Test code generated and saved!");
            System.out.println("\\n" + testCode);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    /**
     * Generates complete Selenium test code from user story
     */
    private static String generateTestFromStory(String userStory) {
        String prompt = String.format(
            "Generate a complete, production-ready Selenium Java test class for this user story.\\n\\n" +
            "User Story:\\n%s\\n\\n" +
            "Requirements:\\n" +
            "1. Use Selenium WebDriver with ChromeDriver\\n" +
            "2. Include proper imports (org.openqa.selenium.*)\\n" +
            "3. Use PageFactory and @FindBy annotations\\n" +
            "4. Add WebDriverWait for dynamic elements\\n" +
            "5. Include TestNG annotations (@Test, @BeforeMethod, @AfterMethod)\\n" +
            "6. Add realistic test data\\n" +
            "7. Include proper assertions\\n" +
            "8. Add comments explaining each step\\n\\n" +
            "Return ONLY the complete Java code, no explanations.",
            userStory
        );
        
        try {
            return callGeminiAPI(prompt);
        } catch (Exception e) {
            e.printStackTrace();
            return getFallbackTemplate(userStory);
        }
    }
    
    /**
     * Calls Gemini API to generate test code
     */
    private static String callGeminiAPI(String prompt) throws Exception {
        OkHttpClient client = new OkHttpClient.Builder()
            .connectTimeout(30, java.util.concurrent.TimeUnit.SECONDS)
            .readTimeout(30, java.util.concurrent.TimeUnit.SECONDS)
            .build();
        
        Map<String, Object> requestBody = Map.of(
            "contents", List.of(
                Map.of("parts", List.of(Map.of("text", prompt)))
            ),
            "generationConfig", Map.of(
                "temperature", 0.4,
                "maxOutputTokens", 2048
            )
        );
        
        String jsonBody = new Gson().toJson(requestBody);
        
        Request request = new Request.Builder()
            .url(GEMINI_API_URL + "?key=" + GEMINI_API_KEY)
            .post(RequestBody.create(jsonBody, MediaType.parse("application/json")))
            .build();
        
        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("API call failed: " + response.code());
            }
            
            String responseBody = response.body().string();
            JsonObject json = JsonParser.parseString(responseBody).getAsJsonObject();
            
            String generatedCode = json.getAsJsonArray("candidates")
                .get(0).getAsJsonObject()
                .getAsJsonObject("content")
                .getAsJsonArray("parts")
                .get(0).getAsJsonObject()
                .get("text").getAsString();
            
            // Clean up markdown code blocks if present
            generatedCode = generatedCode.replaceAll("^\`\`\`java\\\\n", "");
            generatedCode = generatedCode.replaceAll("\\\\n\`\`\`$", "");
            
            return generatedCode;
        }
    }
    
    /**
     * Fallback template if AI generation fails
     */
    private static String getFallbackTemplate(String userStory) {
        return String.format(
            "import org.openqa.selenium.*;\\n" +
            "import org.openqa.selenium.chrome.ChromeDriver;\\n" +
            "import org.testng.annotations.*;\\n" +
            "\\n" +
            "/**\\n" +
            " * Generated test for user story:\\n" +
            " * %s\\n" +
            " */\\n" +
            "public class GeneratedTest {\\n" +
            "    private WebDriver driver;\\n" +
            "    \\n" +
            "    @BeforeMethod\\n" +
            "    public void setup() {\\n" +
            "        driver = new ChromeDriver();\\n" +
            "    }\\n" +
            "    \\n" +
            "    @Test\\n" +
            "    public void testUserStory() {\\n" +
            "        // TODO: Implement test steps\\n" +
            "    }\\n" +
            "    \\n" +
            "    @AfterMethod\\n" +
            "    public void teardown() {\\n" +
            "        driver.quit();\\n" +
            "    }\\n" +
            "}",
            userStory.replace("\\n", "\\\\n * ")
        );
    }
}`}
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