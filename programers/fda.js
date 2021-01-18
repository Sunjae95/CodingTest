// //첫코드
// function solution(n, lost, reserve) {
//     var answer = 0;
//     answer=n-lost.length;
    
//     for(let i=0; i<lost.length; i++) {
//         for(let j=0; j<reserve.length; j++) {
//             if(lost[i] === reserve[j]-1){
//                 lost[i]=-1;
//                 reserve[j]=-1;
//                 answer++;
//             }else if(lost[i] === reserve[j]+1) {
//                 lost[i]=-1;
//                 reserve[j]=-1;
//                 answer++;
//             }
//         }
//     }
//     return answer;
// }
// 확인이되면 초기화 시켜주기

function solution(n, lost, reserve) {
    var answer = 0;
    answer=n-lost.length;
    //여벌가져온 학생이 도난 맞았을때 
    for(let i=0; i<reserve.length; i++) {
        for(let j=0; j<lost.length; j++) {
            if(reserve[i] === lost[j]) {
                reserve[i] = -1;
                lost[j] = -1;
                answer++;
            }
        }
    }
    //여벌 가져온 학생이 도난 맞은 학생 빌려주기
    for(let i=0; i<reserve.length; i++) {
        if(reserve[i] > 0) {
            for(let j=0; j<lost.length; j++) {
                if(reserve[i]-1 === lost[j]) { 
                    reserve[i]=-1;
                    lost[j]=-1;
                    answer++;
                }
            }   
        }
    }
    return answer;
}

console.log(solution(5, [2,4],[1,3,5]));