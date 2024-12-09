
class Methods {
    constructor() {
    }
    /**
     * @function navigateTo It executes the main browser method to open a specific URL within the actual capability
     * @param {String} path the URL path you want to pass to the Browser object
     * @param {boolean} loose if navigating a page should not close any alerts that arise, Default is yes close any alert
     */
    async navigateTo(path, loose = false) {
        await browser.maximizeWindow();
        await browser.url(path);
        if(await browser.isAlertOpen()) {
            if (!loose) await browser.acceptAlert()
            else throw new Error(`navigateTo Error: An alert was opened with "${await browser.getAlertText()}"`)
        }
    }

    /**
     * @function hoverElement It executes the main browser method to open a specific URL within the actual capability
     * @param {string} element Enable hover state for an element,  which is reset upon next interaction.
     */
    async hoverElement(item) {
        
        await item.waitForDisplayed();
        await browser.waitUntil( async () =>{
            return await item.waitForDisplayed();
        }, { timeout:2000, timeoutMsg:'HoverElement Error: El elemento no esta visible', interval:10000 });
        await item.moveTo();
    }


    /**
     * @function clickAnElement It executes the main browser method to open a specific URL within the actual capability
     * @param {string} element Enable hover state for an element,  which is reset upon next interaction.
     */
    async clickAnElement(item, options={ timeout:4000, timeoutMsg:'ClickAnElement Error: A wild error showed up, The element is not clickable', interval:3000 }) {
        await item.waitForDisplayed();
        await item.isExisting();
        await item.click();
    }

    /**
     * @function waitForIsClickable It executes the main browser method to open a specific URL within the actual capability
     * @param {string} item A valid selector.
     * @param {number} timeout time in ms (default set based on waitforTimeout config value) 
     * @param {boolean} reverse if true it waits for the opposite (default: false)
     * @param {string} timeoutMsg if exists it overrides the default error message
     * @param {number} interval interval between checks (default: waitforInterval)
     **/
    async waitForIsClickable(item, options={ timeout:2000, reverse:false, timeoutMsg:'waitForIsClickable Error: The element is not clickable', interval:1000 }) {
        await item.waitForClickable(options);
    }

    async waitElementHasItems(item){
        await browser.waitUntil(
            async() => (item.length > 0)
        );
    }



}

export default Methods;