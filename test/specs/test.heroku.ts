import { expect } from '@wdio/globals'
import Home from '../pageobjects/home.page.ts'
import CheckboxesPage from '../pageobjects/checkboxes.page.ts';
import AddRemovePage from '../pageobjects/add.remove.page.ts';

describe('open a link', () => {
    let urlToTest
    beforeEach('init browser', async ()=>{
        await Home.open();
    });
    it('should open the nth link of the page', async () => {
        const firstLink = 1;
        await Home.openNthLink(firstLink);
    });
    it.only('should add 5 elements and remove 4', async () => {
        const addRemoveElementsPage = 2
        const elementsToAdd = 5
        const elementsToRemove = 4
        urlToTest = 'https://the-internet.herokuapp.com/add_remove_elements/'
        //await expect (Home.getListElement(addRemoveElementsPage).getAttribute('href')).toBe(urlToTest)
        await Home.openNthLink(addRemoveElementsPage)
        const url = await browser.getUrl();
        await expect(url).toBe(urlToTest)
        //await browser.pause(10000)
        await AddRemovePage.addElements(elementsToAdd)
        await expect (AddRemovePage.removeElements(elementsToRemove)).resolves.toBe(true);
    });
    it('should validate the add/remove elements page', async () => {
        const addRemoveElementsPage = 2;
        const elementsToAdd = 5;
        await Home.openNthLink(addRemoveElementsPage);
        await AddRemovePage.addElements(elementsToAdd);
        await AddRemovePage.getDeleteButton(5).click();
    });
    it('should validate the checkboxes page', async () => {
        await Home.openNthLink(6);
        await expect(CheckboxesPage.inputCheckbox2).toBeSelected();
        await CheckboxesPage.inputCheckbox1.click();
        await expect(CheckboxesPage.inputCheckbox1).toBeSelected();
    });
})