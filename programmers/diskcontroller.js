function solution(jobs) {
    const length = jobs.length;
    let runnigTime = 0;
    let wait = [];
    let answer = 0;
    //정렬
    jobs = jobs.sort((a, b) => {
        const t = a[0] > b[0] ? 1 : -1;
        return t;

    });

    while (jobs.length !== 0 || wait.length !== 0) {
        let tmp = [];
        let count = jobs.filter(index => runnigTime > index[0]).length;

        while (count-- > 0) {
            wait.push(jobs.shift());
        }

        if (wait.length === 0) {
            tmp = jobs.shift();
            answer += tmp[1];
            runnigTime = tmp[0] + tmp[1];
        } else {
            wait.sort((a, b) => {
                if (a[1] === b[1]) {
                    const wat = runnigTime - a[0] > runnigTime - b[0] ? 1 : -1;

                }
                if (a[1] > b[1]) return 1;
                if (a[1] < b[1]) return -1;

            });
            tmp = wait.shift();
            answer += (runnigTime - tmp[0]) + tmp[1];
            runnigTime += tmp[1];
        }

    }

    answer /= length;


    return parseInt(answer);
}