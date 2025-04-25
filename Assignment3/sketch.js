var text;
var textInput;
var textSize;
var enter;
var textColur;
function setup(){
    createCanvas(windowWidth, windowHeight);
    background('teal');
    textSize = createSlider(1,250,24,1);
    textSize.position(10, 410);
    text = createDiv('Type here');
    text.position(10, 10);
    text.style('font-size', '24px');
    text.style('color', 'black');    

    textInput = createInput('Type here'); 
    textInput.position(400, 410);
    textInput.size(200, 100);
    enter = createButton('Enter'); 
    enter.position(400, 520);
    
    enter.mousePressed(handleInput);
}

function draw(){
    text.style('font-size', textSize.value() + 'px');
}

function mousePressed() {
    textColur = color(random(255), random(255), random(255));
    text.style('color', textColur); 
}

function handleInput() {
    text.html(textInput.value()); 
}

function keyPressed() {
    if (keyCode === ENTER) {
        text.html(textInput.value()); 
    }
}