var perso = document.getElementById("perso");
var info = document.getElementById("Info")

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37) {
        perso.style.left = parseInt(perso.style.left) - 10 + "px";
    }
    if (event.keyCode == 39) {
        perso.style.left = parseInt(perso.style.left) + 10 + "px";
    }
    
});
function jump(){
while (perso.style.top < 1000) {
    perso.style.top = parseInt(perso.style.top) + 10 + "px";
}
while (perso.style.top > 0) {
    perso.style.top = parseInt(perso.style.top) - 10 + "px";
}}
info.innerHTML = "Score"
jump();