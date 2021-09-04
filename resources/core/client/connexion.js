import * as alt from 'alt-client';
import * as native from 'natives';
import * as playerData from "./data"
import { createPedEditCamera, destroyPedEditCamera, setFov, setZPos } from './camera';

let isConnected = false
let request = false
let charCreator
let connexion
let player = alt.player

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

    createPedEditCamera();
    setFov(50);
    setZPos(0.6);

    alt.emitServer('charCreation', player)


}

function spawnerLeJoueur(){

}