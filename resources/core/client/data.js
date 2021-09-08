/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as native from 'natives';



var playerdata = {
    id:"",
    prenom:"",
    nomFamille:"",
    sexe:"",
    apparance: undefined,
    clothes: undefined,
}







alt.on("getdata", dataName =>{
    let data = playerdata[dataName]
    alt.emit("takedata", data)
    //alt.log(data)
});