let secretNumber = Math.ceil(1 + Math.random() * 99);

while (true) {
    let num = prompt("Please enter a number you predict: ");
  if (parseInt(num) == secretNumber) {
    console.log("right");
    break;
  } else {
    if(parseInt(num) < secretNumber) {
        console.log("secret number is smaller than number you predict");

    }else{
        console.log("secret number is bigger than number you predict");

    }
  }
}


