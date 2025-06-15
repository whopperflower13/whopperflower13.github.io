const viewBtn = document.querySelector("#view-btn")
console.log(viewBtn)

let currentlocation = window.location
console.log(currentlocation)

const openLink = (url) => {
    window.location.href = url
} 

viewBtn.addEventListener("click", () => {
    console.log("button clicked!")

    openLink('./blogpost/ggblog1.html')
})


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