const CompaniesPage = require('../pages/CompaniesPage');
const CompanyProfile = require('../pages/CompanyProfile');

describe("Create a new company with the required fields", function() {
    const clientsPage = new CompaniesPage();
    const compProfile = new CompanyProfile();

    it('should navigate from the clients page to the Add Company Page', function() {
        expect(clientsPage.prototype.getCurrentUrl.call(this)).toBe('https://b9.employer.staging.b9.io/companies');
        clientsPage.prototype.sleep.call(this);
        clientsPage.addCompany();
        clientsPage.prototype.sleep.call(this);
        expect(clientsPage.prototype.getCurrentUrl.call(this)).toBe('https://b9.employer.staging.b9.io/company/new/profile');
    });

    it('should fill out the required info needed to add the company', function() {
        expect(clientsPage.prototype.getCurrentUrl.call(this)).toBe('https://b9.employer.staging.b9.io/company/new/profile');
        compProfile.enterRequiredInfo("Florida Sunny & Relax Bots ", "Florida", "33135");
        compProfile.prototype.sleep.call(this, 5);
        compProfile.next.click();
        compProfile.prototype.sleep.call(this);
        expect(compProfile.prototype.getTitle()).toBe('Census');
        compProfile.prototype.sleep.call(this);
    });
});