
let doodler;
let gap;
let platforms = [];

let score;
let bg;
let doodlerLeft;
let doodlerRight;
let platformImg;

function setup() {
    createCanvas(400, 600);
    platforms = [];
    score = 0;
    bg = loadImage('../Sprites/background.png'); // add this to load the background
    doodlerLeft = loadImage('../Sprites/leftPlayer.png');
    doodlerRight = loadImage('../Sprites/rightPlayer.png');
    doodler = new Doodler(doodlerLeft, doodlerRight);
    platformImg = loadImage('../Sprites/platform.png');

    let platformCount = 5;
    gap = height / platformCount;
    for (let i = 1; i < 10; i++) {
        platforms.push(new Platform(random(width), (height * 1.5) - i * gap, platformImg))
    }

}

function draw() {
    image(bg, 0, 0);
    if (doodler.velocity > 10) {
        noLoop();
        gameOver();
    } else {
        translate(0, height / 2 - doodler.y);
        push();
        fill(0)
        textSize(30);
        textAlign(CENTER);
        text(score, width / 2, doodler.y - 150);
        pop();

        doodler.draw();
        doodler.update(platforms);
        for (let platform of platforms) {
            platform.draw();
        }

        // creer plus de platformes quad le joueur monte
        if (doodler.y < platforms[platforms.length - 1].y + 200) {
            platforms.push(new Platform(random(width), platforms[platforms.length - 1].y - gap, platformImg));
        }

        if (platforms[0].y > doodler.y + 400) {
            platforms.splice(0, 1);
            score++;
        }


    }


}

function gameOver() {
    textSize(30);
    image(bg, 0, 0);
    textAlign(CENTER);
    text(`You scored ${score}`, width / 2, height / 2);
    textSize(25);
    text(`Hit space to play again`, width / 2, height / 2 + 100);
}


function keyPressed() {
    if (key == ' ') {
        setup();
        loop();
    }
}