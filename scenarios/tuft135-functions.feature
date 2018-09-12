Feature: Function Selection

Scenario: New Local Authority Selects Function
          Given that I have created a new organization and selected my sector as 'Local Authority'
          When I register my contact details and click the url token sent to my email
          Then I should land on a page with a heading in bold stating: 
          'What functions are you submitting for facility time data?'
          And below this I should see subtext stating *****
          And below this I should see a list of 3 radio buttons appear on the page
          And I should see a radio button with the label “****”
          And below this I should see a radio button with the label “****”
          And below this I should see a radio button with the label “****”
          And at the end of the page I should see a clickable button that says 'Continue'
          
Scenario: Existing Local Authority Selects Function
          Given that I have selected an existing organization with a local function from the seed data
          When I register my contact details and click the url token sent to my email
          Then I should land on a page with a heading in bold stating: 
          'What functions are you submitting for facility time data?'
          And below this I should see subtext stating *****
          And below this I should see a list of 3 radio buttons appear on the page
          And I should see a radio button with the label “****”
          And below this I should see a radio button with the label “****”
          And below this I should see a radio button with the label “****”
          And at the end of the page I should see a clickable button that says 'Continue'
          
          
Scenario: User Sees Functions Summary Page
          Given that I have landed on the function selection page
          And I see a list of 3 Function radio buttons appear on the page
          When I select any of the radio buttons and click 'Continue' 
          Then I should land on a summary page with a heading in bold stating:
          'Facility time data for functions'
          And below this I should see subtext that states:
          'You must complete the facility time data for the following functions:'
          And below this I should see a list of the functions which I selected from the previous page
          And beside each function I should see a completion status: 'Incomplete'/'Completed'
          And this status should change according to whether I have completed all form stages for this function or not
          And below this I should see a subheading in bold that states:
          'Send your submission'
          And below this I should see subtext that states:
          'By submitting this information you're confirming that the details you've provided are correct to the best of your knowledge.'
          And below this I should see a frozen 'Continue' button
          And this buttons should only be clickable once all journeys for each function are completed
          
          
Scenario: User Clicks on 'Incomplete' Function
          Given that I have landed on the functions summary page 
          And any functions selected have the 'incomplete' status 
          When I click on the name of the function or the 'incomplete' button
          Then I should be taken to the first page of the form 'Size of the org'
          And I should see the name of my organization at the top of the page
          And I should see the name of the current function journey as a subheading on the page e.g:
          'Metropolitan Police Service'
          'Central Function'
          And I should be able to complete the form fields for this function
          And I should be able to follow the journey to the end of the form
          And I should land on a summary page for that function with the heading 'check your answers'
          And this 'check your answers' page should have the same functionality as the summary pages in other journeys
          And at the end of this page I should see a button that states 'Return to functions'
          And when I click this button I should return to the function summary page
          And I should see the status next to the function I have just completed change to 'Completed'
          
Scenario: User Clicks on 'Complete' Function
          Given that I have landed on the functions summary page 
          And any functions selected have the 'complete' status 
          When I click on the name of the function or the 'complete' button
          Then I should be taken to the first page of the form 'Size of the org'
          And I should see the name of my organization at the top of the page
          And I should see the name of the current function journey as a subheading on the page e.g:
          'Metropolitan Police Service'
          'Central Function'
          And I should be able to review the pages I have completed to the end of the form
          And I should land on a summary page for that function with the heading'check your answers'
          And this 'check your answers' page should have the same functionality as the summary pages in other journeys
          And at the end of this page I should see a button that states 'Return to functions'
          And when I click this button I should return to the function summary page
          And I should see the status next to the function I have just reviewed remain 'Completed'
          
Scenario: User Completes all Functions
          Given that I have completed all fields and journeys for each function selected from the functions selection page
          When I land on the functions summary page 
          The I should see all functions with the 'complete' status next to them
          And I should see the submit button at the end of the page unfrozen and become clickable
          And when I click the 'Submit' button then I should see the submission completion page
