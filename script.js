// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


//Global Variables
var pattern = randomPattern();
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    mistakes = 0;
  
    // hide Start button and reveal Stop button
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
  
    // hide Stop button and reveal Start button
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 300,
  3: 350,
  4: 400,
  5: 450,
  6: 500
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){
    stopTone();
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
    tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);

// fix for audio not playing in browser 
document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

  
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    clueHoldTime -= 10; // speeds up clue playback
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congrats, you won the game!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  
  // debugging fun
    // console.log("btn " + btn);
    // console.log("ptn[GC] " + pattern[guessCounter]);
    // console.log("ptn " + pattern);
    // console.log("GC " + guessCounter);
  
  // guess is correct
  if (btn == pattern[guessCounter]) {
    
    // is our turn over?
    if (guessCounter == progress) {
      
      // are we on the last turn?
      if (progress == (pattern.length - 1)) {
        // on last turn, guess is right, player wins game
        winGame();
      } else {
        // correct pattern but there's more turns
        // increment progress and play next clue sequence
        progress++;
        playClueSequence();
      }
      
    } else {
      // turn isn't over, increment guessCounter
      guessCounter++;
    }
    
  } else {
    // increment number of mistakes and repeat same clue for player
    mistakes++;
    console.log("player made " + mistakes + " mistake(s)");
    playClueSequence();
    
    // lose game if player makes 3 mistakes
    if (mistakes == 3) {
      loseGame();
    }
  }
}

// computer generates random pattern for user to play
function randomPattern() {
  // initialize array
  var arr = [];
  
  // creates random pattern of integers from 1-6 (respective to buttons) for 7 turns
  for (var i = 0; i < 7; i++) {
    // Math.random() generates random float from [0,1), where 1 is exclusive
    // we add 1 to avoid having a 0 in the array, multiply by 6 to have the greatest integer of 1 + 5
    // append to array after random int is generated
    arr.push(Math.floor( 1 + Math.random() * 6));
  }
  console.log(arr);
  // return entire array as part of our pattern
  return arr;
}