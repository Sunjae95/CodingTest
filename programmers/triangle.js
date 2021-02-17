function solution(n) {
    let answer = [];
    
    const arr = createArr(n);
    const tmp = input(arr, n);
    for(let i=0; i<tmp.length; i++ ){
        for(let j=0; j<tmp[i].length; j++){
            answer.push(tmp[i][j]);
        }
    }
    return answer;
}

function createArr(n) {
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = new Array(i+1);
    }
    return arr;
}

function input(arr, n) {    
    const drow = [1, 0, -1];
    const dcol = [0, 1, -1];
    let d = 0, row=-1, col=0, count = 0;

    while( n > 0 ){
        for(let i=0; i<n; i++){
            row += drow[d];
            col += dcol[d];
            arr[row][col] = ++count; 
        }
        n--;
        d = ( d + 1 ) % 3;
    }
    return arr;
}
console.log(solution(4));

// function solution(n) {
//     let answer = creatArray(n);
//     answer = tri(answer, n);
//     return answer;
// }

// function creatArray(n){
//     let sum = 1;
//     for(let i=1; i<=n; i++){
//         sum+=i;
//     }
//     const tmp = Array(sum).fill(0);
//     return tmp;
// }

// function tri(arr, n) {
//     let currentIndex = 1;
//     let count = 1;
//     let d = 0;          //0 대각선아래 1 평행 2대각선위

//     while( n > 0 ) {
//         let h = n;
//         if(d === 0) {
//             for(let i=1; i<=h; i++){
//                 arr[currentIndex] = count++;
//                 if( i !== h){
//                     currentIndex += i;
//                 }else {
//                     currentIndex++;
//                 }
//             }
//             d = 1;
//         } else if(d === 1) {
//             for(let i=1; i<=h; i++){
//                 if( i !== h ){
//                     arr[currentIndex++] = count++;
//                 } else {
//                     arr[currentIndex] = count++;
//                     currentIndex -= (h+1);
//                 }
//             }
//             d = 2 ;
//         } else {
//             for(let i=1; i<=h; i++){
//                 arr[currentIndex] = count++;
//                 if( i !== 1){
//                     currentIndex -= (i+1);
//                 }else {
//                     currentIndex += i;
//                 }
//             }
//             d = 0;
//         }
//         n--;
//         console.log(arr);
//     }
//     arr.shift();
//     return arr;
// } 

// console.log(solution(5));