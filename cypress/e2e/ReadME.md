Test case 1 _ Validate the Signup Login Button 
Test case 2 _ Validate the Signup Login Button 
Both These test cases are stored in Cypress Folder , Under E2E test folder .
test1.cy.js file validates the sign-up button and test2.cy.js tests the login button 
we haven't added any type of waits and page objet models as it would slow down the test development process
If tester wants to add wait I would encourage to use cy.wait() method , but still a better approach would be to add defaultwait() in the config.js file  present in the repository.
To run the test we encourage user to download node.js and install cypress using command 
npm install -g cypress
and lauch cypress using npx cypress run.
Cypress has built-in support for generating test reports. You can enhance it using plugins like cypress-mochawesome-reporter.
Run the tests and View reports .
