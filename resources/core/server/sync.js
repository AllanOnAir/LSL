/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-server" />
import alt from 'alt-server';
import * as sm from 'simplymongo';

// constantes et variables.
const db = sm.getDatabase();

// Appel de fonction,
alt.on('playerConnect', handleSyncConnect);
alt.on('playerDisconnect', handleSyncDisconnect)


// Éxecutable lors de la connexion
async function handleSyncConnect(player) {
  const accounts = await db.fetchAllByField('socialclub', player.socialID, 'accounts');
  let compte;

  if (accounts.length < 1) {

    const newPlayer = {
      socialclub: player.socialID,
      lastip: player.ip,
      x: 0,
      y: 0,
      z: 0,
      liquide: 1000,
      banque: 1000,
      logins: 0,
    }

    compte = await db.insertData(newPlayer, 'accounts', true);
    } else {
    // This will assign the only document we found if it exists. To the account variable.
    compte = accounts[0];
  }  

  const account = await db.fetchData('socialclub', player.socialID, 'accounts'); 
  player.data = account;
  const lastposx = player.data.x
  const lastposy = player.data.y
  const lastposz = player.data.z
  alt.log(lastposx)

  if ( lastposx == 0 ) {
    player.spawn(-1291.71, 83.43, 54.89, 2000);
    player.model = 'mp_m_freemode_01';
  }
  else {
    player.spawn(lastposx, lastposy, lastposz, 2000);
    player.model = 'mp_m_freemode_01';
  }

  
}

// Éxecutable lors de la déconnexion.

async function handleSyncDisconnect(player){
  const position = player.pos;
  const account = await db.fetchData('socialclub', player.socialID, 'accounts'); 
  player.data = account;
  player.data.x = position.x
  player.data.y = position.y
  player.data.z = position.z

  await db.updatePartialData(player.data._id, { x: player.data.x, y: player.data.y, z: player.data.z  }, 'accounts');
}