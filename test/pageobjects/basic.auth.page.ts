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
        await browser.waitUntil(async () => {
            return await browser.isAlertOpen();
        }, {
            timeout: 5000, 
            timeoutMsg: 'La alerta no apareció en el tiempo esperado'
        });
        try {
            const alertText = await browser.getAlertText()
            console.log("alertText:" + alertText)
            await browser.sendAlertText(user + '\t' + pass)
            await browser.pause(10000)
        } catch (error) {
            console.log('Traza: ' + error)
            return false
        }
        return true
    }
}

export default new BasicAuth();