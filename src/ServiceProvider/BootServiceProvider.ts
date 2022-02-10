import "prompt";
import { readdir } from "fs";
export class BootServiceProvider {
    constructor(){
        this.printBootScreen();
        prompt.start();
        prompt.get(['username'], (res:object) => {
            console.log(res)
        })
    }


    printBootScreen = () => {
        console.log("#######################################################################\n")
        console.log("-> Author: \tBukkitGerman\t/\tJustin Preuß \n-> Github: \thttps://github.com/BukkitGerman\n-> Repository: \thttps://github.com/BukkitGerman/g4l-twitch-bot\n");
        console.log("#######################################################################\n")
    }

    
}