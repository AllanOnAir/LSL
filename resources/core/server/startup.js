/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as sm from 'simplymongo';
import './chat';


// Connections à la base de données !

sm.onReady(establishConnection);

async function establishConnection() {
  import('./bigImportFile.js');
  alt.log('Nous avons réeussi as charger la database')
}
// création de la DB
new sm.Database('mongodb://localhost:27017', 'mydb', ['socialClubID', 'characters']);

// Lance les functions selon les évênements.
alt.on('playerConnect', PlayerConnection);
alt.on('playerDeath', PlayerIsDead)

// Constantes et variables.
export const DeadPlayers = {};
const timerForRespawn = 5000; // en MS => 1 seconde = 1000
 
// Les Functions
function PlayerConnection(player) {
  player.spawn(-1291.71, 83.43, 54.89, 2000);
  player.model = 'mp_m_freemode_01';
}

function PlayerIsDead() {
  // Regarde si le joueur es bien mort
  if (deadPlayers[player.id]) {
    return;
  }

  // Lance le timer pour le respawn
  deadPlayers[player.id] = alt.setTimeout(() => {

    if (deadPlayers[player.id]) {
      delete deadPlayers[player.id];
    }

    if (!player || !player.valid) {
      return;
    }

  }, TimerForRespawn);
}


