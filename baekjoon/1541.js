const fs = require("fs");
const input = fs.readFileSync("input").toString(); //콘
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//-가 있으면 분리
const str = input.split("-");
//+가 있으면 더해주고 다른 배열 만들기
const sort = str.map((e) => {
  const tmp = e.split("+");
  let index = 0;
  for (let i = 0; i < tmp.length; i++) {
    index += parseInt(tmp[i]);
  }
  return index;
});

let answer = sort[0];
for (let i = 1; i < sort.length; i++) {
  answer -= sort[i];
}
console.log(answer);
