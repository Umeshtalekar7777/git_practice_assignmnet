// check prime problem

let num = 7;

flag = true;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    flag = false;
  }
}
if (flag == true) {
  console.log(i, " Is a prime number");
} else {
  console.log(i, " Is not a prime number");
}

// check palindrome problem

let str = "masai";

let bag = "";
for (let j = str.length - 1; j >= 0; j--) {
  bag += str[j];
}
if (bag == str) {
  console.log("string is a palindrome");
} else {
  console.log("string is not a palindrome");
}
