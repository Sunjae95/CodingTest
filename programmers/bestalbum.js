function solution(genres, plays) {
    let answer = [];
    const arr = best(genres, plays);
    
    for(let i=0; i<arr.length; i++){        //각 장르별 1,2순위 앨범 등록하기
        const tmp = gSort(arr[i], genres, plays);
        answer = answer.concat(tmp);
    }

    return answer;
}

function best(genres, plays) {  //장르 순서정하기
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
    for(let i=0; i<g_arr.length; i++){              //가장 많이 조회된 순서대로 arr에 등록
        const max = Math.max.apply(null, p_arr);
        const max_index = p_arr.indexOf(max);
        p_arr[max_index] = 0;
        arr.push(g_arr[max_index]);    
    }

   
    return arr;     
}

function gSort(title, genres, plays){       //장르내 음악 앨범 순서 정하기
    let arr = [];
    genres.forEach((item, index) => {   //인덱스 모아 놓기
        if( item === title ){
            arr.push(index);
        }        
    });
    
    if(arr.length === 1 ) {
        return arr;
    }
    for(let i=0; i<arr.length; i++){        //정렬 높은순에서 적은순으로 
        for(let j=0; j<arr.length-i; j++){
            if( plays[arr[j]] > plays[arr[j-1]]){
                const tmp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    arr = arr.slice(0,2);       //가장 첫번째 두번째 앨범 등록
    return arr;
}