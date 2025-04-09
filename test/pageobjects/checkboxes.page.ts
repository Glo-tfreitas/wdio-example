import { $ } from '@wdio/globals'
import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxesPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputCheckbox1 () {
        return $('//input[@type="checkbox"][1]');
    }

    public get inputCheckbox2 () {
        return $('//input[@type="checkbox"][2]');
    }

}

export default new CheckboxesPage();