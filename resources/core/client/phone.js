/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from "alt-client";
import * as native from "natives";
import './startup';
// const and var

var phoneOpened = 0;
let phone;
const player = alt.Player

// Ouvrire et fermer le télephone

alt.on('keydown', key =>{
  if (key == 112) {

    phoneCallout();

    setTimeout(function(){
      syncInventory();
    }, 500);
    
  }
})

function phoneCallout(){
  if (!phone) {
    phone = new alt.WebView("http://resource/client/interface/phone/index.html");
    phone.on('close:Phone', closePhone)
    
  }
  if (phoneOpened < 1) {
    //alt.log("nous ouvrons le télephone"); // Debugger
    phone.focus();
    alt.showCursor(true);
    alt.toggleGameControls(false);
    phoneOpened = 1
  }
}

function closePhone() {
  alt.showCursor(false);
  alt.toggleGameControls(true);
  phone.destroy();
  phone = undefined
  phoneOpened = 0
}



// Database Syncing

function syncInventory() {
  alt.emitServer('askForInventory');
  alt.onServer("giveInventory", (inventaire) => {
    phone.emit('inventaire',inventaire);
    //alt.log(inventaire); // Debugger
  });
}