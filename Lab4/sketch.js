var music;
var cabage;

function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    cabage = loadImage('Edward-Weston-Cabage-Leaf-1024x838.jpg');
    music = createAudio('Happy.mp3');
    music.volume(0.5);
}
function draw(){
    background('black');
    image(cabage, windowWidth/2, windowHeight/2, 200, 200);
}

function keyPressed(){
    if(keyCode === 32){ // space bar
        music.play();
    }
    if(keyCode === 27){ // escape key
        music.stop();
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}