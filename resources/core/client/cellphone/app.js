var dataloaded = false;
var playerInventory = [];

// Cellphone Closing
window.addEventListener('keydown', e => {
  if (e.key === 'Backspace') {
    dataloaded = false;
    if ('alt' in window) {
      alt.emit('close:Phone')
    }
  }
});

// Database Loading
alt.on('inventaire', inventaire =>{
  if ( dataloaded == false){
    //console.log(inventaire); // Debuger
    dataloaded = true;
    playerInventory = inventaire;
    
    for (let i = 0; i < playerInventory.length; i++){ 
      itemSrc = playerInventory[i][1].src
      item = playerInventory[i][1]
      //console.log(itemSrc)  // Debuger
      document.getElementById(String(i)).src = itemSrc;
    };
  };
});

// Events
  // Page Switching
function pageSwitch(pageFrom, pageTo) {
  //console.log(pageFrom) //Debuger
  document.getElementById(pageFrom.toString()).style.display ="none";
  document.getElementById(pageTo.toString()).style.display ="inline-grid";
};