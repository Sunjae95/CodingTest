function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    let length = participant.length -1;
    for(let i=0; i<completion.length; i++){
        if(participant[i] !== completion[i] ){
            answer = participant[i];
            break;
        }
    }
    if (answer === '') answer = participant[length];
    return answer;
}

