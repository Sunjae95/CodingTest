function solution(name) {
    let answer = 0;
    //A로 부터 떨어진 알파벳의 최소값
    for(let i=0; i<name.length; i++){
        if(name.charCodeAt(i)>=78){
            console.log(91-name.charCodeAt(i));
        }else{
            console.log(name.charCodeAt(i)-65);
        }
    }
    //현재 커서로부터 떨어진 알파벳의 거리 최소값
    return answer;
}
//1. 알파벳을 최소값구하기 A에서 주어진 알파벳까지
//2. 현재 커서위치에서 다른 커서위치까지 최소값구하기
//3. 각 인덱스에 1+2을 더하여 최소값을 찾아 움직이기

// solution("JEROEN");
