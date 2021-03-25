function solution(n) {
    let answer = 0;
    let dp = [0,1];
    
    for(let i=1; i<n; i++){
        const nextDp = dp[i-1] + dp[i];
        dp.push(nextDp%1234567);
    }
    
    answer = dp[n]
    
    return answer;
}