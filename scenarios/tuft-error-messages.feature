Feature: Error Messages

Scenario: User attempts to continue with form against required field constraints
          Given that I have accessed the TUFT service
          And I am at any point on the form
          When I attempt to enter information that does not adhere to the given constraints of that specified field
          And I attempt to click 'Continue' 
          Then I will see an error message above this field in bold red that states e.g: 'You cannot leave any fields blank' 
          And I should automatically be taken to the top of the page
          And I should see a text box that states in black bold text: 'There was a problem'
          And below this I should see non-bold black text that states: 'Please ammend the following details:'
          And below this I should see the instruction to complete the missing section as a clickable link in red bold text e.g: 'Please enter location'
          And I should be able to click this link to return to the incomplete field on the page
          And I should be able to update this field with the correct information 
          And I should be able to progress with completing the form
          
Scenario: User attempts to populate text field above required characther limit
          Given that I have accessed the TUFT service
          And I am at any point on the form
          When I attempt to enter information that is above the charachter limit of any text field
          And I attempt to click 'Continue' 
          Then I will see an error message above this field in bold red that states: 'You have entered too many characters' 
          And below this I should see the instruction to complete the missing section as a clickable link in red bold text that states"
          'Your first name must be no longer than 50 characters'
          And I should be able to update this field with the correct information 
          And I should be able to progress with completing the form
          
          
Scenario: User enters First Name and Last name in wrong format
          Given that I have arrived at the 'Enter Your Details Page' 
          And I have selected the 'First Name' / Last Name' field
          When I attempt to enter a name in purely numeric format inside the text field
	  And I attempt to enter a name in purely symbolic format inside the text field
          Then I should see an error message that states:
          **********
 	  And I should not be able to click the 'Continue' button
	  And I should not be able to progress with completing the rest of the form	
          
Scenario: User Leaves Field Blank- First Name
          Given that I have arrived at the 'Enter Your Details Page' 
          And I have selected the first name field on the page
          When I attempt to leave this field unpopulated
          And I attempt to click 'Continue'
          Then I will see an error message above this blank field in bold red that states e.g: 
          'You must enter your first name before you can continue' 
          And I should not be able to click the 'Continue' button
	  And I should not be able to progress with completing the rest of the form	
          
Scenario: User Leaves Field Blank- Last Name
          Given that I have arrived at the 'Enter Your Details Page' 
          And I have selected the Last name field on the page
          When I attempt to leave this field unpopulated
          And I attempt to click 'Continue'
          Then I will see an error message above this blank field in bold red that states e.g: 
          'You must enter your last name before you can continue'
          And I should not be able to click the 'Continue' button
	  And I should not be able to progress with completing the rest of the form
          
Scenario: User Leaves Field Blank- Last Name
          Given that I have arrived at the 'Enter Your Details Page' 
          And I have selected the Last name field on the page
          When I attempt to leave this field unpopulated
          And I attempt to click 'Continue'
          Then I will see an error message above this blank field in bold red that states e.g: 
          'You must enter your last name before you can continue'
          And I should not be able to click the 'Continue' button
	  And I should not be able to progress with completing the rest of the form
