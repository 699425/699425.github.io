var pinkBall = {
    x:0,
    y:0,
    w:20,
    h:20,
    colour: 'pink',
    xSpeed: 6,
    ySpeed: 1,
    draw: function(){
        fill(this.colour);
        rect(this.x,this.y,this.w,this.h, 25);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var blueBrick = {
    x:400,
    y:500,
    w:50,
    h:30,
    colour: 'blue',
    xSpeed: -2,
    ySpeed: -5,
    draw: function(){
        fill(this.colour);
        rect(this.x,this.y,this.w,this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var purpleBrick = {
    x:0,
    y:0,
    w:30,
    h:30,
    colour: 'purple',
    xSpeed: 5,
    ySpeed: 0.05,
    draw: function(){
        fill(this.colour);
        rect(this.x,this.y,this.w,this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('yellowGreen');
    pinkBall.draw();
    pinkBall.move();
    blueBrick.draw();
    blueBrick.move();
    purpleBrick.draw();
    purpleBrick.move();
}