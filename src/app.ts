///////////////////////////
// Author: BukkitGerman  //
///////////////////////////

class app {
    constructor() {
        console.log(this.build_init_screen());
         /*
            TODO: 
                - add env
                - add readme
                - add Utility/translation class
                - add Utility/currency class 
        */

    }




    build_init_screen = () => {
        return "Author: \tBukkitGerman\t/\tJustin Preuß\nGithub: \thttps://github.com/BukkitGerman\nRepository: \thttps://github.com/BukkitGerman/g4l-twitch-bot";
    }
}

new app();