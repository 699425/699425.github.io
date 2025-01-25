var x = 0;
var x2 = 1255;
var y = 0;
var d = day();

function setup(){
    createCanvas(1255,480); 
}

function draw(){
    background('#AAAA44FF');
    fill('0')
    rect(0,250,1255,200);
    fill(0);
    textSize(30);
    text('Assignments:',x2,310)
    text('Assignment 2',x2+200,310)
    text('Assignment 3',x2+400,310)
    text('Assignment 4',x2+600,310)
    text('Assignment 5',x2+800,310)
    text('Final Project',x2+1000,310)
    x2 = x2 + 3;
    x2 = x2 % 1250;
    text('Labs:',x2 + 200,400)
    text('Lab 1',x2 + 300,400)
    text('Lab 2',x2 + 400,400)
    text('Lab 3',x2 + 500,400)
    text('Lab 4',x2 + 600,400)
    text('Lab 5',x2 + 700,400)


    fill('#FF0000');
    circle(x+90, y+20, 25);
    fill('#AA88FF');
    rect(x,y,20,15);
    x = x + 1;
    x = x % 1255; 
    y = y + 2;
    y = (y % 480)<200 ? y : 0;

    noStroke();
    fill(0);

    // Update start and stop angles.
    let biteSize = PI / 16;
    let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
    let endAngle = TWO_PI - startAngle;

    // Draw the arc.
    arc(x2-50,300, 70, 70, startAngle, endAngle, PIE);
    arc(x2+150,390, 100, 100, startAngle, endAngle, PIE);
}