function solution(info, query) {
    let answer = [];
    info = info.map(item => item.split(' '));
    query = query.map(item => item.split(' ').filter(item => item !== 'and'));

    for (let q of query) {
        let check = Array(info.length).fill(true);
        let count =0;
        q.forEach((element, index) => {
            if(element === '-') return;
            for (let i = 0; i < info.length; i++) {   
                if (check[i] === false) continue;
                if (index === 4){
                    if( info[i][index] >= Number(element) ){
                        count++;
                    }
                }
                if (element !== info[i][index]) check[i] = false;
            }
        });
        answer.push(count);
    }
    return answer;
}
console.log(solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]));