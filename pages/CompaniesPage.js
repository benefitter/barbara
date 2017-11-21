const BasePage = require('../pages/BasePage');

function CompaniesPage() {
    // Create a BasePage Object to copy/inherit it's properties.
    this.prototype = Object.create(BasePage.prototype);
    this.prototype.constructor = CompaniesPage;

    // User Dropdown
    this.userDropDown = element(by.className("el-dropdown"));
    this.profile = element(by.cssContainingText('.el-dropdown-menu__item', 'Profile'));
    this.logOut = element(by.cssContainingText('.el-dropdown-menu__item', 'Log Out'));

    // Tab
    this.clientTab = element(by.linkText("Clients"));
    this.docLibrary = element(by.linkText("Document Library"));

    // Filters
    this.clientType = element(by.css('.actions')).all(by.css('.el-select')).first();
    this.sortFilter = element(by.css('.actions')).all(by.css('.el-select')).last();

    this.showClients = function(category) {
        this.clientType.click();

        const selection = element(by.cssContainingText('.el-select-dropdown__item', category));
        selection.click();
    };

    this.sortBy = function(category) {
        this.sortFilter.click();

        const selection = element(by.cssContainingText('.el-select-dropdown__item', category));
        selection.click();
    };

    this.countClients = function() {
        const total = element.all(by.css('.card.round.selectable')).count().then(console.log);
        return total;
    };
};

module.exports = CompaniesPage;
