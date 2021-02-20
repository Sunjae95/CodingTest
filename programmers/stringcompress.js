function solution(s) {
    let answer = s.length;

    if (s.length === 1)
        return 1;

    for(let i=1; i<=s.length/2; i++) { //i개 단위로 자를 시 i가 전체 길이의 / 2 을 넘어가면 그대로 종료되기에 s.length/2
        let comp = s.substr(0,i);
        let count = 1;
        let res = '';
        for(let j=i; j<s.length; j+=i) {  //i개 단위로 검사
            const tmp = s.substr(j,i);
            if (comp === tmp) {    //비교대상이 같을 때
                count++;
            } else { //같지 않을 때
                if (count === 1) {
                    res += comp;
                    comp = tmp;
                }else {
                    res += (count + comp);
                    comp = tmp;
                    count = 1;
                }
            }

            if (j+i >= s.length){ //다음문자열이 비교개수보다 적을 때
                if(count === 1) {
                    res += s.substr(j);
                    break;
                } else {
                    res += (count + comp);
                    break;
                }
            }
        }
        answer = (answer > res.length) ? res.length : answer;
    }
    return answer;
}

console.log(solution("aabbaccc"));