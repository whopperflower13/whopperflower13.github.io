const viewBtn = document.querySelector("#view-btn")
console.log(viewBtn)

viewBtn.addEventListener("click", openLink('./mail/mail.htmls'))


// const playImg = document.querySelector("#play-button-img");
// console.log(playImg);

// playPauseBtn.addEventListener("click", togglePlay);
// // playPauseBtn.addEventListener("click", updateCountdown);

// function togglePlay() {
//   if (myAudio.paused || myAudio.ended) {
//     myAudio.play();
//     playImg.src = "stop-button.PNG";
//   } else {
//     myAudio.pause();
//     playImg.src = "play-button.PNG";
//   }
// }