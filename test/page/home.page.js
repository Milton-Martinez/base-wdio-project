import Methods from "./methods.page";


class HomePage extends Methods {
    constructor() {
        super();
    }
    /**\ SELECTORS **/
    /** METHODS **/
    async openURL(URL, loose){
        await this.navigateTo(URL, loose);
    }

}

export const homepage = new HomePage();;