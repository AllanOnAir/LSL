/// <reference types="@altv/types-natives" />
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as native from 'natives';
import "./connexion"
import "./data/data"
import "./global/weather"
import "./commande"

let nearIsland = false;

alt.everyTick(() => {
	let distance = alt.Player.local.pos.distanceTo(new alt.Vector3(4840.571, -5174.425, 2.0));

    if(distance < 2000) {
        if(!nearIsland)
        {
            nearIsland = true;
            native.setIslandHopperEnabled('HeistIsland', true);
            native.setScenarioGroupEnabled('Heist_Island_Peds', true);
            native.setAudioFlag("PlayerOnDLCHeist4Island", true);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Zones", true, true);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Disabled_Zones", false, true);
        }
    } else {
        if(nearIsland)
        {
            nearIsland = false;
            native.setIslandHopperEnabled('HeistIsland', false);
            native.setScenarioGroupEnabled("Heist_Island_Peds", false);
            native.setAudioFlag("PlayerOnDLCHeist4Island", false);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Zones", false, false);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Disabled_Zones", false, false);
        }
    }
    if(nearIsland)
    {
        native.setRadarAsExteriorThisFrame();
        native.setRadarAsInteriorThisFrame(alt.hash("h4_fake_islandx"), 4700.0, -5145.0, 0, 0);
    }
});