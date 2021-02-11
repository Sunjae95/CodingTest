const fs = require("fs");
// 콘솔입력
let input = fs.readFileSync('input').toString().split('\r\n');
// 백준입력
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//게임판 만들기 벽을 만들기 위해 +2
const xy = +input[0]+2;
let board = Array(xy).fill(null).map(() => Array(xy).fill(false));
//사과 개수 만큼 게임판에 배치
const totalapple = +input[1];
for(let i=0; i<totalapple; i++){
    const [ row, col ] = input[2+i].split(" ");
    board[row][col] = true;
}


class Snake{
    constructor(row, col, drow, dcol){
        this.row = row;
        this.col = col;
        this.drow = drow;
        this.dcol = dcol;
    }
}

//방향 큐 설정
class dict {    
    constructor(x, c){
        this.x = x;
        this.c = c;
    }
}
let dictQ = [];

for(let i=totalapple+3; i<input.length; i++){
    const [ x, c ] = input[i].split(" ");
    dictQ.push(new dict(+x,c));
}

let row=1, col=1, drow=0, dcol=1;
let q = [];
let time = 0;
q.push(new Snake(row, col, drow, dcol));


while(true){
    //시간 증가
    time++;
    //이동
    board[row][col] = 0;
    row+=drow;
    col+=dcol;
    q.push(new Snake(row, col, drow, dcol));
    
    
    //이동 후 끝나는 조건 설정 
    if( row < 1 || row >= xy || col < 1 || col >= xy || board[row][col] === 0 ) {   //벽, 자기 자신에 부딪힐 때
        break;
    }
    
    if( board[row][col] === false ){     //사과가 없으면 꼬리칸 이동
        const tail =q.shift();
        board[tail.row][tail.col] = false;
    } 

    //방향 바꾸기
    if(dictQ[0] !== undefined){
        if( dictQ[0].x === time ){
            if( dictQ[0].c === 'L'){   //왼쪽회전
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
            }else if (dictQ[0].c === 'D'){     //오른쪽
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
            dictQ.shift();
        }
    } 
    
}
console.log(time);