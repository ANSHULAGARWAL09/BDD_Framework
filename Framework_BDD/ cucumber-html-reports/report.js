$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ANSHUL AGARWAL/eclipse-workspace/Framework_BDD/src/main/java/Features/SearchFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality for the multiple location",
  "description": "",
  "id": "search-functionality-for-the-multiple-location",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "To verify Search Functionality for the multiple location and description tag for the property",
  "description": "",
  "id": "search-functionality-for-the-multiple-location;to-verify-search-functionality-for-the-multiple-location-and-description-tag-for-the-property",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Start Browser and Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Select Buy Property related Option",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Select \"\u003cCity\u003e\" as Mumbai from the Drop Down",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Type \"\u003cArea\u003e\" as Malad in the Search box and Select \"\u003cAreaName1\u003e\" as  MaladEast Malkani Estate",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select other \"\u003cAreaName2\u003e\" as Malad west Sundar Ln from the drop down",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Select 2BHK and 3BHK from the drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Scroll Down on the Property Listing and Select 4th Property",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify Description Related Section in 4th Property is there or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality-for-the-multiple-location;to-verify-search-functionality-for-the-multiple-location-and-description-tag-for-the-property;",
  "rows": [
    {
      "cells": [
        "City",
        "Area",
        "AreaName1",
        "AreaName2"
      ],
      "line": 17,
      "id": "search-functionality-for-the-multiple-location;to-verify-search-functionality-for-the-multiple-location-and-description-tag-for-the-property;;1"
    },
    {
      "cells": [
        "Mumbai",
        "Malad",
        "MaladEast Malkani Estate",
        "Malad west Sundar Ln"
      ],
      "line": 18,
      "id": "search-functionality-for-the-multiple-location;to-verify-search-functionality-for-the-multiple-location-and-description-tag-for-the-property;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "To verify Search Functionality for the multiple location and description tag for the property",
  "description": "",
  "id": "search-functionality-for-the-multiple-location;to-verify-search-functionality-for-the-multiple-location-and-description-tag-for-the-property;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Start Browser and Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Select Buy Property related Option",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Select \"Mumbai\" as Mumbai from the Drop Down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Type \"Malad\" as Malad in the Search box and Select \"MaladEast Malkani Estate\" as  MaladEast Malkani Estate",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select other \"Malad west Sundar Ln\" as Malad west Sundar Ln from the drop down",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Select 2BHK and 3BHK from the drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Scroll Down on the Property Listing and Select 4th Property",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify Description Related Section in 4th Property is there or not",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.Start_Browser_and_Application()"
});
formatter.result({
  "duration": 286110430,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepdefinition.stepDef\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat Runner.RunTest.feature(RunTest.java:36)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:132)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:599)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:822)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:147)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:764)\r\n\tat org.testng.TestRunner.run(TestRunner.java:585)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1140)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1069)\r\n\tat org.testng.TestNG.run(TestNG.java:1037)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 39 more\r\nCaused by: java.lang.NullPointerException\r\n\tat java.base/java.util.Objects.requireNonNull(Objects.java:222)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:85)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:45)\r\n\tat stepdefinition.stepDef.\u003cinit\u003e(stepDef.java:17)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDef.Select_Buy_Property_related_Option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 8
    }
  ],
  "location": "stepDef.Select_City_as_Mumbai_from_the_Drop_Down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Malad",
      "offset": 6
    },
    {
      "val": "MaladEast Malkani Estate",
      "offset": 52
    }
  ],
  "location": "stepDef.Type_Area_as_Malad_in_the_Search_box(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Malad west Sundar Ln",
      "offset": 14
    }
  ],
  "location": "stepDef.Select_other_Area_as_Malad_west_Sundar_Ln_from_the_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.Select_2BHK_and_3BHK_from_the_drop_down()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.Click_on_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.Scroll_Down_on_the_Property_Listing_and_Select_4th_Property()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.Verify_Description_Related_Section_in_4th_Property_is_there_or_not()"
});
formatter.result({
  "status": "skipped"
});
});