//set up timer

const timer = document.querySelector(".timer");
console.log(timer);

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
  } else {
    myAudio.pause();
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
