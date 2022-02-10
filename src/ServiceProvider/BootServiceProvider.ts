import { readdir } from "fs";

const prompt = require('prompt');

export class BootServiceProvider {
    constructor(){
        this.printBootScreen();
    }


    private printBootScreen = () => {
        console.log("#######################################################################\n")
        console.log("-> Author: \tBukkitGerman\t/\tJustin Preuß \n-> Github: \thttps://github.com/BukkitGerman\n-> Repository: \thttps://github.com/BukkitGerman/g4l-twitch-bot\n");
        console.log("#######################################################################\n")
    }

    
}