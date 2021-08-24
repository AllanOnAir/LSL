/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
/// <reference types="@altv/types-client" />
import * as alt from 'alt-client';
import * as native from 'natives';
var isInZone = false
let dialogue
let dialogueOpened = 0
alt.onServer("isInTheZone", inZone);

function inZone() {
  alt.log("t'es dans la zone")
  isInZone = true
}

alt.on("keydown", keypress);

function keypress(key){
  if(key==69) {
    if(isInZone == true){
      callDialogue()
    }
    else{
      alt.log("t'es pas dans la zone")
    }
  }
};

function callDialogue(){
  if (!dialogue) {
    dialogue = new alt.WebView("http://resource/client/interface/npc/index.html");
  }
  if (dialogueOpened < 1) {
    //alt.log("nous ouvrons le télephone"); // Debugger
    dialogue.focus();
    alt.showCursor(true);
    alt.toggleGameControls(false);
    dialogueOpened = 1
  }
}