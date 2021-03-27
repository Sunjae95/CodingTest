function solution(w, h) {
    let answer = 1;
    if (w < h) {        //최대 공약수 구하기위해 큰수 작은수 설정
        const tmp = w;
        w = h;
        h = tmp;
    }

    const gcd = ((w, h) => {
        while (h !== 0) {
            const r = w % h;
            w = h;
            h = r;
        }
        return w;
    })(w, h);   //최대공약수 할당

    answer = w * h - (w + h - gcd); //단위 사각형 개수 * gcd를 하면 뒤의 식이 완성(사용하지 못하는 사각형) 

    return answer;
}