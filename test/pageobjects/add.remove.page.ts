import { $ } from '@wdio/globals'
import Page from './page.ts';

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
        return $(`div[class = "elements"] > button[${n}]`);
    }

    /**
     * Add n elements
     */
    public async addElements(n: number){
        for (let i = 0; i < n; i++) {
            await this.addButton.click()
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new AddRemovePage();