import { $ } from '@wdio/globals'
import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChallengingDomPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get button () {
        return $('.button:nth-child(1)');
    }

    public get buttonAlert () {
        return $('.button.alert');
    }

    public get buttonSuccess () {
        return $('.button.success');
    }

}

export default new ChallengingDomPage();