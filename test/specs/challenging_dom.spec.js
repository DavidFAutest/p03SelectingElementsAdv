const challenging_domPage = require('../pageobjects/challenging_dom.page');


describe('Challenging_dom Page', () => {
    it('should exsist', async () => {
        await challenging_domPage.open();

        await expect(challenging_domPage.linktext).toBeExisting();
        
        // console.log(await challenging_domPage.linktext.getText());
        // console.log(await challenging_domPage.getAttribute('href=http://elementalselenium.com/'))

    });

    it('Partial Link should exsist', async () => {
        await expect(challenging_domPage.partiallinktext).toBeExisting();
        
    });
});