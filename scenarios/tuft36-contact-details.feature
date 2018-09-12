Feature: Contact Details

Scenario: User Accesses Contact Details Page
          Given I have completed the required details on the organization information page
          When I click the ‘Continue’ button 
          Then I should see a new page with the heading in bold stating:
          “Enter your details”
          And below this I should see an empty text field with the label above it stating: 
          First Name
          And below this I should see an empty text field with the label above it stating:
          Surname
          And below this I should see an empty text field with the label above it stating:
          Work email address
          And below this text I should see text in grey stating:
          ‘For example, name@met.police.uk’
          And below this I should see a privacy policy
          And below this I should see a green 'Continue' button

Scenario: User Sees Privacy Policy
          Given I have accessed the contact info page for the TU service
          When I scroll to the bottom of the page 
          Then I should see a privacy policy with a bold subheading stating:
          “How we use your data”
          And below this I should see plain text with the words:
          “We'll use your data to verify your submission and organisation. We'll also email you should we need to discuss your submission.
          We will not share your personal details with third parties.”
          And below this I should see a clickable check box with the words:
          'I consent to the use of my data to verify my submission'
          And below this I should see a clickable call to action button stating “Continue”

Scenario: User Adds First Name 
          Given that I have accessed the contact information page
          When I click into the textfield with the label First Name/Last Name
          Then I should see the text field become editable
          And I should be able to enter letters up to 20 characters in length
          And I should be able to click 'Save' if all fields are completed 
          And I should be able to continue to the next section of the contact info page

Scenario: User Adds Last Name 
          Given that I have accessed the contact information page
          When I click into the textfield with the label First Name/Last Name
          Then I should see the text field become editable
          And I should be able to enter letters up to 20 characters in length
          And I should be able to click 'Save' if all fields are completed 
          And I should be able to continue to the next section of the contact info page

Scenario: User Adds Email 
          Given that I have accessed the contact information page
          When I click into the textfield with the label Email Address
          Then I should see the text field become editable
          And I should be able to enter alphanumeric characters up to 20 characters in length
          And I should only be able to enter characters in email format i.e. xxxx@xxxxx.com
          And I should be able to click 'Save' if all fields are completed 
          And I should be able to continue to the next section of the form
	  
Scenario: User Completes All Contact Details- Green Confirmation Box
          Given that I have correctly populated all required fields in the 'Enter Your Details' page
	  When I click the Consent checkbox 
	  And when I click continue
	  Then I should land on a new page with a white heading in green background stating:
	  'Confirm Your Email Address'
	  And below this I should see white subtext that states:
	  'We've sent a link to to verify your email address'
	  And below this I should see a subheading that states:
	  'What Happens Next'
	  And below this I should see text that states:
	  'You must confirm your email address within 12 hours.'
	  'Once you've confirmed your email address you'll be able to enter your organisation's facility time data.'
	  And below this I should see a subheading that states:
	  'Can't find the email?'
	  And below this I should see subtext that states:
	  'Please wait a few minutes and check your spam folder. 
	  If you haven't received an email please try registering your details again or contact us.'
	  Once you've confirmed your email address you'll be able to enter your organisation's facility time data.
	 
Scenario: User Completes All Contact Details- 'Contact Us' link
	  Given that I have landed on the page with the green email confirmation message
	  When I click on the 'contact us'text
	  Then this hyperlink should take me to a new page with the contact details of the policy team stating:
	  ****
	   
        
Scenario: User attempts to continue with form against required field constraints- Error
          Given that I have accessed the TUFT service and I am at any point on the form
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
          Given that I am at any point on the form
          When I attempt to enter information that is above the charachter limit of any text field
          And I attempt to click 'Continue' 
          Then I will see an error message above this field in bold red that states: 'You have entered too many characters' 
          And below this I should see the instruction to complete the missing section as a clickable link in red bold text that states"
          'Your first name must be no longer than 50 characters'
          And I should be able to update this field with the correct information 
          And I should be able to progress with completing the form
                  
Scenario: User enters First Name and Last name in wrong format
          Given that I have arrived at the 'Enter Your Details Page' And I have selected the 'First Name' / Last Name' field
          When I attempt to enter a name in purely numeric format inside the text field
          And I attempt to enter a name in purely symbolic format inside the text field
          Then I should see an error message that states: **********
 	  And I should not be able to click the 'Continue' button
	  And I should not be able to progress with completing the rest of the form	
          
Scenario: User Leaves Field Blank- First Name
          Given that I have arrived at the 'Enter Your Details Page' And I have selected the first name field on the page
          When I attempt to leave this field unpopulated
          And I attempt to click 'Continue'
          Then I will see an error message above this blank field in bold red that states e.g: 
          'You must enter your first name before you can continue' 
          And I should not be able to click the 'Continue' button
	  And I should not be able to progress with completing the rest of the form	
          
Scenario: User Leaves Field Blank- Last Name
          Given that I have arrived at the 'Enter Your Details Page' And I have selected the Last name field on the page
          When I attempt to leave this field unpopulated
          And I attempt to click 'Continue'
          Then I will see an error message above this blank field in bold red that states e.g: 
          'You must enter your last name before you can continue'
          And I should not be able to click the 'Continue' button
	  And I should not be able to progress with completing the rest of the form
          
Scenario: User Leaves Field Blank- Last Name
          Given that I have arrived at the 'Enter Your Details Page' And I have selected the Last name field on the page
          When I attempt to leave this field unpopulated
          And I attempt to click 'Continue'
          Then I will see an error message above this blank field in bold red that states e.g: 
          'You must enter your last name before you can continue'
          And I should not be able to click the 'Continue' button
	  And I should not be able to progress with completing the rest of the form  
