var playername = "Spongebob";
var screen = 0;
var word;
var wordList;
var playerNameInput;
const guesses = [""];
var guess = "";
var guessCount = 0;
const keyboard = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
const absent = new Set();
const misplaced = new Set();
const exactMatch = new Set();


function preload(){
    wordList = loadStrings("wordlist.txt")
}

function setup(){
    createCanvas(600,600);
    textAlign(CENTER);
    playerNameInput = createInput(playername);
    playerNameInput.position(width / 2 - 95, height / 2 + 20);
    noLoop();
    
}
function draw(){
    if(screen == 0){
        start();
    }
    if(screen == 1){
        gameOn();
    }
    if(screen == 2){
        end();
    }	
}
function gameOn(){
    background(90);
    for (var i = 0; i < 6; i++){
        for(var j = 0; j < 5; j++){
            const charGuessed = guessCount >= i && guesses[i].length > j;
            const guessChar = charGuessed ? guesses[i][j] : null;
            if (guessCount > i) {
                if (word[j] === guessChar) {
                  fill("green");
                } else if (misplaced.has(guessChar)) {
                  fill("yellow");
                } else {
                  fill(60);
                }
            } else {
                fill(0);
            }
            stroke(80);
            rect(
                width * (0.1 + j * 0.16),
                height * (0.05 + 0.1 * i),
                width * 0.16,
                height * 0.1,
                width * 0.02
            );
            if (charGuessed) {
                fill(255);
                text(
                  guessChar,
                  width * (0.1 + j * 0.16),
                  height * (0.1 + 0.1 * i),
                  width * 0.16,
                  height * 0.1
                );
            }
        }
        for (let k = 0; k < 3; k++) {
            const rowLen = keyboard[k].length;
            for (let b = 0; b < rowLen; b++) {
                const keyChar = keyboard[k][b];
                if (exactMatch.has(keyChar)) {
                    fill("green");
                } else if (misplaced.has(keyChar)) {
                    fill("yellow");
                } else if (absent.has(keyChar)) {
                    fill(60);
                } else {
                    fill(120);
                }
                rect(
                    b * (width / rowLen),
                    height * 0.7 + k * height * 0.1,
                    width / rowLen,
                    height * 0.1
                );
                fill(255);
                text(
                    keyChar,
                    b * (width / rowLen),
                    height * 0.7 + k * height * 0.1 + height * 0.05,
                    width / rowLen,
                    height * 0.1
                );
            }   
        }
    }
}
function keyTyped() {
    if (key.length === 1) guesses[guessCount] += key.toUpperCase();
    redraw();
}
function keyPressed() {
    const charCount = guesses[guessCount].length;
    if (keyCode === BACKSPACE) {
        guesses[guessCount] = guesses[guessCount].slice(0, charCount - 1);
    } else if (keyCode === ENTER && charCount === 5){
        for (let i = 0; i < guesses[guessCount].length; i++) {
            const guessChar = guesses[guessCount][i];
            if (word.includes(guessChar)) {
                if (word[i] === guessChar) {
                    exactMatch.add(guessChar);
                } else {
                    misplaced.add(guessChar);
                }
            } else {
                absent.add(guessChar);
            }
        }
        
        guess = guesses[guessCount];
        guessCount++;
        guesses.push("");
        if (guess === word) {
            screen = 2;
            end();
        };
    } 
    redraw();
    if (guessCount === 6) {
        screen = 2;
        end();
    };
}
function start(){
    background(100)
    fill(0)
    textAlign(CENTER);
    textSize(50);
    text('Wordle', width / 2-10, height / 2)
    textSize(20);
    playername = playerNameInput.value();
    playerNameInput.show();
    
    var startButton = createButton('Start Game');
    startButton.position(width / 2 - 50, height / 2 + 60);
    startButton.show();
    
    startButton.mousePressed(function(){
        playerNameInput.hide();
        startButton.hide();
        reset();
    });
    
}
function end(){
    background(100);
    fill(0)
    textAlign(CENTER);
    textSize(20);
    text("Game Over, " + playername, width / 2, height / 2);
    if (guess === word){
        text("Congratulations " + playername + "! You have Guessed the Word, " +word, width / 2, height / 2 + 20);
    }else{ 
        text("Sorry" + playername + "! The word was " +word, width / 2, height / 2 + 60);
    }

    text("press the button to play again three time until it disappears", width / 2, height / 2 + 100);

    var restartButton = createButton('Play Again');
    restartButton.position(width / 2 - 50, height / 2 + 80);
    restartButton.show();
    restartButton.mousePressed(function(){
        restartButton.hide();
        reset();
    });
}
function reset(){
    word = random(wordList).toUpperCase();
    guessCount = 0;
    for (var i = 0; i <= guesses.length; i++){
        guesses.pop();
    }
    guesses.push("");
    absent.clear();
    misplaced.clear();
    exactMatch.clear();
    guess = "";
    screen = 1;
    gameOn();
}