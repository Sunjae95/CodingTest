function solution(priorities, location) {
    let answer = 0;
    let current = location;
    
    while(priorities.length>0) {
        if( priorities.some( index => index > priorities[0] ) ){      //맨처음보다 우선순위가 높은것이 있음
            const tmp = priorities.shift(priorities[0]);
            priorities.push(tmp);
            if( current === 0 ){
                current = priorities.length - 1;
            } else {
                current--;
            }
        } else {    //맨처음이 우선순위인경우   
            priorities.shift(priorities[0]);
            answer++;
            if( current === 0) break;
            else {
                current--;
            }
        }
        
    }

    return answer;
}

// function solution(priorities, location) {
//     let answer = 0;
//     let q = [];
//     for(let i=0; i<priorities.length; i++){
//         q.push(i);
//     }
//     let change =false;
//     while(true) {
//         if (priorities.length === 1) break;
//         for(let i=1; i<priorities.length; i++){
//             if( priorities[0] < priorities[i]){
//                 const tmp = priorities.shift(priorities[0]);
//                 priorities.push(tmp);
//                 const tmp_q = q.shift(q[0]);
//                 q.push(tmp_q);
//                 break;
//             }
//             if( i === priorities.length -1 ){
//                 change = true;
//             }
//         }
//         if( change ){
//             priorities.shift(priorities[0]);
//             const tmp = q.shift(q[0]);
//             answer++;
//             change =false;
//             if( tmp === location) {
//                 break;
//             }
//         }
//     }

//     return answer;
// }