function openInventory(event){
    if ( 'alt' in window) {
        console.log("Le joueur ouvre l'inventaire ")
        alt.emit('openInventory', "x" )
    }
    else {
      console.log("The player try to open the inventory")
    }
}