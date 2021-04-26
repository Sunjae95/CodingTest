const fs = require("fs");
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');    //백준입력
const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const arr = input[i].split(" ").map((element) => Number(element));
  arr.shift();
  let answer = 0;
  arr.forEach((element, index) =>{
    for(let j=index; j<arr.length; j++){
        if(j === index) {
            continue;
        }
        answer += GCD(element, arr[j]);
    }
  });
  console.log(answer);
}

function GCD(a, b) {
  if (a < b) {
    const tmp = b;
    b = a;
    a = tmp;
  }
  while(b!==0){
      const n = a%b;
      a = b;
      b = n;
  }
  return a;
}
