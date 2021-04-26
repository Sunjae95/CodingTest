const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync("input").toString().split("\r\n"); //콘솔입력

//사람수: N 친구관계수: M
const [N, M] = input[0].split(" ").map((element) => Number(element));
const visited = Array(N).fill(true);
const graph = Array(N).fill(null).map(() => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map((element) => Number(element));
  graph[a].push(b);
  graph[b].push(a);
}

const human = [];
//dfs로 깊이 우선으로 deps가 5가되면 바로 종료
function dfs(node) {
  visited[node] = false;
  human.push(node);
  if (human.length === 5) {
    console.log(1);
    process.exit();
  }
  graph[node].forEach((element) => {
    if (visited[element]) {
      dfs(element);
    }
  });

  visited[node] = true;
  human.pop();
}

for (let i = 0; i < N; i++) {
  dfs(i);
}

console.log(0);

//종료조건을 human이라는 배열을 만들어 길이가 5이상이면 종료되게함
