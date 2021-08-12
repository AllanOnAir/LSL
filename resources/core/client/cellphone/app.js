var dataloaded = false;
var playerInventory = [];

//alt.on('inventaire', inventaire =>{
//  //console.log(inventaire)
//  setInventory(inventaire);
//  playerInventory = inventaire
//})
//
//function setInventory(inventaire){ playerInventory = inventaire };



window.addEventListener('keydown', e => {
  if (e.key === 'Backspace') {
    dataloaded = false;
    if ('alt' in window) {
      alt.emit('close:Phone')
    }
  }
});


alt.on('inventaire', inventaire =>{
  if ( dataloaded == false){
    //setInventory(inventaire);
    dataloaded = true;
    console.log(inventaire);


    playerInventory = inventaire;
    
      for (let i = 0; i < playerInventory.length; i++){
        itemSrc = playerInventory[i][1].src
        item = playerInventory[i][1]

        //console.log(itemSrc)
        document.getElementById(String(i)).src = itemSrc;
      };

    for (let i = 0; i < playerInventory.length; i++){ 
      itemSrc = playerInventory[i][1].src
      item = playerInventory[i][1]
      console.log(itemSrc)
      document.getElementById(String(i)).src = itemSrc;
    };





  };
});

//function setInventory(inventaire){ 
//  playerInventory = inventaire;
//  console.log(playerInventory)
//  return playerInventory
//};
//
//console.log(playerInventory)
//window.onload = function () {
//  for (let i = 0; i < playerInventory.length; i++){
//    itemSrc = playerInventory[i][1].src
//    item = playerInventory[i][1]
//
//    
//    console.log(itemSrc)
//    document.getElementById(String(i)).src = itemSrc;
//}};