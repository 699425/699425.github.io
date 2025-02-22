var text;
var textInput;
var colourPicker;
var font;
var textSize;
var fontSize;
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
    colourPicker = createColorPicker('black');
    textSize = createSlider(1,500,5,1);
    fontSize = createSlider(1,500,24,1);
    background('pink');
    
    
    // remix from https://p5js.org/reference/p5/createRadio/
    font = createRadio();
    font.position(10, 440);
    font.class('p5-radio');
    font.size(200);

    font.option('Arial');
    font.option('Verdana');
    font.option('Georgia');
    font.option('Times New Roman');
    font.option('Courier New');
    font.option('Comic Sans MS');
    font.option('Impact');
    font.option('Lucida Console');
    font.selected('Arial');
    
    // end of remix

    // remix of https://p5js.org/reference/p5.Element/draggable/
    text = createDiv('Type here');
    text.position(10, 10);
    text.style('font-size', '24px');

    text.draggable();

    textInput = createInput('Type here'); // created input box to type text with a starter text of 'Type here'
    textInput.position(400, 410);
    textInput.size(200, 100);
    textInput.style('font-size', '14px');
    textInput.style('font-family', 'Arial');
    textInput.style('color', 'black');
    textInput.style('background', 'white');
    textInput.style('border', '1px solid black');

    textInput.input(handleInput);
    
    // end of remix
}

function draw(){
    text.style('color', colourPicker.value()); // created color picker to change the color of the text
    text.style('font-size', fontSize.value() + 'px'); // created font size slider to change the size of the text
    text.size(textSize.value()); // created text size slider to change the size of the space for the text
    text.style('font-family', font.value()); // created radio button to change the font of the text
}


function handleInput() {
    text.html(textInput.value()); // still part of the draggable turtoial to change text to the text that is inputed
}