window.onload = function() {
  slider = document.getElementById("quantity");
  output = document.getElementById("valeur");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }







}



