let actualpage = 1


// Too much value to explain ( Basicly all the hair overlay pick by the haircut ID)
const HairOverlaysMale = {
    0: { collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    1: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_001' },
    2: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    3: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_003' },
    4: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_004' },
    5: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_005' },
    6: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_006' },
    7: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_007' },
    8: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_008' },
    9: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_009' },
    10: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_013' },
    11: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    12: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_011' },
    13: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_012' },
    14: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    15: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    16: { collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_000' },
    17: { collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_001' },
    18: { collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_000' },
    19: { collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_001' },
    20: { collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_000' },
    21: { collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_001' },
    22: { collection: 'multiplayer_overlays', overlay: 'NGInd_M_Hair_000' },
    24: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_000' },
    25: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_001' },
    26: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_002' },
    27: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_003' },
    28: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_004' },
    29: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_005' },
    30: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_006' },
    31: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_M' },
    32: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_M' },
    33: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_M' },
    34: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_M' },
    35: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_M' },
    36: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_005_M' },
    37: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_001' },
    38: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    39: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_003' },
    40: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_004' },
    41: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_005' },
    42: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_006' },
    43: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_007' },
    44: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_008' },
    45: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_009' },
    46: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_013' },
    47: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    48: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_011' },
    49: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_012' },
    50: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    51: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    52: { collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_000' },
    53: { collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_001' },
    54: { collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_000' },
    55: { collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_001' },
    56: { collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_000' },
    57: { collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_001' },
    58: { collection: 'multiplayer_overlays', overlay: 'NGInd_M_Hair_000' },
    59: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_000' },
    60: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_001' },
    61: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_002' },
    62: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_003' },
    63: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_004' },
    64: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_005' },
    65: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_006' },
    66: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_M' },
    67: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_M' },
    68: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_M' },
    69: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_M' },
    70: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_M' },
    71: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_005_M' },
    72: {
        collection: 'mpgunrunning_overlays',
        overlay: 'MP_Gunrunning_Hair_M_000_M'
    },
    73: {
        collection: 'mpgunrunning_overlays',
        overlay: 'MP_Gunrunning_Hair_M_001_M'
    }
};

const HairOverlaysFemale = {
    0: { collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    1: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_001' },
    2: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_002' },
    3: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    4: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_004' },
    5: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_005' },
    6: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_006' },
    7: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    8: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_008' },
    9: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_009' },
    10: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_010' },
    11: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_011' },
    12: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_012' },
    13: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_013' },
    14: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    15: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    16: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_000' },
    17: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    18: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    19: { collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_000' },
    20: { collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_001' },
    21: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    22: { collection: 'multiplayer_overlays', overlay: 'NGHip_F_Hair_000' },
    23: { collection: 'multiplayer_overlays', overlay: 'NGInd_F_Hair_000' },
    25: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_000' },
    26: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_001' },
    27: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_002' },
    28: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    29: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    30: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_004' },
    31: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_006' },
    32: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_F' },
    33: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_F' },
    34: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_F' },
    35: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_F' },
    36: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    37: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_006_F' },
    38: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_F' },
    39: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_001' },
    40: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_002' },
    41: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    42: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_004' },
    43: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_005' },
    44: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_006' },
    45: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    46: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_008' },
    47: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_009' },
    48: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_010' },
    49: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_011' },
    50: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_012' },
    51: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_013' },
    52: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    53: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    54: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_000' },
    55: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    56: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    57: { collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_000' },
    58: { collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_001' },
    59: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    60: { collection: 'multiplayer_overlays', overlay: 'NGHip_F_Hair_000' },
    61: { collection: 'multiplayer_overlays', overlay: 'NGInd_F_Hair_000' },
    62: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_000' },
    63: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_001' },
    64: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_002' },
    65: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    66: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    67: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_004' },
    68: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_006' },
    69: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_F' },
    70: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_F' },
    71: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_F' },
    72: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_F' },
    73: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    74: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_006_F' },
    75: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_F' },
    76: {
        collection: 'mpgunrunning_overlays',
        overlay: 'MP_Gunrunning_Hair_F_000_F'
    },
    77: {
        collection: 'mpgunrunning_overlays',
        overlay: 'MP_Gunrunning_Hair_F_001_F'
    }
};


// Skin Tone Mix You want to create ! i suggest to comment the name of the skin tone. ( skinID are parent face https://gtaforums.com/topic/858970-all-gtao-face-ids-pedset_ped_head_blend_data-explained/) 
SkinToneMix = {
    1: { skinFirstID: 0, skinSecondID: 0, skinMix: 0},
    2: { skinFirstID: 19, skinSecondID: 4, skinMix: 0},
    3: { skinFirstID: 23, skinSecondID: 34, skinMix: 0},
    4: { skinFirstID: 37, skinSecondID: 36, skinMix: 0},
    5: { skinFirstID: 23, skinSecondID: 38, skinMix: 0},
    6: { skinFirstID: 27, skinSecondID: 6, skinMix: 0},
}

// Player Skin data ( Every parameter the user can modify to create a great character )
let playerSkin = {
    // Head Shape Parameter
    shapeFirstID: 0,
    shapeSecondID: 0,
    skinFirstID: 0,
    skinSecondID: 0,
    shapeMix: 0,
    skinMix: 0,
    // Cheveux 
    hairStyle: 0,
    hairColor: 0,
    hairColor2: 0,
    collection: "",
    overlay: "",
    // Details
    eyeColor: 0,
    eyebrow: 0,
    eyebrowColor: 0,
    beard: 0,
    beardColor: 0,
    beardOpacity: 0,
}



let sex = "mp_m_freemode_01"


function changeSexe(event){
    // Get sex selected and send it trought client then server to change the ped of the character
    sex = document.getElementById("sexPicking").options[document.getElementById("sexPicking").selectedIndex].value
    if("alt" in window) {
        alt.emit("changeSex", sex)
    }

}

function changeFace(event){

    // Face Shape | Dad Face | Mom Face |  Mix of the 2 (-1 to 1)|
    playerSkin.shapeFirstID = parseInt(document.getElementById("dad").options[document.getElementById("dad").selectedIndex].value)
    playerSkin.shapeSecondID = parseInt(document.getElementById("mom").options[document.getElementById("mom").selectedIndex].value)
    playerSkin.shapeMix = (document.getElementById("sliderHeritage").value -100) / 100
    
    // Skin Color ( color mix can be created at line 175)
    let valeur = document.getElementById("SkinColor").value
    playerSkin.skinFirstID = SkinToneMix[valeur].skinFirstID
    playerSkin.skinSecondID =  SkinToneMix[valeur].skinSecondID
    playerSkin.skinMix =  SkinToneMix[valeur].skinMix

    // Hair Style and head overlay
    playerSkin.hairStyle = parseInt(document.getElementById("hairStyle").value)
    playerSkin.hairColor = parseInt(document.getElementById("hairColor").value)
    playerSkin.hairColor2 = parseInt(document.getElementById("hairColor2").value)

    if ( sex = "mp_m_freemode_01"){
        playerSkin.collection = HairOverlaysMale[document.getElementById("hairStyle").value].collection
        playerSkin.overlay = HairOverlaysMale[document.getElementById("hairStyle").value].overlay
    }
    else {
        playerSkin.collection = HairOverlaysFemale[document.getElementById("hairStyle").value].collection
        playerSkin.overlay = HairOverlaysFemale[document.getElementById("hairStyle").value].overlay
    }

    // Beard
    playerSkin.beard = parseInt(document.getElementById("beard").value)
    playerSkin.beardColor = parseInt(document.getElementById("beardColor").value)
    playerSkin.beardOpacity = parseInt(document.getElementById("beardOpacity").value)/100

    


    // eyebrow ( color and Shape )
    playerSkin.eyebrow = parseInt(document.getElementById("eyebrow").value)
    playerSkin.eyebrowColor = parseInt(document.getElementById("eyebrowColor").value)

    // EyeColor
    playerSkin.eyeColor = parseInt(document.getElementById("eyeColor").value)


    // Debuger
    console.log(playerSkin.sourcilsColor)

    // Update the Character
    if ("alt" in window) {
        alt.emit("shapeChange", playerSkin)
    }
}

// Basic WebView Function
window.onload = loadFirstPage; 
function loadFirstPage(){
  document.getElementById(actualpage).style.display = "block"
}

function nextPage(){
    if (actualpage == 5  ) { compilation() } // Change actualpage == to the value the id of the last page
    
    else {
        document.getElementById(actualpage.toString()).style.display = "none"
        if ( sex == "mp_f_freemode_01" && actualpage == 3) {actualpage = 5 } else {actualpage ++}
        document.getElementById(actualpage.toString()).style.display = "block"
    }
}

function lastPage(){
    if ( actualpage > 1 ) {
        document.getElementById(actualpage.toString()).style.display = "none"
        if ( sex == "mp_f_freemode_01" && actualpage == 5) {actualpage = 3 } else {actualpage --}
        document.getElementById(actualpage.toString()).style.display = "block"
    }

  }

function compilation() {
    if ('alt' in window) {
        alt.emit('characterCreated')
    }
}