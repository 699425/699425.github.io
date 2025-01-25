var img;

function preload(){
    img = loadImage("https://i.imgur.com/5hZG2ZM.png");
}
function setup(){
    createCanvas(400, 400);
    image(img, 0, 0);
}