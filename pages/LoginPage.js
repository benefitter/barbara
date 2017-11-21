const BasePage = require('../pages/BasePage');

/*
    Config File Location: /barbara/config/conf.js
    Parameters(params) can be located and are resolved from the config file.
    Used Params:
        email,
        password,
*/

function LoginPage() {
    // Create a BasePage Object to copy/inherit it's properties.
    this.prototype = Object.create(BasePage.prototype);
    this.prototype.constructor = LoginPage;

    // Login Page fields & buttons
    this.email = element(by.id('email'));
    this.password = element(by.id('password'));
    this.loginButton = element(by.buttonText('Login'));

    this.login = function() {
        this.enterEmail(browser.params.login.email);
        this.enterPassword(browser.params.login.password);
        this.loginButton.click();
        this.prototype.sleep.call(this, 3);
    };

    this.enterEmail = function(uEmail) {
        this.email.sendKeys(uEmail);
    };

    this.enterPassword = function(uPassword) {
        this.password.sendKeys(uPassword);
    };
};

module.exports = LoginPage;
