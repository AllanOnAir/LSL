/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as sm from 'simplymongo';
import "./connexion"

alt.on('playerConnect', (player) => {
    //  lance le système de connection
    alt.emitClient(player, "connexion")
});