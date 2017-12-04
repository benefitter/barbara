function BasePage() {

};

BasePage.prototype.get = function(url) {
    browser.get(url);
};

BasePage.prototype.getCurrentUrl = function() {
    return browser.getCurrentUrl();
};

BasePage.prototype.getTitle = function() {
    return browser.getTitle();
};

BasePage.prototype.isElementPresent = function(element) {

};

BasePage.prototype.sleep = function(seconds = 3) {
    const milliseconds = seconds * 1000;
    browser.sleep(milliseconds);
};

module.exports = BasePage;
