/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';


alt.onClient('charCreation', player => {
    player.spawn(436.491, -982.172, 30.699, 1000);
    player.model = `mp_m_freemode_01`;
});