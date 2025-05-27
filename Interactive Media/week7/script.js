//Audio Syntax
const notify = document.querySelector("#notify");
console.log(notify);
//call audio source id

const playButton = document.querySelector("#play-button");
console.log(playButton);
playButton.addEventListener("click", playAudio);
//add eventlistener

function playAudio() {
  notify.play();
}
//play on click

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  notify.pause();
}

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);
popButton.addEventListener("click", popAudio);

function popAudio() {
  popSound.play();
}
