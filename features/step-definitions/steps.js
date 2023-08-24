const { Given, When, Then } = require('@wdio/cucumber-framework');

const Commons = require('../pageobjects/commons');
const MainPage = require('../pageobjects/main.page');
const ResultPage = require('../pageobjects/result.page');



Given(/^I am on the ebay page$/, async () => {
    await Commons.open()
});


When(/^I search (.+)$/, async (word) => {
    await MainPage.searchArticle(word)
});

Then(/^I should see the number of items that returned by the search$/, async () => {
    await ResultPage.resultMessage();
});




