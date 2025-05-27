// console.log("Welcome");

// let count = 10;
// console.log(count);
// // const name = prompt("what is your name?");
// // console.log("Hello", name);

// //camel
// const myName = "Minami";
// const myCity = "Tokyo";
// console.log(myName, "lives in", myCity);

// count = 20;
// console.log(count);

// {
//   let b = 30;
//   console.log(b);
// }

// let isItRaining = false;
// console.log(isItRaining);
// let isitOARTClass = true;
// console.log(isitOARTClass);

// const studentRecord = {
//   name: "Minami",
//   id: 4026078,
//   class: "OART1013",
//   amIScienceStudent: false,
//   amIDesignStudent: true,
// };

// console.log(studentRecord.name);
// console.log(studentRecord.name, "is a", studentRecord.class, "student");

// let studentNames = ["Minami", "Anmi", "Aiji"];
// console.log(studentNames);
// console.log(studentNames[1]);

// if (isItRaining === true) {
//   console.log("Please bring umbrella");
// } else {
//   console.log("No need for umbrella");
// }

// if (studentRecord.amIDesignStudent === true) {
//   console.log("welcome to the class");
// } else {
//   console.log("sorry you are in the wrong class");
// }

// let myGrade = 60;
// if (myGrade > 80) {
//   console.log("you got an HD");
// } else if (myGrade < 90 && myGrade >= 70) {
//   console.log("You got a D");
// } else if (myGrade < 70 && myGrade >= 50) {
//   console.log("You got a C");
// } else if (myGrade < 50 && myGrade >= 30) {
//   console.log("You got a P");
// } else {
//   console.log("You got F");
// }

console.log("Hello Minami");
console.log("Hello Anmi");
console.log("Hello Aiji");
console.log("Hello Ichiyo");
console.log("Hello Souffle");

let names = [
  "Minami",
  "Anmi",
  "Aiji",
  "Ichiyo",
  "Souffle",
  "Tulle",
  "Eve",
  "Nanako",
];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

let shoppingCart = [
  //array
  { name: "T-shirt", price: 20 }, //object
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log("your shopping total is", total);

let sum = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("intermediate sum", sum);
}

console.log("your shopping sum is", sum);

shoppingCart.forEach(calcuateTotal);
sum = 0;
function calcuateTotal(item) {
  sum = sum + item.price;
  console.log(item.price);
}
console.log("your shopping sum is", sum);
