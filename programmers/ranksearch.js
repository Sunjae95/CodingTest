function solution(info, query) {
    let answer = [];
    info = info.map(item => item.split(' '));
    query = query.map(item => item.split(' ').filter(item => item !== 'and'));

    query.forEach(query => {
        let check = Array(info.length).fill(true);
        let count = 0;
        info.forEach((item, index) => {
            if (!check) return;
            if (query[0] !== item[0] && query[0] !== '-') check[index] = false;
            if (query[1] !== item[1] && query[1] !== '-') check[index] = false;
            if (query[2] !== item[2] && query[2] !== '-') check[index] = false;
            if (query[3] !== item[3] && query[3] !== '-') check[index] = false;
            if (check[index] && Number(item[4]) >= Number(query[4])) {
                count++;
            }
        });
        answer.push(count);
    });
    return answer;
}
console.log(solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]));