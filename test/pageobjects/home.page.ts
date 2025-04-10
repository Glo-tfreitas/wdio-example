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
    public getListElement (n: number) {
        return $(`li:nth-child(${n}) > a`);
    }

    public async openNthLink(n: number){
        allureReporter.addStep('Opened link')
        await this.getListElement(n).click();
    }
}

export default new HomePage();