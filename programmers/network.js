//bfs
function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(true);

    function bfs(node) {
        const queue = [];
        queue.push(node);
        visited[node] = false;

        while (queue.length !== 0) {
            const n = queue.shift();
            visited[n] = false;
            computers[n].forEach((cur, index) => {
                if (cur === 0 || n === index || !visited[index]) return;
                queue.push(index);
            });
        }
    }

    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            bfs(i);
            answer++;
        }
    }

    return answer;
}
//dfs
function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(true);

    function dfs(node) {

        visited[node] = false;

        computers[node].forEach((cur, index) => {
            if (cur === 1 && index !== node && visited[index]) {
                dfs(index);
            }
        });
    }

    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            dfs(i);
            answer++;
        }
    }

    return answer;
}