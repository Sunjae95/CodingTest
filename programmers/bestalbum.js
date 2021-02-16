function solution(genres, plays) {
    let answer = [];
    const arr = best(genres, plays);
    
    for(let i=0; i<arr.length; i++){
        const tmp = gSort(arr[i], genres, plays);
        answer = answer.concat(tmp);
    }
 

    return answer;
}

function best(genres, plays) {
    const g_arr = genres.filter((item, index) => {      //중복제거
        return genres.indexOf(item) === index;
    });
    let p_arr = new Array(g_arr.length).fill(0);

    for(let i=0; i<genres.length; i++){
        const tmp =g_arr.findIndex((item) => {      //인덱스
            return item === genres[i];
        });
        p_arr[tmp] += plays[i];
    }
    let arr =[];
    for(let i=0; i<g_arr.length; i++){
        const max = Math.max.apply(null, p_arr);
        const max_index = p_arr.indexOf(max);
        p_arr[max_index] = 0;
        arr.push(g_arr[max_index]);    
    }

   
    return arr;     
}

function gSort(title, genres, plays){
    let arr = [];
    genres.forEach((item, index) => {   //인덱스 모아 놓기
        if( item === title ){
            arr.push(index);
        }        
    });
    
    if(arr.length === 1 ) {
        return arr;
    }
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i; j++){
            if( plays[arr[j]] > plays[arr[j-1]]){
                const tmp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    arr = arr.slice(0,2);
    return arr;
}

