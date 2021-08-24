/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as sm from 'simplymongo';
import './chat';

var newShape = new alt.ColshapeCylinder(-53.8,-1213,28.6,2,2);
newShape.name = "test";


alt.on('entityEnterColshape', (colshape, entity) => {
  if (colshape.name == undefined) {
    return;
  }
  if (colshape.name == "test") {
    console.log("Un joueur entre dans la zone de test")
  }
  
});

alt.on('entityLeaveColshape', (colshape, entity) => {

});