// Élements Visuel

let statutCo, statutNco
let canConnect = false
let tentatives = 0

window.onload = function() {
    statutCo = document.getElementById("statutco")
    statutNco = document.getElementById("statutN")

    // Afficher le statut valable
    statutCo.style.display = "none";
    statutNco.style.display = "block";
}


function checkdata() {
    // Attraper la valeur du code dans une variable
    userCode = document.getElementById("password").value
    // verifier la variable dans la base de donnés

    // emit les information du client à la base de données

    // modifier le button de connexion / création de personnage
    canConnect = true
    statutCo.style.display = "block";
    statutNco.style.display = "none";
    tentatives += 1
}


function tryToConnect(){
    if (canConnect == false){
        alert("Vous devez vous connecté avant tout !")
        tentatives += 1
    }
    else {
        if ('alt' in window) {
            alt.emit('userConnected')
        }
    }
}

if (tentatives == 3){
    console.log("Le joueur es ban 10 minutes")
}