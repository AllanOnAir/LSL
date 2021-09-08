import * as alt from 'alt-client';
import * as native from 'natives';

alt.on("keydown" , key => {

    if ( key == 119) {
        alt.log( " X:" + alt.Player.local.pos.x +"- Z: " + alt.Player.local.pos.z +"- Y: " + alt.Player.local.pos.y)

    }
    else {
        return;
    }

})