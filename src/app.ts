///////////////////////////
// Author: BukkitGerman  //
///////////////////////////

import { TestCommand } from './Commands/TestCommand';
import { BootServiceProvider } from './ServiceProvider/BootServiceProvider';
import 'dotenv/config'

class app {
    constructor() {
        const bsp = new BootServiceProvider();
        TestCommand.run()
        
        //For testing purpose
        console.log(process.env)
        
         /*
            TODO: 
                - add env
                - add readme
                - add Utility/translation class
                - add Utility/currency class 
        
        */

    }
}

new app();
