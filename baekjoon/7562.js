const fs = require("fs");
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [dx, dy] = [
  [-2, -1, 1, 2, -2, -1, 1, 2],
  [-1, -2, -2, -1, 1, 2, 2, 1],
];

//bfs로 깊이(최단거리)에 따른 count 반환
function bfs(start, end, N) {
  const queue = [];
  const visited = Array(N).fill(null).map(() => Array(N).fill(false));
  visited[(start[0], start[1])] = true;
  queue.push(start);

  while (queue.length !== 0) {
    const [x, y, count] = queue.shift();
    //도착지점 방문시 종료
    if (x === end[0] && y === end[1]) return count;
    //스택에 쌓기
    for (let i = 0; i < 8; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];
      if (nextX < N && nextX >= 0 && nextY < N && nextY >= 0) {
        if (!visited[nextX][nextY]) {
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY, count + 1]);
        }
      }
    }
  }
}

let T = Number(input.shift());

while (T > 0) {
  T--;
  //변수 설정
  const N = Number(input.shift());
  const start = input
    .shift()
    .split(" ")
    .map((element) => Number(element));
  const end = input
    .shift()
    .split(" ")
    .map((element) => Number(element));
  console.log(bfs([...start, 0], end, N));
}

//count를 start안에 넣어주는것이 중요하다..!!