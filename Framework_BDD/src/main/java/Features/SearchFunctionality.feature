Feature: Search Functionality for the multiple location and Verify Description Area is present on Selected Property

Scenario Outline: To verify Search Functionality for the multiple location and description tag for the property

Given Start Browser and Application and Select Buy Property related Options
When Select "<City>" and Type "<Area>" in the Search box and select interested area from the options shown
Then Select BHK Type and Click on Search Button
When Scroll Down to the Property Listing and Select 4th Property
Then Scroll Down and Check Description Box is there or not


Examples: 
     | City  | Area  |
     | Mumbai| Malad |



