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
  let account;

  if (accounts.length <= 1) {

    const newPlayer = {
      socialclub: player.socialID,
      lastip: player.ip,
      x: -1291.71, 
      y: 83.43, 
      z: 54.89,
      liquide: 1000,
      banque: 1000,
      logins: 0,
    }

    account = await db.insertData(newPlayer, 'accounts', true);
    } else {
    // This will assign the only document we found if it exists. To the account variable.
    account = accounts[0];
  }  

  
}

// Éxecutable lors de la déconnexion.
async function handleSyncDisconnect(player) {
  // variables et constantes
  const account = await db.fetchData('socialclub', player.socialID, 'accounts');
  player.data = account;
  // compteur de connexions
  player.data.logins += 1;

  // Sauvegarde tout la database accounts.
  await db.updatePartialData(account._id, { logins: player.data.logins }, 'accounts');

}