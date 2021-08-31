let actualpage = 1

window.onload = loadFirstPage;

function loadFirstPage(){
  document.getElementById(actualpage).style.display = "block"
}



function nextPage(){
  document.getElementById(actualpage.toString()).style.display = "none"
  actualpage ++
  document.getElementById(actualpage.toString()).style.display = "block"
  console.log(actualpage)
}