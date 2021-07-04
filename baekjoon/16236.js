const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const inputs = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
const n = parseInt(inputs.shift());
const board = inputs.map((lines) => lines.split(" ").map((v) => parseInt(v)));
const dirR = [-1, 0, 0, 1];
const dirC = [0, -1, 1, 0];
let babyHungry = 2;
let count = 0;

const getBaby = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== 9) continue;
      board[i][j] = 0;
      return [i, j, 2];
    }
  }
};

const searchFish = (x, y, size) => {
  const visited = new Array(n).fill(null).map((v) => new Array(n).fill(false));
  const queue = [[x, y]];
  visited[x][y] = true;
  let count = 0;
  while (queue.length > 0) {
    count++;

    let end = queue.length;
    const eatList = [];
    while (end-- > 0) {
      const [nowR, nowC] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextR = nowR + dirR[i];
        const nextC = nowC + dirC[i];
        if (nextR >= n || nextR < 0 || nextC >= n || nextC < 0) continue;
        if (board[nextR][nextC] > size) {
          visited[nextR][nextC] = true;
          continue;
        }
        if (visited[nextR][nextC]) continue;
        if (board[nextR][nextC] === size || board[nextR][nextC] === 0) {
          queue.push([nextR, nextC]);
          visited[nextR][nextC] = true;
        } else if (size > board[nextR][nextC]) {
          eatList.push([nextR, nextC]);
          visited[nextR][nextC] = true;
        }
      }
    }
    if (eatList.length > 0) {
      eatList.sort((a, b) => {
        if (a[0] === b[0]) {
          return a[1] - b[1];
        }
        return a[0] - b[0];
      });
      return [...eatList[0], count];
    }
  }
  return false;
};

const baby = getBaby();

while (true) {
  // console.log('초기',baby,'배고픔:',babyHungry);
  const fish = searchFish(baby[0], baby[1], baby[2]);
  if (!fish) break;
  const dist = fish[2];
  count += dist;
  baby[0] = fish[0];
  baby[1] = fish[1];
  board[baby[0]][baby[1]] = 0;
  babyHungry -= 1;
  if (babyHungry === 0) {
    baby[2] += 1;
    babyHungry = baby[2];
  }
  // console.log(board);
  // console.log(baby);
  // console.log("=======================");
}

console.log(count);
