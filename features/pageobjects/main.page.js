const { $ } = require('@wdio/globals')
const { Key } =  require ('webdriverio')
const { browser } = require('@wdio/globals')

class MainPage{
    /**
     * define selectors using getter methods
     */
    get searchArticlesInput () {
        return $('aria/Buscar artículos');
    }

    get searchButton () {
        // return $('#gh-btn');
        return $('//*[@id="gh-btn"]');
        
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async searchArticle (word) {
        await this.searchArticlesInput.setValue(word);
        await browser.keys(Key.Enter)
        // await this.searchButton.click();
    }
}

module.exports = new MainPage();
