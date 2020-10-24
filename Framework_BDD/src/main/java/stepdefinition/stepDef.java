package stepdefinition;

import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDef {
	WebDriver driver;

	
	@Given("^Start Browser and Application and Select Buy Property related Options$")
	public void Start_Browser_and_Application_and_Select_Buy_Property_related_Options() {
		System.setProperty("webdriver.gecko.driver", "C:/Users/ANSHUL AGARWAL/eclipse-workspace/Framework_BDD/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.nobroker.in");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.findElement(By.xpath("//button[@class='resale shadow-left btn ']")).click();
		
	}
	@When("^Select \"(.*)\" and Type \"(.*)\" in the Search box and select interested area from the options shown$")
	public void Select_City_and_Type_Area_in_the_Search_box(String City, String Area) throws Throwable {
		driver.findElement(By.xpath("//div[@class='wrapper-dropdown-2']//following::span[@class='selectedcity']")).click();
		driver.findElement(By.xpath("//ul[@class='cityselector dropdown']//a[contains(text(),City)]")).click();
		
		driver.findElement(By.xpath("//div[@id='homePageLocalitySearch']//input")).sendKeys(Area);
	    WebDriverWait wait = new WebDriverWait(driver, 30);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='each-prediction']//span[contains(text(),'Malad East - Malkani Estate')]")));
		driver.findElement(By.xpath("//div[@class='each-prediction']//span[contains(text(),'Malad East - Malkani Estate')]")).click();
		
		Thread.sleep(3000);
		
		driver.findElement(By.xpath("//div[@id='homePageLocalitySearch']//input")).sendKeys(Area);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='each-prediction']//span[contains(text(),'Malad west - Sundar Ln')]")));
		driver.findElement(By.xpath("//div[@class='each-prediction']//span[contains(text(),'Malad west - Sundar Ln')]")).click();
		Thread.sleep(3000);	
		
	}
	
		
	@Then("^Select BHK Type and Click on Search Button$")
	public void Select_BHK_Type_and_Click_on_Search_Button() throws Throwable {
		driver.findElement(By.xpath("//div[@id='nbBHKSelector']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//label[@class='nb-bhklabel']//input[@id='bhk2']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//div[@id='nbBHKSelector']")).click();
		driver.findElement(By.xpath("//label[@class='nb-bhklabel']//input[@id='bhk3']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//span[@class='btn home-search-button']")).click();
		Thread.sleep(7000);

	}
	
	@When("^Scroll Down to the Property Listing and Select 4th Property$")
	public void Scroll_Down_to_the_Property_Listing_and_Select_4th_Property() {
		WebDriverWait wait = new WebDriverWait(driver, 30);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("(//div[@class='card-header-title'])[4]")));
		driver.findElement(By.xpath("(//div[@class='card-header-title'])[4]")).click();
		
		
	}
	
	@Then("^Scroll Down and Check Description Box is there or not$")
	public void Scroll_Down_and_Check_Description_Box_is_there_or_not() {
		Set<String> windowIds = driver.getWindowHandles();
		Iterator<String> iter = windowIds.iterator();
		
		String mainWindow = iter.next();
		String childWindow = iter.next();
		driver.switchTo().window(childWindow);
		if(driver.getPageSource().contains("Description"))
		{
		    System.out.print("Yes, Page Contains Description section");
		}

		else
		{
			 System.out.print("No, Page Does Not Contains Description section");
		}		

	

	}
}
