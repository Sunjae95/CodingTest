function solution(people, limit) {
    let boat = 0,end=people.length-1, start=0;
    //정렬
    people.sort((a,b) =>{
    return a-b;
    });
    //두명까지 태울수있으니깐 정렬 된 상태에서 맨앞과 맨뒤를 더하고
    //limit보다 크지않으면 둘다 태우고 아니면 맨뒤에만 태우는 방식
    while(end>=start){
        if(people[end]+people[start]<=limit){
            start++
        }
        end--;
        boat++;
    }
    return boat;
}