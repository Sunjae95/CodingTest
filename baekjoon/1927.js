// // 입력
// const fs = require("fs")
// let n =  fs.readFileSync("/dev/stdin").toString().split("\n");

// class MinHeap {
//     constructor() {
//         this.node = [];
//     }

//     add(num) {
//         this.node.push(num);
//         this.bottomUp();
//     }
//     bottomUp(index = this.node.length -1) { //작으면 위로 올려주는 method
//         if (index < 1 ) return;             //자기 자신만 있을 경우 종료
//         else {
//             const childNode = this.node[index];
//             const parentIndex = Math.floor((index - 1) / 2);
//             const parentNode = this.node[parentIndex];
//             if( parentNode <= childNode ) return;     //부모가 더 작을 경우 바로 종료
//             else{
//                 //그렇지 않으면 자리 바꾸기
//                 this.node[index] = parentNode;
//                 this.node[parentIndex] = childNode;
//                 this.bottomUp(parentIndex);     //재귀함수 써서 반복
//             }
//         }
//     }

//     delete(){
//         const min = this.node[0];

//         if( this.node.length === 1 ) {      //노드가 하나밖에없으면 삭제 후 리턴
//             this.node.pop();
//             return min;
//         } else{
//             this.node[0] = this.node.pop();     //맨 마지막 값 루트로 올리기
//             this.topDown();//삭제 되더라도 최소값을 루트로 올려야되기에 실행
//             return min;
//         }
//     }
//     topDown(index = 0){
//         const leftChildIndex = (index * 2) + 1;
//         const rightChildIndex = (index * 2) + 2;
//         const length = this.node.length;
//         let minimumIndex = index;
//         if( !this.node[leftChildIndex] && !this.node[rightChildIndex] ) return;     //자식이 없을 경우
//         if( !this.node[rightChildIndex] ) {      //왼쪽 자식만 있을 경우
//             if( this.node[leftChildIndex] < this.node[minimumIndex] ){
//                 minimumIndex = leftChildIndex;
//             }
//         } 
//         //둘다 있지만 둘 중 더 작은값을 찾아 바꾸는 경우
//         if( this.node[leftChildIndex] > this.node[rightChildIndex] ){   //오른자식이 더 작을 때
//             if( rightChildIndex <= length && this.node[rightChildIndex] < this.node[minimumIndex] ){
//                 minimumIndex = rightChildIndex;
//             }
//         } else {    //왼자식이 더 작을 때
//             if( leftChildIndex <= length && this.node[leftChildIndex] < this.node[minimumIndex] ){
//                 minimumIndex = leftChildIndex;
//             }
//         }
        
//         if( minimumIndex !== index ) {  //인덱스값 바꾸기
//             const tmp = this.node[minimumIndex];
//             this.node[minimumIndex] = this.node[index];
//             this.node[index] = tmp;
//             this.topDown(minimumIndex);
//         }
//     }
// }

// let heap = new MinHeap();
// const k = +n[0];
// for(let i=1; i<k; i++){
//     let input = +n[i];
//     if( input !== 0 ) {
//         heap.add(input);
//     } else {
//         if( heap.node.length() === 0 ){
//             console.log(0);
//         } else {
//             console.log(heap.delete());
//         }
//     }
// }

let fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync(__dirname + '/stdin.txt').toString().replace(/\r/g, "").trim().split('\n');
let n = +input[0]
let operations = []
for (let i = 1; i < input.length; i++) {
    operations.push(+input[i])
}

class MinHeap {
    constructor() {
        this.node = [];
    }

    add(num) {
        this.node.push(num);
        this.bottomUp();
    }
    bottomUp(index = this.node.length -1) { //작으면 위로 올려주는 method
        if (index < 1 ) return;             //자기 자신만 있을 경우 종료
        else {
            const childNode = this.node[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parentNode = this.node[parentIndex];
            if( parentNode <= childNode ) return;     //부모가 더 작을 경우 바로 종료
            else{
                //그렇지 않으면 자리 바꾸기
                this.node[index] = parentNode;
                this.node[parentIndex] = childNode;
                this.bottomUp(parentIndex);     //재귀함수 써서 반복
            }
        }
    }

    delete(){
        const min = this.node[0];

        if( this.node.length === 1 ) {      //노드가 하나밖에없으면 삭제 후 리턴
            this.node.pop();
            return min;
        } else{
            this.node[0] = this.node.pop();     //맨 마지막 값 루트로 올리기
            this.topDown();//삭제 되더라도 최소값을 루트로 올려야되기에 실행
            return min;
        }
    }
    topDown(index = 0){
        const leftChildIndex = (index * 2) + 1;
        const rightChildIndex = (index * 2) + 2;
        const length = this.node.length;
        let minimumIndex = index;
        if( !this.node[leftChildIndex] && !this.node[rightChildIndex] ) return;     //자식이 없을 경우
        if( !this.node[rightChildIndex] ) {      //왼쪽 자식만 있을 경우
            if( this.node[leftChildIndex] < this.node[minimumIndex] ){
                minimumIndex = leftChildIndex;
            }
        } 
        //둘다 있지만 둘 중 더 작은값을 찾아 바꾸는 경우
        if( this.node[leftChildIndex] > this.node[rightChildIndex] ){   //오른자식이 더 작을 때
            if( rightChildIndex <= length && this.node[rightChildIndex] < this.node[minimumIndex] ){
                minimumIndex = rightChildIndex;
            }
        } else {    //왼자식이 더 작을 때
            if( leftChildIndex <= length && this.node[leftChildIndex] < this.node[minimumIndex] ){
                minimumIndex = leftChildIndex;
            }
        }
        
        if( minimumIndex !== index ) {  //인덱스값 바꾸기
            const tmp = this.node[minimumIndex];
            this.node[minimumIndex] = this.node[index];
            this.node[index] = tmp;
            this.topDown(minimumIndex);
        }
    }
}

const heap = new MinHeap()
let extracts = ''
operations.forEach((e, index) => {
    if (e !== 0) {
        heap.add(e)
    } else {
        if (heap.node.length === 0) {
            extracts += '0' + '\n'
        } else {
            let t = heap.delete()
            extracts += t + '\n'
        }
    }
})

console.log(extracts.trim())