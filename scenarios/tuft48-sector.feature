
Feature: New Organization Creation

Scenario: User Does Not Find Organization
          Given that I have attempted to search for my organization in the ‘Enter Your Org’ text field
          When I search for an org that does not already exist in the seed data
          Then I should still be able to enter the name of my organization in full
          And I should be able to select 'Continue' at the bottom of the page
          And I should land on a new page with a bold heading at the top of the page that states:
          'What is the primary sector of your organisation?' 
          And below this I should see a list of 8 selectable radio buttons 
          And I should see a radio button with the label “Civil Service”
          And below this I should see a radio button with the label “Education”
          And below this I should see a radio button with the label “HM Forces”
          And below this I should see a radio button with the label “Local Authority”
          And below this I should see a radio button with the label “National Health Service”
          And below this I should see a radio button with the label “Police”
          And below this I should see a radio button with the label “Other Health and Social Work”
          And below this I should see a radio button with the label “Other”
          And at the end of the page I should see a clickable button that says 'Continue'
	  
        
Scenario: User Selects a Sector 
          Given I have landed on the sector selection page
          And I see a list of 8 radio buttons appear on the page
          When I select any one of the radio buttons other than 'Other'
          Then I should be able to click 'Continue' 
	  And I should be able to see the 'Enter Your Details' page
          And I should be able to proceed with completing the rest of the form
	  
 
Scenario: User Selects 'Other' radio button
          Given I have landed on the sector selection page
          And I see a list of 8 radio buttons appear on the page
          When I select the 'Other' radio button
          Then I should see a free text field appear below this with a character limit of 200 characters
	  And this field should have the same constraints as the 'Organisation' text field
	  And below this text field I should see a green 'Continue' button
	  And I should be able to continue to the 'Contact Details' page once this field has been correctly populated	  
	  

Error Scenario: User Attempts to Select More than 1 Sector 
          Given I have already selected a sector from the radio buttons
          When I attempt to select another sector
          Then my new selection should replace the initial selection
          And I should not be able to select more than one sector at the same time
          
Scenario: User Attempts to leave sector buttons unselected
          Given I have landed on the sector selection page
          When I attempt to click 'continue' without selecting a sector
          Then I should be prompted with an error message that states "???"
	  And I should not be able to proceed with completing the rest of the form
	  
Scenario: User Attempts to leave 'Other' field unpopulated
          Given I have landed on the sector selection page and I select the 'other' option
	  When I attempt to click 'continue' without populating the corresponding text field
          Then I should be prompted with an error message that states "???"
	  And I should not be able to proceed with completing the rest of the form
          
       

