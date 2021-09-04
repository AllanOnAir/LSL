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

let sexe = "mp_m_freemode_01"

function changeSexe(event){
    sexe = document.getElementById("sexePicking").options[document.getElementById("sexePicking").selectedIndex].value
    if ( sexe == 1){
        let ped = "mp_f_freemode_01"
        alt.emit("changeSex", ped)
    }
    else {
        let ped = "mp_m_freemode_01"
        alt.emit("changeSex", ped)
    }
}







window.onload = loadFirstPage; 

function loadFirstPage(){
  document.getElementById(actualpage).style.display = "block"










}

function nextPage(){
    if ( actualpage < 5 ) {
        document.getElementById(actualpage.toString()).style.display = "none"
        actualpage ++
        document.getElementById(actualpage.toString()).style.display = "block"
        console.log(actualpage)
    }

}

function lastPage(){
    if ( actualpage > 1 ) {
        document.getElementById(actualpage.toString()).style.display = "none"
        actualpage --
        document.getElementById(actualpage.toString()).style.display = "block"
        console.log(actualpage)
    }

  }