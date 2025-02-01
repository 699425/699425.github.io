

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('pink');
    
    for(var i = 0; i< 1000; i++){
        fill('aquamarine')
        rect((i*10)%width,(i*10)%height,10,10)
        fill('green')
        rect((i*20)%width,(i*10)%height,10,10,25)
        fill('skyblue')
        rect((i*30)%width,(i*10)%height,10,10,15)
    }
    fill('gold');
    stroke('black')
    if(mouseX < 400){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX,mouseY,50,50,25);
    }
}