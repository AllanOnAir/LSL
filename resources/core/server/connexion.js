import * as alt from 'alt-server';


alt.onClient('charCreation', player => {
    player.spawn(1603.831, 202.192, 240.192, 500);
    player.model = `mp_m_freemode_01`;
    alt.onClient("changePedSex", (player, sex) =>{
        player.model= sex;
    });
});