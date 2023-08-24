const { $ } = require('@wdio/globals')
const { browser } = require('@wdio/globals')

class Commons{
    
    get element () {
        return $('#gh-ac');
    }

    open () {
        return browser.url(`https://www.ebay.com/`)
    }


}

module.exports = new Commons();
