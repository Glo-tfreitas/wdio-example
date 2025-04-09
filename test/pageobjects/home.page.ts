import { $ } from '@wdio/globals'
import Page from './page.ts';

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
        await this.getListElement(n).click();
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new HomePage();