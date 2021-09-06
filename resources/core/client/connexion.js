/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
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
        spawnThePlayer()
    }
}

function creationDePersonnage(){
    alt.emitServer('charCreation', player)

    charCreator = new alt.WebView("http://resource/client/interface/charCreator.html");
    charCreator.focus();
    alt.toggleGameControls(false);

    alt.setTimeout(( ) =>{
        createPedEditCamera();
        setFov(50);
        setZPos(0.6);
    },1200);

    
    native.setPedHeadBlendData(alt.Player.local, 0, 0, 0, 0, 0, 0, 0, 0, 0, false);

    charCreator.on("changeSex", sex =>{
        alt.emitServer("changePedSex", (player, sex))
    })

    charCreator.on("shapeChange", playerSkin =>{
        native.clearPedDecorations(alt.Player.local)

        // Face Shape and skin tone
        native.setPedHeadBlendData(
            alt.Player.local, 
            playerSkin.shapeFirstID, 
            playerSkin.shapeSecondID,
            0,
            playerSkin.skinFirstID, // skin 1
            playerSkin.skinSecondID, // skin 2
            0, // skin 3
            playerSkin.shapeMix,
            playerSkin.skinMix,
            0, // thirdMix
            false
        );
        // Hair Style
        native.setPedComponentVariation(alt.Player.local, 2, playerSkin.hairStyle, 0, 0);
// -------------------------------------------NEED TO ADD HAIRCOLOR HERE !!!!-----------------------------------------------------
        native.addPedDecorationFromHashes(alt.Player.local, native.getHashKey(playerSkin.collection),  native.getHashKey(playerSkin.overlay));



// -------------------------------------------NEED TO ADD BEARD HERE !!!!-----------------------------------------------------
        // EyeBrow
        native.setPedHeadOverlay(alt.Player.local, 2, playerSkin.sourcils, 1);
        native.setPedHeadOverlayColor(alt.Player.local, 2,1, playerSkin.sourcilsColor, playerSkin.sourcilsColor)

    


        // Eye Color
        native.setPedEyeColor(alt.Player.local, playerSkin.eyeColor);

    })


    charCreator.on("characterCreated", playerSkin => {
        charCreator.destroy();
        charCreator = undefined
        alt.toggleGameControls(true);
        destroyPedEditCamera();
        alt.showCursor(false);
    })

}

function spawnThePlayer(){

}