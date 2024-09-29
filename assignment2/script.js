// //set up timer

// const timer = document.querySelector(".timer");
// console.log(timer);

// //click start display for timer to run
// timer.addEventListener("click", countDownTimer);

// //counter times every second

// function countDownTimer() {
//   secondTimer(12);
//   minTimer(0);
//   console.log(mincounter, ":", counter);

//   if ((mincounter < 0, counter < 0)) {
//     clearInterval(interval);
//     clearInterval(minterval);
//     console.log("end of study!");
//   }
// }

// function secondTimer(seconds) {
//   let counter = seconds;
//   const interval = setInterval(() => {
//     console.log(counter);
//     counter--;

//     if (counter < 10) {
//       console.log("0", counter);
//     }
//     if (counter < 0) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// function minTimer(minutes) {
//   let mincounter = minutes;
//   const minterval = setInterval(() => {
//     console.log(mincounter);
//     mincounter--;

//     if (mincounter < 0) {
//       clearInterval(minterval);
//     }
//   }, 60000);
// }

const startingMinutes = 0.1;
let time = startingMinutes * 60;

const countdownEl = document.querySelector("#countdown");
console.log(countdownEl);

const timer = document.querySelector(".timer");
console.log(timer);

timer.addEventListener("click", updateCountdown);

const interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;

  if (time < 0) {
    clearInterval(interval);
    console.log("end of study session!");
  }
}

timer.addEventListener("00 : 00", switchTimer);

function switchTimer() {}

//setting up audio
const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

//setting up the control buttons

const playPauseBtn = document.querySelector("#play-pause-button");
console.log(playPauseBtn);

const playImg = document.querySelector("#play-button-img");
console.log(playImg);

playPauseBtn.addEventListener("click", togglePlay);

function togglePlay() {
  if (myAudio.paused || myAudio.ended) {
    myAudio.play();
    playImg.src = "stop-button.PNG";
    updateCountdown.resume();
  } else {
    myAudio.pause();
    updateCountdown.pause();
    playImg.src = "play-button.PNG";
  }
}

const skipBtn = document.querySelector("#skip-button");
console.log(skipBtn);

skipBtn.addEventListener("click", toggleSkip);

function toggleSkip() {}

myAudio.addEventListener("volumechange", updateVolume);

function updateVolume() {
  const volume = myAudio.volume;
  console.log("Volume changed:", volume);
}

const lowVolumeBtn = document.querySelector("#low-volume-button");
console.log(lowVolumeBtn);

lowVolumeBtn.addEventListener("click", LowVolume);

function LowVolume() {
  if (myAudio.volume > 0.11) {
    myAudio.volume -= 0.1;
  }
}

const increaseVolumeBtn = document.querySelector("#increase-volume-button");
console.log(increaseVolumeBtn);

increaseVolumeBtn.addEventListener("click", IncreaseVolume);

function IncreaseVolume() {
  if (myAudio.volume < 0.9) {
    myAudio.volume += 0.1;
  }
}
