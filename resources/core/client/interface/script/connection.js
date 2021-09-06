// Élements Visuel

let statutCo, statutNco
let canConnect = false
let tentatives = 0

window.onload = function() {
    statutCo = document.getElementById("statutco")
    statutNco = document.getElementById("statutN")

    // Show if the user is connected or not
    statutCo.style.display = "none";
    statutNco.style.display = "block";
}


function checkdata() {
    // Catch the value of the password
    userCode = document.getElementById("password").value
    // Check if the user exist if not kick the player

    // Fetch the user information from de DB

    // The user can now join the game or create a character.
    canConnect = true
    statutCo.style.display = "block";
    statutNco.style.display = "none";
    tentatives += 1
}

function tryToConnect(){
    if (canConnect == false){
        tentatives += 1
    }
    else {
        if ('alt' in window) {
            alt.emit('userConnected')
        }
    }
}