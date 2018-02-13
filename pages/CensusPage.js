const BasePage = require('../pages/BasePage');

function CensusPage() {
    // Create a BasePage Object to copy/inherit it's properties.
    this.prototype = Object.create(BasePage.prototype);
    this.prototype.constructor = CensusPage;

    // Initial Census Page Objects.
    this.startAddEmp = element(by.buttonText('Start'));
    this.uploadCensus = element(by.buttonText('Upload'));

    // Header Icons (Top Right).
    this.download = element(by.className('download-census'));
    this.helpLink = element(by.className('help'));

    // Add Employees.
    this.userDropDown = element(by.className('el-dropdown'));
    this.profile = element(by.cssContainingText('.el-dropdown-menu__item', 'Manual Entry'));
    this.logOut = element(by.cssContainingText('.el-dropdown-menu__item', 'Upload File'));
};

module.exports = CensusPage;