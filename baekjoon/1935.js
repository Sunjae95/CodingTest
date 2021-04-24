const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split("");
const stack = [];

arr.forEach((element) => {
  if (element === "+") {
    const tmp = stack.pop();
    stack[stack.length - 1] = stack[stack.length - 1] + tmp;
  } else if (element === "-") {
    const tmp = stack.pop();
    stack[stack.length - 1] = stack[stack.length - 1] - tmp;
  } else if (element === "/") {
    const tmp = stack.pop();
    stack[stack.length - 1] = stack[stack.length - 1] / tmp;
  } else if (element === "*") {
    const tmp = stack.pop();
    stack[stack.length - 1] = stack[stack.length - 1] * tmp;
  } else {
    element = +input[element.charCodeAt(0) - 63];
    stack.push(element);
  }
});
console.log(stack[0].toFixed(2));
 
// 각 index가 부호가 아니라면 아스키코드 참조해 숫자로 변환 후 stack에 push
// 사칙연산이라면 stack의 마지막 index(pop해줌)와 마지막 전 인덱스를 주어진 사칙연산을 통해 계산후 값을 바꿔줌
// 결국 stack은 index가 1개만 남기 때문에 소수점 두째 자리까지 계산하여 return