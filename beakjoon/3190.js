const fs = require("fs");
// 콘솔입력
let input = fs.readFileSync('input').toString().split('\r\n');
// 백준입력
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//게임판 만들기 인덱스 그대로 받아오기 위해 +1
const xy = +input[0]+1;
let board = Array(xy).fill(null).map(() => Array(xy).fill(false));

//사과 개수 만큼 게임판에 배치
const totalapple = +input[1];
for(let i=0; i<totalapple; i++){
    const [ row, col ] = input[2+i].split(" ");
    board[row][col] = 'A';
}

class Snake{
    constructor(row, col){
        this.row = row;
        this.col = col;
    }
}

//방향 큐 설정
class dict {    
    constructor(X, C){
        this.X = X;
        this.C = C;
    }
}
let dicQueue = [];
for(let i=totalapple+3; i<input.length; i++){       //방향 큐 저장
    const [ X, C ] = input[i].split(" ");
    dicQueue.push(new dict(+X,C));
}
//초기 위치, 방향, 시간 
let row=1, col=1, drow=0, dcol=1, time = 0;
let q = [];
q.push(new Snake(row, col));

while(true){
    //시간 증가
    time++;
    //이동 
    board[row][col] = true;
    row+=drow;
    col+=dcol;
    //이동 전 끝나는 조건 설정 
    if( row < 1 || row >= xy || col < 1 || col >= xy || board[row][col] === true ) {   //벽, 자기 자신에 부딪힐 때
        break;
    } else {
        q.push(new Snake(row, col)); 
    }
    
    if( board[row][col] !== 'A' ){     //사과가 없으면 꼬리칸 이동
        const tail =q.shift();
        board[tail.row][tail.col] = false;
    } 

    //방향 바꾸기
    if(dicQueue[0] !== undefined){
        if( dicQueue[0].X === time ){
            if( dicQueue[0].C === 'L'){   //왼쪽회전
                if( drow === 0 && dcol === 1){  //오른쪽 -> 위쪽
                    drow = -1;
                    dcol = 0;
                } else if( drow === -1 && dcol === 0){  //위쪽 -> 왼쪽
                    drow = 0;
                    dcol = -1;
                }else if( drow === 0 && dcol === -1){  //왼쪽 -> 아래쪽
                    drow = 1;
                    dcol = 0;
                } else {       //아래쪽 -> 왼쪽
                    drow = 0;
                    dcol = 1;
                }
            }else if (dicQueue[0].C === 'D'){     //오른쪽
                if( drow === 0 && dcol === 1){  //오른쪽 -> 아래쪽
                    drow = 1;
                    dcol = 0;
                } else if( drow === 1 && dcol === 0){  //아래쪽 -> 왼쪽
                    drow = 0;
                    dcol = -1;
                }else if( drow === 0 && dcol === -1){  //왼쪽 -> 위쪽
                    drow = -1;
                    dcol = 0;
                } else {       //위쪽 -> 왼쪽
                    drow = 0;
                    dcol = 1;
                }
            }
            dicQueue.shift();
        }
    } 
}
console.log(time);

