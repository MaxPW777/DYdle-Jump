blockCoords = []

function randomCoord() {
    coord1 = Math.floor(Math.random() * 10)
    coord2 = Math.floor(Math.random() * 10)
  return [coord1, coord2]
}

generateBlock = function() {
    blockCoords.push(randomCoord())
}

for (let i = 0; i < 10; i++) {
    generateBlock()
}

// create blocks using blockCoords coordinates in html
for (let i = 0; i < blockCoords.length; i++) {
    var block =  document.createElement("div")
    block.style.left = blockCoords[i][0] * 50 + 560 + "px"
    block.style.top = blockCoords[i][1] * 70 + "px"
    block.classList.add("block")
    document.getElementById("Game").appendChild(block)
    console.log(block);
}

