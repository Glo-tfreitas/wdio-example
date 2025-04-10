import { expect } from '@wdio/globals'
import Home from '../pageobjects/home.page.ts'
import CheckboxesPage from '../pageobjects/checkboxes.page.ts';
import AddRemovePage from '../pageobjects/add.remove.page.ts';
import BasicAuth from '../pageobjects/basic.auth.page.ts';
import BrokenImages from '../pageobjects/broken.images.page.ts';

describe('open a link', () => {
    let urlToTest
    let linkToOpen
    let username
    let password
    beforeEach('init browser', async ()=>{
        await Home.open()
    });
    it('should open the nth link of the page', async () => {
        let linkToOpen = 1;
        await Home.openNthLink(linkToOpen)
    });
    it('should add 5 elements and remove 4', async () => {
        linkToOpen = 2
        const elementsToAdd = 5
        const elementsToRemove = 4
        urlToTest = 'https://the-internet.herokuapp.com/add_remove_elements/'
        await Home.openNthLink(linkToOpen)
        const url = await browser.getUrl()
        await expect(url).toBe(urlToTest)
        //await browser.pause(10000)
        await AddRemovePage.addElements(elementsToAdd)
        await expect (AddRemovePage.removeElements(elementsToRemove)).resolves.toBe(true);
    });
    it('should login with valid credentials', async () => {
        linkToOpen = 3;
        urlToTest = 'https://the-internet.herokuapp.com/basic_auth'
        await Home.openNthLink(linkToOpen);
        const url = await browser.getUrl()
        await expect(url).toBe(urlToTest)
        username = 'admin'
        password = 'admin'
        await browser.pause(10000)
        await expect(BasicAuth.login(username, password)).resolves.toBe(true)
    });
    it('checks images in the broken images page', async () => {
        linkToOpen = 4;
        urlToTest = 'https://the-internet.herokuapp.com/broken_images'
        await Home.openNthLink(linkToOpen);
        const url = await browser.getUrl()
        await expect(url).toBe(urlToTest)
        await expect(BrokenImages.checkBrokenImages()).resolves.toBe(0)
    });
    it('should validate the checkboxes page', async () => {
        linkToOpen = 6
        await Home.openNthLink(linkToOpen);
        await expect(CheckboxesPage.inputCheckbox2).toBeSelected();
        await CheckboxesPage.inputCheckbox1.click();
        await expect(CheckboxesPage.inputCheckbox1).toBeSelected();
    }); 
})