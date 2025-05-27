function checkGrade() {
    const a1 = document.querySelector("#answer1");
    console.log(a1.value);
    const a2 = document.querySelector("#answer2");
    console.log(a2.value);
    // let total = parseFloat(a1.value) + parseFloat(a2.value);
    let a1Value = parseFloat(a1.value);
    let a2Value = parseFloat(a2.value);
    let sum = calculateTotal(a1Value, a2Value);
    console.log("sum is", sum);
    sendReport(sum);
}

function calculateTotal (a, b) 
{
    let total = a + b;
    return total;
}

function sendReport(score){
    const report = document.querySelector("#report");
    console.log(report);
    if(score > 30){
        console.log("you got HD");
        report.textContent = "you got HD";
    }else if (score > 20 && score <= 30){
        console.log("You got a D");
        report.textContent = "you got a D";
    }
}

const para = document.querySelector("p");
console.log(para);

const allPara = document.querySelectorAll("p");
console.log(allPara);

const h1 = document.querySelector("h1");
console.log(h1.textContent);
h1.classList.add("red-heading");
h1.classList.add("blue-heading");
h1.classList.remove("blue-heading");

const question1 = document.querySelector("#question1");
console.log(question1.textContent);
question1.textContent = "what is as1 score?";

const question2 = document.querySelector("#question2");
console.log(question2.textContent);
question2.textContent = "what is as2 score?";

// const abcd = document.querySelector(".abcd");
// console.log(abcd);

// const allAbcd = document.querySelectorAll(".abcd");
// console.log(allAbcd);

// const report = document.querySelector("#report");
// console.log(report);

const myCat = document.querySelector("#my-cat");
console.log(myCat);
// myCat.classList.add("round");

function toggleMe(){
    myCat.classList.toggle("round");
    //toggle adds and removes class change content color shape styling etc 
}

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
console.log(header.textContent);
header.textContent = "my cat 2";
let personality = "cutest";
header.innerHTML += `<p class="blue-heading" > is the ${personality} </p>
<p class="red-heading" > of them all! </p>`;
//innerhtml adds content from javascript
//` backtick ads script without issues
//+= adds on top of the previous content