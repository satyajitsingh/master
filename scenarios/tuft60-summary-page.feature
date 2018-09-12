Feature: Summary Page

Scenario: User Views Summary Page Before Submission
          And I have completed all sections of the form correctly
          When I click continue at the end of the page entitled 'Paid trade union duties and activities'
          Then I should see a page entitled ‘Check your answers before sending’
          And I should see a summary of my completed form in a table format
          And I should see the entered number for 'Employees in your organisation' with a clickable 'Change' button next to it
          And I should see the entered entered numbers for 'Trade union representatives and full-time equivalents (FTE)' with a clickable 'Change' button next to them
          And I should see the entered numbers for 'Percentage of working hours spent on facility time' with a clickable 'Change' button next to them
          And I should see the entered numbers for 'Total pay bill and facility time costs' with a clickable 'Change' button next to them
          And I should see the entered numbers for 'Paid trade union duties and activities' with a clickable 'Change' button next to them
          And at the end of the page I should see text that states:
          'Send your submission
          By submitting this information you're confirming that the details you've provided are correct to the best of your knowledge.'
          And below this text I should see a clickable button that states:
          'Submit'
     
      
Scenario: User Wants to Edit Information Before Submission 
          Given that I have landed on the 'Check your answers' page
          And I see a summary of my completed forms in a table format with a clickable 'Change' button next to each section
          When I click a 'Change' button
          Then I should be taken to the corresponding page of the form
          And I should be able to edit/change and update the corresponding/relevant field in that page
          And I should be able to complete the form with the given parameters in each section
          And I should be able to return to this Summary Page before submission
          
           
Scenario: Authorised User Wants Submit Form Without Editing 
          Given that I am on the final page entitled ‘Check your answers before submitting’
          And I see a summary of my completed form in a table format with a clickable 'Change' button next to each section
          When I do not click on the 'Change' button
          Then I should be able to click the button that states: 'Submit'
          And I should be taken to a page with a bold heading in a green background that states:
          'Submission successfully completed
          Your reference is *****'
          And below this I should see plain text that states:
          'What happens next
          We've sent you a confirmation email with a copy of your submission data.
          If you have any queries please contact us using the reference provided. We'll contact you if we need to discuss your submission.
          If you realise you've made a mistake with your data, you can re-submit it by registering again with the same email address. You must re-submit before midnight on 30 July 2018.
          What did you think of this service? (takes 30 seconds)'
          
  
