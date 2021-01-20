function solution(n, lost, reserve) {
    const arr = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        arr[i] = 1;
    }
    lost.forEach(number => arr[number] -= 1);
    reserve.forEach(number => arr[number] += 1);

    for(let i = 1; i <= n; i++){
        if(arr[i] === 2 && arr[i-1] === 0){
                arr[i-1]++;
                arr[i]--;
        } else if(arr[i] === 2 && arr[i+1] === 0){
                arr[i+1]++;
                arr[i]--;
        }
    }
    for(let key in arr){
        if(arr[key] > 0){
            answer++;
        }
    }
    return answer;
}

const ss = {};
console.log(typeof ss);