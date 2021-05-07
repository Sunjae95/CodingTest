const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("input").toString().trim().split("\r\n"); //콘솔입력

for (let i = 0; i < input.length - 1; i++) {
  const stack = [];
  let result = true;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(" || input[i][j] === "[") {
      const tmp = input[i][j] === "(" ? "(" : "[";
      stack.push(tmp);
    } else if (input[i][j] === ")" || input[i][j] === "]") {
      const tmp = input[i][j] === ")" ? "(" : "[";
      if (stack[stack.length - 1] !== tmp) {
        result = !result;
        break;
      }
      stack.pop();
    }
  }
  if (stack.length === 0) {
    if (result) {
      console.log("yes");
    } else {
      console.log("no");
    }
  } else {
    console.log("no");
  }
}

// 괄호가 남아있는경우를 추가해줌