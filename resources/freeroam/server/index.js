import * as alt from "alt-server";
import * as chat from "chat";

const spawns = [
  { X: 414.118, Y: --985.226, Z:29.4146 },
];

const spawnModels = ["a_m_m_malibu_01"];

const weapons = [
  "dagger",
  "bat",
  "bottle",
  "crowbar",
  "flashlight",
  "golfclub",
  "hammer",
  "hatchet",
  "knuckle",
  "knife",
  "machete",
  "switchblade",
  "nightstick",
  "wrench",
  "battleaxe",
  "poolcue",
  "stone_hatchet",
  "pistol",
  "pistol_mk2",
  "combatpistol",
  "appistol",
  "stungun",
  "pistol50",
  "snspistol",
  "snspistol_mk2",
  "heavypistol",
  "vintagepistol",
  "flaregun",
  "marksmanpistol",
  "revolver",
  "revolver_mk2",
  "doubleaction",
  "raypistol",
  "microsmg",
  "smg",
  "smg_mk2",
  "assaultsmg",
  "combatpdw",
  "machinepistol",
  "minismg",
  "raycarbine",
  "pumpshotgun",
  "pumpshotgun_mk2",
  "sawnoffshotgun",
  "assaultshotgun",
  "bullpupshotgun",
  "musket",
  "heavyshotgun",
  "dbshotgun",
  "autoshotgun",
  "assaultrifle",
  "assaultrifle_mk2",
  "carbinerifle",
  "carbinerifle_mk2",
  "advancedrifle",
  "specialcarbine",
  "specialcarbine_mk2",
  "bullpuprifle",
  "bullpuprifle_mk2",
  "compactrifle",
  "mg",
  "combatmg",
  "combatmg_mk2",
  "gusenberg",
  "sniperrifle",
  "heavysniper",
  "heavysniper_mk2",
  "marksmanrifle",
  "marksmanrifle_mk2",
  "rpg",
  "grenadelauncher",
  "grenadelauncher_smoke",
  "minigun",
  "firework",
  "railgun",
  "hominglauncher",
  "compactlauncher",
  "rayminigun",
  "grenade",
  "bzgas",
  "smokegrenade",
  "flare",
  "molotov",
  "stickybomb",
  "proxmine",
  "snowball",
  "pipebomb",
  "ball",
];

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomListEntry(list) {
  return randomNumber(0, list.length - 1);
}

alt.on("playerConnect", (player) => {
  if (player.name.includes("admin")) {
    player.kick();
    return;
  }

  player.model = spawnModels[getRandomListEntry(spawnModels)];
  player.setMeta("vehicles", []);
  const spawn = spawns[getRandomListEntry(spawns)];
  player.spawn(spawn.x, spawn.y, spawn.z, 0);
  alt.emitClient(player, "freeroam:spawned");
  alt.emitClient(player, "freeroam:Interiors");

  let connectTimeout = alt.setTimeout(() => {
    if (player && player.valid) {
      const playerCount = alt.Player.all.length;
    }
    alt.clearTimeout(connectTimeout);
  }, 1000);
});

alt.on("playerDeath", (player, killer, weapon) => {
  const spawn = spawns[randomNumber(0, spawns.length - 1)];
  alt.emitClient(player, "freeroam:switchInOutPlayer", false, 0, 2);
  let playerDeathTimeout = alt.setTimeout(() => {
    if (player && player.valid) {
      player.spawn(spawn.x, spawn.y, spawn.z, 0);
      alt.emitClient(player, "freeroam:switchInOutPlayer", true);
      player.clearBloodDamage();
    }
    alt.clearTimeout(playerDeathTimeout);
  }, 3000);
  if (killer) {
    alt.log(`${killer.name} gave ${player.name} the rest!`);
    SendNotificationToAllPlayer(`~r~<C>${killer.name}</C> ~s~killed ~b~<C>${player.name}</C>`);
  } else {
    alt.log(`${player.name} died!`);
    SendNotificationToAllPlayer(`~s~Suicide ~b~<C>${player.name}</C>`);
  }
});

function SendNotificationToPlayer(player, message, textColor = 0, bgColor = 2, blink = false) {
  alt.emitClient(player, "freeroam:sendNotification", textColor, bgColor, message, blink);
}

function SendNotificationToAllPlayer(message, textColor = 0, bgColor = 2, blink = false) {
  alt.emitAllClients("freeroam:sendNotification", textColor, bgColor, message, blink);
}

alt.on("playerDisconnect", (player, reason) => {
  const playerCount = alt.Player.all.length;
  chat.broadcast(`{1cacd4}${player.name} {ffffff}has {ff0000}left {ffffff}the Server.. (${playerCount} players online)`);
  player.getMeta("vehicles").forEach((vehicle) => {
    if (vehicle != null) {
      vehicle.destroy();
    }
  });
  player.setMeta("vehicles", undefined);
  alt.log(`${player.name} has leaved the server becauseof ${reason}`);
});

// =============================== Commands Begin ==================================================

chat.registerCmd("help", (player, args) => {
  chat.send(player, "{ff0000}========== {eb4034}HELP {ff0000} ==========");
  chat.send(player, "{ff0000}= {34abeb}/car {40eb34}(model)   {ffffff} Spawn une Voiture.");
  chat.send(player, "{ff0000}= {34abeb}/tp {40eb34}(targetPlayer)   {ffffff} Vous téleporte as un joueur.");
  chat.send(player, "{ff0000}= {34abeb}/weapon {40eb34}(weaponName)   {ffffff} vous donne l'arme.");
  chat.send(player, "{ff0000} ========================");
});

chat.registerCmd("car", (player, args) => {
  if (args.length === 0) {
    chat.send(player, "Usage: /car (vehicleModel)");
    return;
  }
  try {
    let vehicle = new alt.Vehicle(args[0], player.pos.x, player.pos.y, player.pos.z, 0, 0, 0);
    let pvehs = player.getMeta("vehicles");
    if (pvehs.length >= 3) {
      let toDestroy = pvehs.pop();
      if (toDestroy != null) {
        toDestroy.destroy();
      }
    }
    pvehs.unshift(vehicle);
    player.setMeta("vehicles", pvehs);
  } catch (e) {
    chat.send(player, `{ff0000} Le modèle de voiture : {ff9500}${args[0]} {ff0000} n'éxiste pas !`);
    alt.log(e);
  }
});

chat.registerCmd("pos", (player, args) => {
  alt.log(`Position: ${player.pos.x}, ${player.pos.y}, ${player.pos.z}`);
  chat.send(player, `Position: ${player.pos.x}, ${player.pos.y}, ${player.pos.z}`);
});

chat.registerCmd("tp", (player, args) => {
  if (args && args.length === 0) {
    chat.send(player, "Usage: /tp (Joueurs)");
    return;
  }
  const foundPlayers = alt.Player.all.filter((p) => p.name === args[0]);
  if (foundPlayers && foundPlayers.length > 0) {
    player.pos = foundPlayers[0].pos;
    chat.send(player, `Vous avez été teléporté as : {1cacd4}${foundPlayers[0].name}{ffffff}`);
  } else {
    chat.send(player, `{ff0000} Le joueur : {ff9500}${args[0]} {ff0000}ne peut être trouvé..`);
  }
});

chat.registerCmd("weapon", (player, args) => {
  if (args.length === 0) {
    chat.send(player, "Usage: /weapon (modelName)");
    return;
  }
  player.giveWeapon(alt.hash("weapon_" + args[0]), 500, true);
});

//chat.registerCmd("weapons", (player, args) => {
//  for (let weapon of weapons) {
//    player.giveWeapon(alt.hash("weapon_" + weapon), 500, true);
//  }
//});

// =============================== Commands End ====================================================
