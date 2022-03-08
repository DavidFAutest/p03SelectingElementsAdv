const Page = require("./page");

class challenging_domPage extends Page {
    get linktext() {
    return $('=Elemental Selenium');
    }
    
    get partiallinktext() {
        return $('*=Elemental');
        }

    open() {
    return super.open("challenging_dom");
    }
}

module.exports = new challenging_domPage();
