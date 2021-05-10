const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
const T = parseInt(input.shift());
for (let i = 0; i < T; i++) {
  const len = input[i].length;
  const queue = [];
  let result = true;
  for (let j = 0; j < len; j++) {
    //문자열 각각 확인
    if (queue.length === 0) {
      queue.push(input[i][j]);
    } else if (queue[0] === "0") {
      //queue첫인덱스가 0이면 무조건 1
      if (input[i][j] !== "1") {
        //아닐시 종료
        result = !result;
        queue.length = 0;
        break;
      }
      queue.pop(); //무조건 0만들어있기 때문에 pop하면 queue초기화
    } else if (queue[0] === "1") {
      if (queue.length < 3) {
        //1이 처음 인덱스면 최소 100은되어야됨
        if (input[i][j] === "1") {
          //종료 조건
          result = !result;
          queue.length = 0;
          break;
        }
      } else {
        if (queue[queue.length - 1] === "1") {
          if(queue[queue.length-2] === '0'){  // 1000...01뒤에 0들어오면 queue초기화
            if (input[i][j] === "0"){
              queue.length = 0;
              queue.push(input[i][j]);
              continue;
            }  
          } else {  // 1000...11뒤에 0들어오면
            if (input[i][j] === "0"){
              queue.length = 0;
              queue.push(input[i][j]);
              continue;
            }  
          }
        }
      }
      queue.push(input[i][j]);
    }
  }
  //queue가 제거 되지않으면 100..1상황 빼고 나머지는 불과
  if (queue.length > 0 && queue.length < 4) {
    result = !result;
  } else {
    const tmp = queue.join("").slice(0, 3) + queue[queue.length - 1];
    result = tmp === "1001" ? true : false;
  }
  console.log(result ? "YES" : "NO");
}
