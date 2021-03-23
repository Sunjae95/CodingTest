function solution(s) {
    let answer = true;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' && stack[0] === undefined) {
            answer = false;
            break;
        } else if (s[i] === ')') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
        if (i === s.length - 1) {
            if (stack[0] !== undefined) answer = false;
        }

    }

    return answer;
}