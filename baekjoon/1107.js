const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
const [N, M] = input
  .shift()
  .split(" ")
  .map((i) => Number(i));
const arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" ").map((v) => Number(v)));
}
console.log(arr);
//1X4, 4X1블록
function tetlomino1(arr, i, j) {
  //1X4블록
  let row = 0;
  if (j + 4 <= arr[i].length) {
    row = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i][j + 3];
  }
  //4X1블록
  let column = 0;
  if (i + 4 <= arr.length) {
    column = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 3][j];
  }
  return row > column ? row : column;
}
//2X2블록
function tetlomino2(arr, i, j) {
  if (i + 2 <= arr.length && j + 2 <= arr[i].length) {
    return arr[i][j] + arr[i + 1][j] + arr[i][j + 1] + arr[i + 1][j + 1];
  }
  return 0;
}
//2X3, 3X2 블록
function tetlomino3(arr, i, j) {
  //3X2블록
  let x = 0;
  if (i + 3 <= arr.length && j + 2 <= arr[i].length) {
    const total =
      arr[i][j] +
      arr[i + 1][j] +
      arr[i + 2][j] +
      arr[i + 1][j] +
      arr[i + 1][j + 1] +
      arr[i + 1][j + 2];
    x =
      total - (arr[i][j] + arr[i + 1][j]) >
      total - (arr[i][j + 1] + arr[i + 1][j + 1])
        ? total - (arr[i][j] + arr[i + 1][j])
        : total - (arr[i][j + 1] + arr[i + 1][j + 1]);
    x =
      x > total - (arr[i + 1][j] + arr[i + 2][j])
        ? x
        : total - (arr[i + 1][j] + arr[i + 2][j]);
    x =
      x > total - (arr[i + 1][j + 1] + arr[i + 2][j + 1])
        ? x
        : total - (arr[i + 1][j + 1] + arr[i + 2][j + 1]);
    
  }
}

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {}
}
console.log(N, M);
