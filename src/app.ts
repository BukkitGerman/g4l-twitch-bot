///////////////////////////
// Author: BukkitGerman  //
///////////////////////////

import { TestCommand } from './Commands/TestCommand';
import { BootServiceProvider } from './ServiceProvider/BootServiceProvider';
class app {
    constructor() {
        const bsp = new BootServiceProvider();
        bsp.printBootScreen();
        TestCommand.run()
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
