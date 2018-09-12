Feature: Add New Organization

Scenario: Users Adds A New Org
        Given that I have attempted to type the name of an organization that does not exist in the seed data into the org text field 
        When I click the 'Continue' button
        Then I should land on a new page with a heading in bold stating 'What is the primary sector of your organisation?'
        And I should see a list of radio buttons with corresponding sectors
        And I should be able to select on of these sectors
        And I should be able to click 'Continue' once a sector is selected
        And I should land on the 'Enter your details' page
        
