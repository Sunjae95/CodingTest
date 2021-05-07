const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("input").toString().trim().split("\r\n"); //콘솔입력
let T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
  const p = input.shift();
  const n = input.shift();
  const xn = input.shift();
  //배열 정의
  let queue =
    xn.slice(1, xn.length - 1).length !== 0
      ? xn
          .slice(1, xn.length - 1)
          .split(",")
          .map((v) => parseInt(v))
      : [];
  let point = 0;
  //R D에 따른 point 변화
  for (let j = 0; j < p.length; j++) {
    if (p[j] === "R") {
      //Reverse
      if (queue.length === 0) {
        point = 0;
      } else {
        point = point === 0 ? queue.length - 1 : 0;
      }
    } else {
      //Delete
      if (queue.length !== 0) {
        if (point === 0) {
          //맨앞
          queue.shift();
        } else {
          //맨뒤
          queue.pop();
          point--;
        }
      } else {
        //queue에 인덱스가 없으면 error처리
        queue = "error";
        break;
      }
    }
  }

  //결과 출력
  if (queue === "error") {
    console.log(queue);
  } else {
    let result = "";
    if (point === 0) {
      result = "[" + queue.join(",") + "]";
      console.log(result);
    } else {
      result = "[" + queue.reverse().join(",") + "]";
      console.log(result);
    }
  }
}

// 출력할때 배열로 하면 안됨 인덱스사이에 띄어쓰기가있기때문에 join으로 string으로 만들어줘서 출력
