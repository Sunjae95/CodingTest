function solution(number, k) {
    var answer = '';
    let numberArray = number.split('').map(Number);
    let start = 0;
    let t = number.length - k;
    let end = numberArray.length - t + 1;
    while (t > 0) {
        const tmp = numberArray.slice(start, end);
        const max = tmp.reduce((pre, cur, index) => {
            if (cur > pre) {

                start += index;
                return cur;
            }
            return pre;
        });
        answer += max;
        start++;
        end++;
        t--;
    }


    //     return answer;
    // }
    // console.log(solution("4177252841", 4));

    // const a = [1,2,3,4,5];
    // a.reduce((pre,cur,index)=>{
    //     console.log(pre, cur, index);
    //     return pre>cur ? pre:cur;
    // })
    // const a = 'adfsa';
    // a.reduce((pre, cur) => {
    //     console.log(pre, cur);
    //     return pre + cur;
    // })