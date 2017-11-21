exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://b9.employer.staging.b9.io/login',

    // Parameters needed to run Automated Tests
    params: {
        login: {
            email: process.env.B9_LOGIN,
            password: process.env.B9_PASSWORD
        },
    },

    suites: {
        example: ['../spec/*.js']
    },

    onPrepare: function() {
        // Requires
        const LoginPage = require('../pages/LoginPage');

        // Not an Angular site so set Angular Enabled to False
        browser.waitForAngularEnabled(false);

        // Login for each Test
        const loginPage = new LoginPage();
        loginPage.prototype.get.call(this, browser.baseUrl);
        loginPage.login();
    },

};
