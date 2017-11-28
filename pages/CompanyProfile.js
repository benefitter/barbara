const BasePage = require('../pages/BasePage');

function CompanyProfile() {
    // Create a BasePage Object to copy/inherit it's properties.
    this.prototype = Object.create(BasePage.prototype);
    this.prototype.constructor = CompanyProfile;

    // Company Information
    this.companyName = element(by.id('company_name'));
    this.address = element(by.id('address'));
    this.city = element(by.id('city'));
    this.state = element(by.name('state'));
    this.zip = element(by.id('zip_code'));
    this.sic = element(by.id('sic'));


    // Company Status
    this.status = element(by.name('company_status'));

    // Company Contact
    this.firstName = element(by.id('first_name'));
    this.lastName = element(by.id('last_name'));
    this.email = element(by.id('email'));
    this.phone = element(by.id('phone_number'));

    this.enterCompanyName = function(name) {
        this.companyName.sendKeys(name);
    };

    this.enterAddress = function(address) {
        this.address.sendKeys(address);
    };

    this.enterCity = function(city) {
        this.city.sendKeys(city);
    };

    this.enterState = function(state) {
        this.state.sendKeys(state);
    };

    this.enterZip = function(zip) {
        this.zip.sendKeys(zip);
    };

    this.enterSicCode = function(code) {
        this.sic.sendKeys(code);
    };

    this.enterRequiredInfo = function(company, state, zip, sic = 2099) {
        this.enterCompanyName(company);
        this.enterState(state);
        this.enterZip(zip);
        this.enterSicCode(sic);
    };
};

module.exports = CompanyProfile;