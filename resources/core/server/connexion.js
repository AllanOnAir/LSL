import * as alt from 'alt-server';

// X:4956.42236328125- Z: 3.036431312561035- Y: -5113.03662109375
alt.onClient('charCreation', player => {
    player.spawn(4956.422, -5113.036, 3.0364, 500);
    player.model = `mp_m_freemode_01`;
    alt.onClient("changePedSex", (player, sex) =>{
        player.model= sex;
    });
});