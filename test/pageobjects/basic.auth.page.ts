import Page from './page.ts';
import { browser } from '@wdio/globals'
import allureReporter from '@wdio/allure-reporter'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasicAuth extends Page {


     /**
     * Login with valid credentials
     */
     public async login(user: string, pass: string): Promise<boolean>{
        allureReporter.addStep('Login user')
        try {
            browser.sendAlertText(user + '\t' + pass)
        } catch (error) {
            return false
        }
        return true
    }
}

export default new BasicAuth();