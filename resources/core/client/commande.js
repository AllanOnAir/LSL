import * as alt from 'alt-client';
import * as native from 'natives';


// WebView
let menu






let connected = false


alt.on("connected", status => {
    // console.log("le joueur es connecté ")
    connected = true
})



alt.on("keydown" , key => {
    let pos = alt.Player.local.pos
    if ( key == 119) {
        alt.log( " X:" + pos.x +"- Z: " + pos.z +"- Y: " + pos.y)

    }
    if ( key == 118){
        alt.emitServer("spawnCar", pos);
    }
    if ( key == 90){
        checkmenu()
    }
    else {
        return;
    }
})
    
    
function checkmenu() {
    if ( connected == true) {
        if ( !menu ){
            alt.showCursor(true)
            alt.toggleGameControls(false);
            menu = new alt.WebView("http://resource/client/interface/menu.html");
            menu.focus()
        
        }
        else {
            menu.destroy()
            alt.showCursor(false)
            alt.toggleGameControls(true);
            menu = undefined
        
        }
    
    }

    menu.on("openInventory", msg => {
        menu.destroy()
        alt.log("ouvre l'inventaire")
        menu = new alt.WebView("http://resource/client/interface/inventaire.html")
        menu.focus()


    })










}



