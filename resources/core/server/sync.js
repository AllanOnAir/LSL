/// <reference types="@altv/types-server" />
import alt from 'alt-server';
import * as sm from 'simplymongo';

const db = sm.getDatabase();


alt.on('playerConnect', handleSyncEvent);

async function handleSyncEvent(player) {
  
}