var colourPicker;
var strokeWeightSlider;
var bgColourPicker;
var myRadio;
var style = document.createElement('style');
style.innerHTML = `
.p5-radio label {
   display: flex;
   align-items: center;
 }
 .p5-radio input {
   margin-right: 5px;
}`;
document.head.appendChild(style);

function setup(){
    createCanvas(windowWidth,400);
    colourPicker = createColorPicker('deeppink');
    
    strokeWeightSlider = createSlider(1,10,5,1);

    var bgColorButton = createButton('Refresh Background');
    bgColorButton.mousePressed(repaint);
    myRadio = createRadio();
    myRadio.position(0,450);
    myRadio.class('p5-radio');
    myRadio.size(60);

    myRadio.option('white');
    myRadio.option('aliceblue');
    myRadio.option('cyan');
    myRadio.option('antiquewhite');
    myRadio.option('green');
    myRadio.option('grey');
    myRadio.option('black');
    myRadio.option('blueviolet');
    myRadio.option('cadetblue');
    myRadio.selected('white');
    bgColor = myRadio.value();
    background(myRadio.value());

}

function draw(){
    
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());
    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
    
   }

function repaint(){
    background(myRadio.value());
}