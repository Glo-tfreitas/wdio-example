import { expect } from '@wdio/globals'
import HomeDictionary from '../pageobjects/home.page.ts'
import CheckboxesPage from '../pageobjects/checkboxes.page.ts';
import AddRemovePage from '../pageobjects/add.remove.page.ts';

describe('open a link', () => {
    beforeEach('init browser', async ()=>{
        await HomeDictionary.open();
    });
    it('should open the nth link of the page', async () => {
        await HomeDictionary.openNthLink(1);
    });
    it('should validate the add/remove elements page', async () => {
        const addRemoveElementsPage = 2;
        const elementsToAdd = 5;
        await HomeDictionary.openNthLink(addRemoveElementsPage);
        await AddRemovePage.addElements(elementsToAdd);
        await AddRemovePage.getDeleteButton(5).click();
    });
    it('should validate the checkboxes page', async () => {
        await HomeDictionary.openNthLink(6);
        await expect(CheckboxesPage.inputCheckbox2).toBeSelected();
        await CheckboxesPage.inputCheckbox1.click();
        await expect(CheckboxesPage.inputCheckbox1).toBeSelected();
    });
})