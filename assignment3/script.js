const dress = document.querySelector("#dress");
console.log(dress);

const dress2 = document.querySelector("#dress2");
console.log(dress2);

const dropBox = document.querySelector("#dropbox");
console.log(dropBox);

let draggedElement = null;

dress.addEventListener("dragstart", startDrag);
function startDrag() {
    console.log("dragging has started");
    draggedElement = dress;
    console.log(draggedElement);
}

dress2.addEventListener("dragstart", startDrag2);
function startDrag2() {
    console.log("dragging has started");
    draggedElement = dress2;
    console.log(draggedElement);
}

dropBox.addEventListener("dragover", endDrag);
function endDrag() {
  event.preventDefault();
  console.log("dragging has stopped");
}

let dropElement = null;

dropBox.addEventListener("drop", handleDrop);
function handleDrop() {
    if(dropElement = true){
        dropBox.innerHTML -= `<img src=${draggedElement.src}>`;
        dropBox.innerHTML += `<img src=${draggedElement.src}>`;
        dropElement = true;
    }else{
        console.log(draggedElement.src);
        // the drop box should detect which item is dropped
            // if (draggedElement = dress) {
            //     console.log("dress is dropped");
            //     draggedElement = null;
            //   }else if(draggedElement = dress2) {
            //     console.log("dress2 is dropped");
            //     draggedElement = null;
            //   }
            dropBox.innerHTML += `<img src=${draggedElement.src}>`;
            dropElement = true;
    }
   
    
}

const resetBtn = document.querySelector("#reset-btn");
console.log(resetBtn);

resetBtn.addEventListener("click", reset);
function reset(){
    dropBox.innerHTML -= `<img src=${draggedElement.src}>`;
    dropElement = false;
}