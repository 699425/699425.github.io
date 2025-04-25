// remix from Week 8 first half
var fireworks = [];
var startButton;
var stopButton;

function createEmbers(){
    var originx = random(width);
    var originy = random(height);
    for(var i = 0; i < 30; i++){
        var ember = {
            x: originx,
            y: originy,
            xspeed: random(-5,5),
            yspeed: random(-4,4),
            colour: color(random(0,255), random(0,255), random(0,255)),
            weight: random(2,12),
            shape: random(0,1) > 0.5 ? 'circle' : 'square',
            draw: function(){
                //stroke
                strokeWeight(this.weight);
                stroke(this.colour);
                if(this.shape === 'circle'){
                    ellipse(this.x, this.y, this.weight, this.weight);
                } else {
                    square(this.x, this.y, this.weight);
                }
                this.update();
            },
           
            update: function(){
                this.x += this.xspeed;
                this.y += this.yspeed;
            },
        };
        fireworks.push(ember);
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    // remix from https://p5js.org/reference/p5/noLoop/
    startButton = createButton('▶');
    startButton.position(0, 0);
    startButton.size(100, 40);
    stopButton = createButton('◾');
    stopButton.position(100, 0);
    stopButton.size(100, 40);

    startButton.mousePressed(loop);
    stopButton.mousePressed(noLoop);
    // end of remix
    createEmbers();
}

function draw(){
    background('skyblue');
    strokeWeight(1);
    for(ember of fireworks){
        ember.draw();
    }
    if(frameCount % 20 === 0){
        createEmbers();
    }
}
//end of remix