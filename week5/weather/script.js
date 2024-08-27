function checkweather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  //fetch item where id is temp
  console.log(temp.value);
  if (temp.value >= 40) {
    console.log("It is burning hot");
    body.style.backgroundColor = "orange";
    outer.style.borderColor = "red";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("It is very sunny");
    body.style.backgroundColor = "yellow";
    outer.style.borderColor = "pink";
  }
  if (temp.value < 30 && temp.value >= 15) {
    console.log("It is a pleasant weather");
    body.style.backgroundColor = "lightgreen";
    outer.style.borderColor = "yellow";
  }
  if (temp.value < 15) {
    console.log("It is freezing cold");
    body.style.backgroundColor = "lightblue";
    outer.style.borderColor = "grey";
  }
}
