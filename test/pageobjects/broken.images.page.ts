import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BrokenImagesPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get images () {
        return $$('img');
    }

     /**
     * Login with valid credentials
     */
     public async checkBrokenImages(): Promise<number>{
        let broken_images: number = 0;
        const imagesArr: ChainablePromiseArray = await this.images;
        for (const image of imagesArr) {
            const src = await image.getAttribute('src')
    
            // Execute JavaScript to fetch the image URL and get the response status
            const response: number = await browser.execute(async (url: string) => {
               const response = await fetch(url);
               return response.status;
            }, src);

            if (response !== 200) {
                broken_images++;
                console.error(`Broken image found: ${src}`);
            }
            
        }
        return broken_images
    }

}

export default new BrokenImagesPage();