const ball = document.querySelector(".ball");
console.log(ball);

//----------------

//let us work on the move or translate logic

const outer = document.querySelector(".outer");
console.log(outer);
let outerWidth = outer.clientWidth / 2 - 60;
console.log(outerWidth);

const moveButton = document.querySelector("#move-button");
console.log(moveButton);
moveButton.addEventListener("click", moveBall);

let distance = 0;
function moveBall() {
  if (distance < outerWidth) {
    distance += 30;
    console.log(distance);
    transformBall();
    //ball.style.transform = `translateX(${distance}px)`;
  }
}

//----------

//lets work on the rotate logic

const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("click", rotateBall);

let angle = 0;
function rotateBall() {
  angle += 45;
  console.log(angle);
  transformBall();
  //ball.style.transform = `rotate(${angle}deg)`;
}

//---------

//lets work on the scale logic

const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
scaleButton.addEventListener("click", scaleBall);

let point = 1;
function scaleBall() {
  if (point > 0.22) {
    point -= 0.1;
    console.log(point);
    transformBall();
    //ball.style.transform = `scale(${point})`;
  }
}

//universal transform function
function transformBall() {
  ball.style.transform = `translateX(${distance}px) rotate(${angle}deg) scale(${point})`;
}

//---------

//lets work on the reset logic
const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", resetBall);
function resetBall() {
  distance = 0;
  angle = 0;
  point = 1;
  transformBall();
}
