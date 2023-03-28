var perso = document.getElementById("perso");
var info = document.getElementById("Info")
var alive = true;
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37 && parseInt(perso.style.left) >= 560){
        perso.style.left = parseInt(perso.style.left) - 10 + "px";
    }
    if (event.keyCode == 39 && parseInt(perso.style.left) <= 1010) {
        perso.style.left = parseInt(perso.style.left) + 10 + "px";
    }
    
});


function jump() {
    if (alive) {
        var jumpCount = 0;
        var jumpInterval = setInterval(function() {
            if (jumpCount >= 15 ) {
                clearInterval(jumpInterval);
                var downInterval = setInterval(function() {
                    if (jumpCount <= 0) {
                        clearInterval(downInterval);
                    } else {
                        perso.style.top = parseInt(perso.style.top) + 10 + "px";
                        jumpCount--;
                        checkBlock();
                    }
                }, 20);
            } else {
                perso.style.top = parseInt(perso.style.top) - 10 + "px";
                jumpCount++;
            }
        }, 20);
    }
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 32) {
        jump();
    }
});

info.innerHTML = "Score";

// function to check if player is on a block
var blocks = document.getElementsByClassName("block");
function checkBlock() {
    for (let i = 0; i < blocks.length; i++) {
        if (parseInt(perso.style.left) >= parseInt(blocks[i].style.left) && parseInt(perso.style.left) <= parseInt(blocks[i].style.left) + 50 && parseInt(perso.style.top) >= parseInt(blocks[i].style.top) && parseInt(perso.style.top) <= parseInt(blocks[i].style.top) + 70) {
            jump();
        }
    }
}
