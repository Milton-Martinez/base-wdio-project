import { homepage } from "../page";

describe('this_is_a_template', () => {
    
    beforeEach( async () =>{
        await homepage.openURL("https://demo.ozcart.com/_v5/");
    })

    it('this_is_a_template', async () => {
        //buying items
        await browser.pause(10000);

    });
});