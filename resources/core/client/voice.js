/// <reference types="@altv/types-natives" />
/// <reference types="@altv/types-client" />
"use strict";
import * as alt from "alt-client";
import * as native from "natives";

alt.on("keyup", (keycode) => {
  switch (keycode) {
    case 113: // Key: F2
      alt.emitServer("voice:rangeChanged");
      break;
  }
});
