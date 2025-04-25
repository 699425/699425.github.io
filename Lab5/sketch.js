var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var highscore = 10;

function preload(){
}

function setup() {
    createCanvas(600, 400);
    var resetButton = createButton('Reset');
    resetButton.mousePressed(function(){
        clearStorage();
        highscore = 10;
        score = 0;
        highscorename = 'CCC';
    });
}

function draw() {
	if(screen == 0){
        startScreen()
    }else if(screen == 1){
  	    gameOn()
    }else if(screen==2){
  	    endScreen()
    }	
}

function startScreen(){
	background(0)
	fill(255)
	textAlign(CENTER);
	text('WELCOME TO MY CATCHING GAME', width / 2, height / 2)
	text('click to start', width / 2, height / 2 + 20);
	reset();
}

function gameOn(){
	background("pink")
    text("score = " + score, 30,20)
    text("highscore = " + highscore, 470,20)
    textAlign(CENTER);
    text('USE THE MOUSE POINTER TO CATCH THE FALLING BALLS IN THE BASKET',300,50);
    fill("red");
    ellipse(x,y,20,20)
    fill("blue");
    rectMode(CENTER)
    rect(mouseX,height-10,50,30)
	y+= speed;
    if(y>height){
  	    screen =2
	}
    if(y>height-10 & x>mouseX-20 & x<mouseX+20){
  	    y=-20
        speed+=.5
        score+= 1
        if(score > highscore){
    	    highscore = score
            storeItem('highscore', highscore);
        }
    }
	if(y==-20){
  	    x= random(20,width-20);
    }
}

function endScreen(){
	background(0)
	textAlign(CENTER);
    fill(255)
	text('GAME OVER', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 20)
    if (score === highscore){
    	text("NEW HIGHSCORE!", width / 2, height / 2 + 40)
    }else{
        text("HIGHSCORE = " + highscore, width / 2, height / 2 + 40)
    }
		text('click to play again', width / 2, height / 2 + 60);
}

function mousePressed(){
	if(screen==0){
  	    screen=1
    }else if(screen==2){
  	    screen=0
    }
}

function reset(){
	score=0;
  	speed=2;
  	y=-20;
}
