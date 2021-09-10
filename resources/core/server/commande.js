import * as alt from 'alt-server';

let vehicle
alt.onClient("spawnCar", (player, pos) => {
    vehicle = new alt.Vehicle("sanchez", pos.x, pos.y, pos.z, 0, 0, 0);
})