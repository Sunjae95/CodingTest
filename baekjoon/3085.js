const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
const N = Number(input.shift());
const map = input.map((element) => element.split(""));

let max = 0;

function getCount(row, column) {
  let rowCount = 1;
  //세로
  for (let i = row - 1; i >= 0; i--) {
    if (map[row][column] !== map[i][column]) break;
    rowCount++;
  }
  for (let i = row + 1; i < N; i++) {
    if (map[row][column] !== map[i][column]) break;
    rowCount++;
  }
  let columnCount = 1;
  //가로
  for (let i = column - 1; i >= 0; i--) {
    if (map[row][column] !== map[row][i]) break;
    columnCount++;
  }
  for (let i = column + 1; i < N; i++) {
    if (map[row][column] !== map[row][i]) break;
    columnCount++;
  }

  return rowCount > columnCount ? rowCount : columnCount;
}

function swap(a, b) {
  const [row, column] = a;
  const [rowC, columnC] = b;
  const tmp = map[row][column];
  map[row][column] = map[rowC][columnC];
  map[rowC][columnC] = tmp;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const origin = getCount(i, j);
    max = max > origin ? max : origin;
    //아래 바꾸기
    if (i + 1 === N) {
      swap([i, j], [i - 1, j]);

      const downCount = getCount(i, j);
      max = max > downCount ? max : downCount;

      swap([i, j], [i - 1, j]);
    } else if (map[i][j] !== map[i + 1][j]) {
      swap([i, j], [i + 1, j]);

      let downCount = getCount(i, j);
      max = max > downCount ? max : downCount;
      downCount = getCount(i + 1, j);
      max = max > downCount ? max : downCount;

      swap([i, j], [i + 1, j]);
    }
    //오른쪽바꾸기
    if (j + 1 === N) {
      swap([i, j], [i, j - 1]);

      const upCount = getCount(i, j);
      max = max > upCount ? max : upCount;

      swap([i, j], [i, j - 1]);
    } else if (map[i][j] !== map[i][j + 1]) {
      swap([i, j], [i, j + 1]);

      let upCount = getCount(i, j);
      max = max > upCount ? max : upCount;
      upCount = getCount(i, j + 1);
      max = max > upCount ? max : upCount;

      swap([i, j], [i, j + 1]);
    }
  }
}
console.log(max);
