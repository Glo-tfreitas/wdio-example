import { $ } from '@wdio/globals'
import Page from './page.ts';
import allureReporter from '@wdio/allure-reporter'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddRemovePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addButton () {
        return $('div[class = "example"] > button');
    }

    public getDeleteButton (n: number) {
        return $(`#elements > button:nth-child(${n})`);
    }

    /**
     * Add n elements
     */
    public async addElements(elementsToAdd: number){
        allureReporter.addStep(`Add ${elementsToAdd} elements using the button'`)
        for (let i = 0; i < elementsToAdd; i++) {
            await this.addButton.click()
        }
    }

     /**
     * Remove n elements
     */
     public async removeElements(elementsToRemove: number): Promise<boolean>{
        allureReporter.addStep(`Remove ${elementsToRemove} elements using the buttons`)
        try {
            for (let i = elementsToRemove; i > 0; i--) {
                await this.getDeleteButton(i).click()
            }
        } catch (error) {
            console.log(error)
            return false
        }
        return true
    }
}

export default new AddRemovePage();