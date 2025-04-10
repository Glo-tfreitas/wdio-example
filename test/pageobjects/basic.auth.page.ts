import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasicAuth extends Page {


     /**
     * Login with valid credentials
     */
     public async login(user: string, pass: string): Promise<boolean>{
        try {
            const charSequence: string[] = await  [user, "\t" , pass]
            await browser.sendKeys(charSequence);
        } catch (error) {
            return false
        }
        return true
    }
}

export default new BasicAuth();