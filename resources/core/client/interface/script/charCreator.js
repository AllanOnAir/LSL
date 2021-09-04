let actualpage = 1

let playerSkin = {
    //ped: alt.Player,
    shapeFirstID: 0,
    shapeSecondID: 0,
    shapeThirdID: 0, // never change this value
    skinFirstID: 0,
    skinSecondID: 0,
    skinThirdID: 0,  // never change this value
    shapeMix: 0,
    skinMix: 0,
    thirdMix: 0, //  never change this value
    isParent: false
}


colorMix = {
    1: { skinFirstID: 0, skinSecondID: 0, skinMix: 0},
    2: { skinFirstID: 19, skinSecondID: 4, skinMix: 0},
    3: { skinFirstID: 23, skinSecondID: 34, skinMix: 0},
    4: { skinFirstID: 37, skinSecondID: 36, skinMix: 0},
    5: { skinFirstID: 23, skinSecondID: 38, skinMix: 0},
    6: { skinFirstID: 27, skinSecondID: 6, skinMix: 0},
}




let sexe = "mp_m_freemode_01"


function changeSexe(event){
    sexe = document.getElementById("sexePicking").options[document.getElementById("sexePicking").selectedIndex].value
    alt.emit("changeSex", sexe)
}

function changeFace(event){

    // Face Shape
    playerSkin.shapeFirstID = parseInt(document.getElementById("dad").options[document.getElementById("dad").selectedIndex].value)
    playerSkin.shapeSecondID = parseInt(document.getElementById("mom").options[document.getElementById("mom").selectedIndex].value)
    playerSkin.shapeMix = (document.getElementById("sliderHeritage").value -100) / 100
    
    // Skin Color
    let valeur = document.getElementById("SkinColor").value

    playerSkin.skinFirstID = colorMix[valeur].skinFirstID
    playerSkin.skinSecondID =  colorMix[valeur].skinSecondID
    playerSkin.skinMix =  colorMix[valeur].skinMix

    alt.emit("shapeChange", playerSkin)
}






window.onload = loadFirstPage; 

function loadFirstPage(){
  document.getElementById(actualpage).style.display = "block"










}

function nextPage(){
    if (actualpage == 5 ) { compilation() }
    document.getElementById(actualpage.toString()).style.display = "none"
    actualpage ++
    document.getElementById(actualpage.toString()).style.display = "block"
    console.log(actualpage)


}

function lastPage(){
    if ( actualpage > 1 ) {
        document.getElementById(actualpage.toString()).style.display = "none"
        actualpage --
        document.getElementById(actualpage.toString()).style.display = "block"
        console.log(actualpage)
    }

  }

function compilation() {
    if ('alt' in window) {
        alt.emit('characterCreated')
    }
}

