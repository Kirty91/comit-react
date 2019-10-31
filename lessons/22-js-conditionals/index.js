alert("Enter two numbers to see if the first is greater than the second");
let firstNum = prompt('enter the first number', '');
let secondNum = prompt('enter the second number', '');
if (firstNum < secondNum) {
  alert( `${firstNum} is less than ${secondNum}`);
} else if (firstNum > secondNum) {
    alert( `${firstNum} is greater than ${secondNum}`);
} else {
    alert( `${firstNum} is same as ${secondNum}`);
}