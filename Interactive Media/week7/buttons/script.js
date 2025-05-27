// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click", myFunction);
// //execute myfunction on click
// let clickCount = 0;
// const count = document.querySelector("#count");

// function myFunction() {
//   console.log("hey did you click me? 0w0");
//   clickCount++;
//   count.textCount = clickCount;
// }

const boxContainer = document.querySelector(".box-container");
console.log(boxContainer);

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);
toggleButton.addEventListener("click", toggleMe);

function toggleMe() {
  console.log("toggle button is clicked");
  boxContainer.classList.toggle("row-reverse");
}

const addButton = document.querySelector("#add-button");
console.log(addButton);
addButton.addEventListener("click", addMe);

let count = 0;
function addMe() {
  console.log("add button is clicked");
  if (count % 2 === 0) {
    boxContainer.innerHTML += `<div class="box purple-box">`;
  } else {
    boxContainer.innerHTML += `<div class="box coral-box">`;
  }

  count++;
  //   boxContainer.innerHTML += `<div class="box purple-box"></div>
  //   <div class="box coral-box"></div>`;
}

const removeButton = document.querySelector("#remove-button");
console.log(removeButton);
removeButton.addEventListener("click", removeMe);

function removeMe() {
  //

  let lastBox = boxContainer.lastElementChild;
  //specify which box to delete
  console.log(lastBox);
  if (lastBox) {
    lastBox.remove();
  }
  count--;
}

boxContainer.addEventListener("mouseenter", dropMe);
boxContainer.addEventListener("mouseout", pickMe);

function dropMe() {
  boxContainer.classList.add("drop");
}

function pickMe() {
  boxContainer.classList.remove("drop");
}
