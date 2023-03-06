let stopButton = document.getElementById('stopButton')
let slowButton = document.getElementById('slowButton')
let goButton = document.getElementById('goButton')
let redBulb = document.getElementById('stopLight')
let yellowBulb = document.getElementById('slowLight')
let greenBulb = document.getElementById('goLight')
let redCounter = 0
let yellowCounter = 0
let greenCounter = 0


goButton.onclick = function() {clickGoButton()};
slowButton.onclick = function() {clickSlowButton()};
stopButton.onclick = function() {clickStopButton()};
document.getElementsByClassName('button').onmouseenter = function() {mouseStateButton()}
//stopButton.onmouseenter = function() {mouseStateButton()}

function clickGoButton() {
  greenCounter++
greenBulb.classList.toggle("go")
};


function clickSlowButton() {
  yellowCounter++
  if(yellowCounter % 2 !== 0){
    yellowBulb.style.backgroundColor = 'yellow'
  }else {
    yellowBulb.style.backgroundColor = 'black'
  }
};


function clickStopButton() {
  redCounter++
  if(redCounter % 2 !== 0){
    redBulb.style.backgroundColor = 'red'
  }else {
    redBulb.style.backgroundColor = 'black'
  }
};

function mouseStateButton(){
if(document.getElementById('stopButton')){
  console.log()
}
}
