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
// document.querySelector("#break").style.display = "none";

// const countdownEl = document.querySelector("#countdown");
// console.log(countdownEl);

// const timer = document.querySelector(".timer");
// console.log(timer);

// const startingMinutes = 0.1;
// let time = startingMinutes * 60;

// function updateCountdown() {
//   const interval = setInterval(() => {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     countdownEl.innerHTML = `${minutes} : ${seconds}`;
//     time--;

//     if (time < 0) {
//       clearInterval(interval);
//       console.log("end of study session!");
//       //document.querySelector("#countdown").style.display = "none";
//       //document.querySelector("#break").style.display = "block";
//       //updateBreak();
//     }
//   }, 1000);
// }

// let breakMinutes = 5;
// let breaktime = breakMinutes * 60;

// const breakcountdownEl = document.querySelector("#break");
// console.log(breakcountdownEl);

// const breaktimer = document.querySelector(".timer");
// console.log(breaktimer);

// // timer.addEventListener("click", updateBreak);

// function updateBreak() {
//   const breakinterval = setInterval(() => {
//     const minutes = Math.floor(time / 60);
//     let seconds = breaktime % 60;

//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     breakcountdownEl.innerHTML = `${minutes} : ${seconds}`;
//     breaktime--;

//     if (breaktime < 0) {
//       clearInterval(breakinterval);
//       console.log("end of break!");
//       document.querySelector("#break").style.display = "none";
//       document.querySelector("#countdown").style.display = "block";

//       // updateCountdown();
//     }
//   }, 1000);
// }
const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: document.querySelector(".timer__btn--control"),
      reset: document.querySelector(".timer__btn--reset"),
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });

    this.el.reset.addEventListener("click", () => {
      const inputMinutes = prompt("Enter number of minutes:");

      if (inputMinutes < 60) {
        this.stop();
        this.remainingSeconds = inputMinutes * 60;
        this.updateInterfaceTime();
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `<span class="material-icons"><img src = "play-button.PNG"></span>`;
      this.el.control.classList.add("timer__btn--start");
      this.el.control.classList.remove("timer__btn--stop");
    } else {
      this.el.control.innerHTML = `<span class="material-icons"><img src = "stop-button.PNG"></span>`;

      this.el.control.classList.add("timer__btn--stop");
      this.el.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
        myAudio.pause();
      }
    }, 1000);

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateInterfaceControls();
  }

  static getHTML() {
    return `
			<span class="timer__part timer__part--minutes">00</span>
			<span class="timer__part">:</span>
			<span class="timer__part timer__part--seconds">00</span>
			
		`;
  }
}

new Timer(document.querySelector(".timer"));

//setting up audio

//setting up the control buttons

const playPauseBtn = document.querySelector("#play-pause-button");
console.log(playPauseBtn);

const playImg = document.querySelector("#play-button-img");
console.log(playImg);

playPauseBtn.addEventListener("click", togglePlay);
// playPauseBtn.addEventListener("click", updateCountdown);

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

// skipBtn.addEventListener("click", toggleSkip);

// function toggleSkip() {
//   updateBreak();
// }

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
