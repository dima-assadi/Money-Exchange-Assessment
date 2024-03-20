#Exchange Rates API Test
- This project is designed to test the functionality and integrity of the Exchange Rates API, particularly focusing on the endpoint that retrieves the latest exchange rates for USD against various currencies.
The Exchange Rates API endpoint used in this project is https://open.er-api.com/v6/latest/USD.

#Installation
To run the tests in this project, you need to have:
- Node.js
- npm installed on your system. 

Once installed, you can follow these steps:
- Clone this repository to your local machine.
- Navigate to the project directory in your terminal.
- Run ```npm install``` to install the required dependencies.

#Dependencies:
1. ajv: A JSON Schema validator for JavaScript. Used to validate API responses against a JSON schema.
2. cypress: End-to-end testing framework. Used to write and execute tests for web applications.
3. cypress-cucumber-preprocessor: Preprocessor for Cypress that allows writing tests using Gherkin syntax.

#Test Cases
The test cases included in this project are as follows:
- Validate API Call: Checks whether the API call is successful and the response is not empty.
- Compare USD Price Against AED: Verifies that the exchange rate of USD against AED falls within a specific range.
- Verify Timestamp: Ensures that the timestamp in the API response is not less than 3 seconds old.
- Verify Currency Count: Checks if the API response contains exchange rates for 162 currency pairs.
- Validate API Response: Validates that the API response matches the provided JSON schema.

#Running Tests
To execute the tests, you can use Cypress. 
Ensure you have the project dependencies installed, and then run the following command:
```npm run cypress:open```
This will open the Cypress Test Runner, where you can select and run individual test cases or all tests.

#Configuration
The cypress.config.js file contains configuration options for Cypress. It specifies the pattern for test specification files (cypress/integration/**/*.spec.js). You can adjust this pattern according to your project's directory structure.