/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as native from 'natives';
import * as playerData from "./data"

let isConnected = false
let request = false
let charCreator
let connexion

alt.onServer("connexion", player =>{
    connexion = new alt.WebView("http://resource/client/interface/connection.html");
    connexion.focus();
    connexion.on("userConnected", userConnected)
    alt.showCursor(true);
    alt.toggleGameControls(false);
});

function userConnected(){
    connexion.destroy();
    connexion = undefined

    let prenom
    alt.emit("getdata", "prenom")
    alt.on("takedata", data =>{
        prenom = data
        alt.log(data)
    });

    if (prenom == "" || prenom == undefined){
        creationDePersonnage()
    }
    else{
        alt.showCursor(false);
        alt.toggleGameControls(true);
        spawnerLeJoueur()
    }
}

function creationDePersonnage(){
    charCreator = new alt.WebView("http://resource/client/interface/charCreator.html");
    charCreator.focus();
    alt.showCursor(true);
    alt.toggleGameControls(false);

}

function spawnerLeJoueur(){

}