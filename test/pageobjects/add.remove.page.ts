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
    public async addElements(n: number){
        allureReporter.addStep('Add elements button')
        for (let i = 0; i < n; i++) {
            await this.addButton.click()
        }
    }

     /**
     * Remove n elements
     */
     public async removeElements(n: number): Promise<boolean>{
        allureReporter.addStep('Remove elements buttons')
        try {
            for (let i = n; i > 0; i--) {
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