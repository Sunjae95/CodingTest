//입력
const fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//노드 연결 관계 클래스
class TreeNode {
    constructor(num) {
        this.node = num;
        this.children = [];
    }
    add(num){
        this.children.push(num);
    }
}

//n명의 부모 만들기(트리, 방문)
const n = Number(input[0]);
let tree = [];
for(let i=0; i<=n; i++){
    tree.push(new TreeNode(i));
}  

//촌수를 계산해야 하는 서로 다른 두 사람
const tmp = input[1].split(" ");
const start = Number(tmp[0]);
const end = Number(tmp[1]);

//부모 자식들 간의 관계
const k = Number(input[2]);
for(let i=0; i<k; i++){
    const r = input[3+i].split(" ");
    tree[Number(r[0])].children.push(Number(r[1]));
    tree[Number(r[1])].children.push(Number(r[0]));
}


//bfs
function bfs(start, end){
    let visited = Array(n+1).fill(0);      
    let q = [];
    q.push(start);
    visited[start] = true;
    while (q.length !== 0) {
        const current = q.shift();  
        if(current === end){
            break;
        }

        for(let i=0; i<tree[current].children.length; i++){
            if( visited[tree[current].children[i]] === 0 ){
                q.push(tree[current].children[i]);
                visited[tree[current].children[i]] = visited[current]+1;
            }
        }
    }

    return visited[end];
}
console.log(bfs(start,end)-1);