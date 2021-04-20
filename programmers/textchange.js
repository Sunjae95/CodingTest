function solution(begin, target, words) {
    const visited = new Array(words.length).fill(true);
    let answer = 0;
    function dfs(node, count, visited) {
        if (node === target) {
            answer = count;
            return;
        };
        
        words.forEach((cur, index) => {
            if (visited[index]) {
                let equal = 0;
                for (let i = 0; i < cur.length; i++) {
                    if ( node[i] !== cur[i] ) equal++;
                }
                if (equal === 1) {
                    count++;
                    visited[index] = false;
                    dfs(cur, count, visited);
                }
            }
        });
    
    }
   dfs(begin, 0, visited);
    
    return answer;
}