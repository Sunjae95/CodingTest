function solution(citations) {
    let answer = 0;
    let count = 0;
    citations.sort((a, b) => {
        return a - b;
    });
    citations.reduce((pre, cur, index) => {
        if (index !== 0) count = pre;

        while (count <= cur) {
            if (count <= citations.length - index && count >= index) {
                answer = count;
            }
            count++;
        }

        return cur;
    }, 0);

    return answer;
}
