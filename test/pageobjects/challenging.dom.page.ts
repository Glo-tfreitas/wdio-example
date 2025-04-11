import { $ } from '@wdio/globals'
import Page from './page.ts';
import allureReporter from '@wdio/allure-reporter'


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

    public get allTableHeaders () {
        return $$('th');
    }
    
    public get  allTableRows () {
        return $$('tr');
    }

    public getTableDataInARow (position: number) {
        return $$(`tr:nth-child(${position}) > td`);
    }

     /**
     * Checks how many broken images there are at a page
     */
     public async checkPositionOfTableData(searchText: string): Promise<string>{
        allureReporter.addStep(`Check's the position of the text ${searchText}, if it doesn't exist it returns a handled error`)
        const allRows: ChainablePromiseArray = await this.allTableRows;
        const allHeaders = await this.allTableHeaders;
        for (let i = 0; i < allRows.length; i++) {
            const rowElements = await this.getTableDataInARow(i)
            const rowElementsLength = await rowElements.length
            for(let j = 0; j < rowElementsLength; j++){
                let columnName = await allHeaders[j].getText()
                if(await rowElements[j].getText() == searchText){
                    return `The text was found at row ${i} and column ${columnName}`
                }
            }
        }
        return 'The image was not found'
        
    }  
}

export default new ChallengingDomPage();