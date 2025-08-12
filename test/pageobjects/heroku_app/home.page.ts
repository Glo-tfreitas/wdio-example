import { $ } from '@wdio/globals'
import Page from './page.ts';
import allureReporter from '@wdio/allure-reporter'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public getListElement (elementNumber: number) {
        return $(`li:nth-child(${elementNumber}) > a`);
    }

    public async openNthLink(elementNumber: number){
        allureReporter.addStep('Opened link')
        await this.getListElement(elementNumber).click();
    }
}

export default new HomePage();