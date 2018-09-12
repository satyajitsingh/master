Feature: Organization Search

Scenario: User Sees Org Search Field
        Given I have accessed the homepage for the FTR service
        When I click the ‘Start Now’ button 
        Then I should see a new page with a heading in bold stating:
        ‘What is the name of your organisation?’
        And below this I should see a searchable free text field
        And below this text field I should see a clickable drop down hyperlink with the words
        “Can't find your organisation?”
        And when I click this link I should see the link expand to reveal words in plain text below it stating:
        “You can still enter the name of your organisation and submit your facility time data. We may need to contact you to verify your submission.”
        And I should be able to minimise this link and hide the revealed text by clicking on it again.
        And at the bottom of the page I should see a clickable call to action button in green saying ‘Continue’

Scenario: User Searches for Org (Manual Text Entry)
      Given I have accessed the ‘Search Organization’ page
      When I click into the textfield with the label 'What is the name of Your Org”
      Then I should see the text field become editable
      And I should be able to enter an organization name into this field in alphanumeric format of up to 150*** characters in length
      And I should be able to enter an organization name into this field in text and symbolic format of up to 150*** characters in length
      And When I begin entering up to 3 characters into the text field then I should see a dropdown list of all relevant organizations appear
      And this list should display organizations from the seed data which include the closest match to my entered characters from any part of their Org name string
      And I should see this list returned with the closest relevant match first
      And I should see the first 15 organizations appear at first view
      And I should be able to scroll up and down through to the bottom and top of the list to see the others
      And I should see this list returned in alphabetical order
      And I should be able to select only one organization from the list at a time
      And I should see this selected organization populate the text field
      And I should see the list dissappear once I have selected an organization
      And I should  also be able to hide this list by clicking anywhere else on the page
      And I should be able to click 'Continue' once this field has been populated

Error Scenario: User Leaves Text Field Blank
        Given that I click the 'Enter your Org' text field
        When I leave any field unpopulated with no text
        And I click the ‘Continue’ button
        Then I should not be able to progress with the form
        And I should see an error message stating that I must complete all fields before I can continue
	  
Scenario: User Enters Organization name over/under Character Limit
        Given that I have clicked into the textfield with the label 'Enter your org'
        And I attempt to enter text above the character limit of 200 charachters
        Then I should not be able to continue typing any more text
        And I should see an error message that states that I have reached the character limit for that field	     
	  
Scenario: User Attempts to Populate ‘Enter your org’ Field With Just Symbols/Numbers
        Given that I have clicked into the textfield with the label 'Enter your org'
        When I attempt to enter an org name inside the text field which is in purely numeric format 
        And I attempt to enter an org name in the text field which is in purely non-alphanumeric format
        And this is either above or within the character  limit of 150 characters
        Then I should see a red outline around the text field
        And I should see an error message stating 
        And I should not be able to click the ‘Continue’ button
        And I should not be able to progress with completing the Organizations section
	  
Scenario: User Does Not Find Organization
        Given that I have attempted to search for my organization in the ‘Enter Your Org’ text field
        When I search for an org that does not already exist in the seed data
        Then I will not see a drop down list of available organizations appear
        And I will be able to select the option to continue to the next section of the form
