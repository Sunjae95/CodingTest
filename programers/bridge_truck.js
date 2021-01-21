function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = new Array(bridge_length).fill(0);
    const start = truck_weights.reduce((sum, index) => {   
        return sum+=index;
    },0);
    let end = 0;
    while (true){
        //1.초를 센다
        answer++;
        //2. 다리는 움직인다.
        end += bridge.shift();        
        //3. 다리위 무게를 구한다.
        const sum = bridge.reduce((sum, index) => {
            return sum+=index;
        },0);  
        //4. 무게를 비교하여 트럭을 올린다.
        if ( truck_weights[0] !== undefined ) {
            if ( weight >= (sum+truck_weights[0]) ) {
                bridge.push(truck_weights.shift());
            }else {
                bridge.push(0);
            }
        }else {
            bridge.push(0);
        }
        if( start === end ) break;
        
    }
    return answer;
}



