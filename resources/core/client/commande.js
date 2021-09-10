import * as alt from 'alt-client';
import * as native from 'natives';

alt.on("keydown" , key => {
    let pos = alt.Player.local.pos
    if ( key == 119) {
        alt.log( " X:" + pos.x +"- Z: " + pos.z +"- Y: " + pos.y)

    }
    if ( key == 118){
        alt.emitServer("spawnCar", pos);
    }
    else {
        return;
    }

})