const Ajv = require('ajv');
const schema = require('../fixtures/schema.json');

describe('Exchange Rates', () => {

    let apiResponse;
    let apiHeaders;

    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    beforeEach(() => {
        cy.request('https://open.er-api.com/v6/latest/USD').then((response) => {
            apiResponse = response.body;
            apiHeaders = response.headers;
        });
    });

    it('Validate that the API call is successful', () => {
        expect(apiResponse).to.exist;
        const isValid = validate(apiResponse);
        expect(isValid).to.be.true;
    });
  
    it('Compare USD price against AED', () => {
        expect(apiResponse).to.exist;
        expect(apiResponse.rates.AED).to.be.within(3.6, 3.7);
    });
  
    it('Verify time stamp is not less than 3 seconds', () => {
        expect(apiHeaders).to.exist; // Ensure API response is available
        const responseTime = new Date(apiHeaders.date).getTime();
        const currentTime = new Date().getTime();
        const responseTimeSeconds = (currentTime - responseTime) / 1000;
        expect(responseTimeSeconds).to.be.lessThan(3);
    });
  
    it('Verify that 162 currency pairs are returned by the API', () => {
        expect(apiResponse).to.exist;
        const count = Object.keys(apiResponse.rates).length;
        expect(count).to.eq(162); 
    });
  
    it('Validate API response matches JSON schema', () => {
        expect(apiResponse).to.exist;
        const isValid = validate(apiResponse);
        expect(isValid).to.be.true;

    });
});    
  