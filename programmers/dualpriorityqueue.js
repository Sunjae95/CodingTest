function solution(operations) {
    let answer = [];
    let queue = [];

    operations.forEach(index => {
        if (index[0] === 'I') {
            queue.push(parseInt(index.slice(2)));
            return;
        }

        if (queue.length !== 0) {
            if (index[2] === '-') {
                const min = queue.reduce((pre, cur) => {
                    return pre < cur ? pre : cur;
                });
                queue.splice(queue.indexOf(min), 1);
            } else {
                const max = queue.reduce((pre, cur) => {
                    return pre > cur ? pre : cur;
                });
                queue.splice(queue.indexOf(max), 1);
            }
        }
    });
    if (queue.length === 0) {
        answer.push(0);
        answer.push(0);
    } else {
        answer.push(queue.reduce((pre, cur) => pre > cur ? pre : cur));
        answer.push(queue.reduce((pre, cur) => pre < cur ? pre : cur));
    }

    return answer;
}