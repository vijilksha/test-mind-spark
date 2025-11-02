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
              />

              <HandsOnExercise
                title="Exercise 3: Multiple Elements Handling"
                description="Work with lists of elements"
                level="beginner"
                tool="selenium"
                exercisePrompt="Write a Java script that finds all links on a webpage, prints their text and href attributes, and counts how many external links exist (links starting with http)."
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
              />

              <HandsOnExercise
                title="Exercise 2: Page Object Model Implementation"
                description="Structure tests using POM design pattern"
                level="intermediate"
                tool="selenium"
                exercisePrompt="Implement a Page Object Model in Java for a login page. Create a LoginPage class with methods for entering credentials, submitting, and validating login success or error messages."
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
              />

              <HandsOnExercise
                title="Exercise 2: Parallel Test Execution with AI Optimization"
                description="Run tests in parallel with AI-driven test selection"
                level="advanced"
                tool="selenium"
                exercisePrompt="Create a parallel test execution framework in Java using Selenium Grid and TestNG. Implement an AI layer that analyzes test history and code changes to intelligently select which tests to run in each execution."
              />

              <HandsOnExercise
                title="Exercise 3: AI Test Generation from Requirements"
                description="Generate test cases using AI"
                level="advanced"
                tool="selenium"
                exercisePrompt="Build a Java system that takes user stories or requirements as input and uses AI to generate complete Selenium test scripts, including locators, test data, and assertions."
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