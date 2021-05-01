const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력

const str = input.shift();
let len = str.length - 1;
let count = 0;

while (len >= 0) {
  if (str[len] === "=") {
    //3글자
    if (len - 2 >= 0) {
      if ("dz=" === str.slice(len - 2, len + 1)) {
        count++;
        len -= 3;
      } else {
        count++;
        len -= 2;
      }
    } else {
      //2글자
      count++;
      len -= 2;
    }
  } else if (str[len] === "-") {
    count++;
    len -= 2;
  } else if (str[len] === "j") {
    if (len - 1 >= 0) {
      if (str[len - 1] === "l" || str[len - 1] === "n") {
        count++;
        len -= 2;
      } else {
        count++;
        len -= 1;
      }
    } else {
      count++;
      len -= 1;
    }
  } else {
    count++;
    len--;
  }
}
console.log(count);
