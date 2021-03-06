# 문제접근

많은 문제를 효율적으로 풀기위해 문제를 보고 어떻게 풀것인지 공부하기

1. 문자열, 배열, 큐, 스택, 해시맵, 재귀, 트리
2. 탐색, graph
3. DP

<hr>

## 5430 AC

### 나의접근

1. T만큼 for문 실행
2. queue에 실행함수 순서대로 넣기
3. n만큼 배열 만들기
4. 받아온 문자를 [1,2,3,4]를 문자를 분해해서 각 숫자로 받아옴
5. queue길이만큼 for문 실행하기
6. R이면 문자열 바꾸기(reverse나 for문 사용하여 바꿈) / D면 문자열 앞에 삭제(문자열이 없다면 error 정지)
7. error가 안나면 문자열 출력
8. 2번으로 돌아와 T가 0이 될때까지 실행

시간 복잡도 생각해서 문자열 순서 바꿀때는 아래 그림과 같이 바꿀것  
![문자열 뒤집기](./image/5430reverse.PNG)


### 다른 풀이

이렇게 생각했지만 뒤집는 과정을 다르게 생각할 수 도 있음  
문자열을 뒤집지않고 가르키는 방향에 따라 나중에 출력
![문자열 뒤집기 답](./image/5430solution.PNG)

### 고친 나의 풀이

1. T만큼 for문 실행
2. queue에 실행함수 순서대로 넣기
3. n만큼 배열 만들기
4. 받아온 문자를 [1,2,3,4]를 문자를 분해해서 각 숫자로 받아옴
5. queue길이만큼 for문 실행하기
6. R: 문자열을 가리키는 포인터 바꾸기 `OR` D: 가르키는 포인터 인덱스 삭제후 포인터(다음칸 or 전칸) 이동 앞에 삭제(문자열이 없다면 error 정지)
7. error가 안나면 문자열 출력
8. 2번으로 돌아와 T가 0이 될때까지 실행

### 주의할점

1. 문자열 받아올 때 어떻게 받아올것인지
2. 문자열 반전할 때 방법
3. 문자 삭제

> **출처**  
> https://sabarada.tistory.com/151  
> https://st-lab.tistory.com/221

<hr>

## 1764 듣보잡

### 나의접근
1. 듣지못한사람 + 보도 못한사람 배열만들어 정렬(가장빠른 정렬) 하기
2. 순차적으로 탐색해서 스택에 현재있던것을 삽입하고 스택top과 같다면 둘다 pop하여 정답에 넣기
3. 그렇지 않으면 스택top을 pop하고 현재것을 넣기 
4. 정답 출력

<hr>

## 1541 잃어버린 괄호

### 나의접근
1. 문자열을 차례로 탐색
2. +,-가 아니면 숫자스택에 push
3. +면 숫자스택에 있는 인덱스들을 합쳐서 숫자로 변환 후 기존 답과 더해주기
4. -면 숫자스택에 있는 인덱스들을 합쳐서 숫자로 변환 후 마이너스가 올때까지 -로 받기
5. for문이 종료되면 숫자 인덱스를 합쳐서 숫자로 변환 후 마이너스면 답에 - 그렇지않으면 +로 계산해주기      

### 다른풀이
1. 문자열을 -를 기준으로 나눈다.
2. 각 인덱스마다 +가 있으면 그것을 더해준다.
3. 결과값에 -를 붙여서 계산한다.

> **출처**  

<hr>

## 11729 하노이 탑 이동 순서

### 고친 나의 풀이
1. 재귀함수를 이용할 것..
2. 가장 작은 단위까지 반복시행
3. (N-1) A ➡ B / (N) A ➡ C / (N-1) B ➡ C


> **출처**  

<hr>

## 11650 좌표정렬하기

### 나의 접근
1. 최대 10만개이고 시간제한이 1초이기에 bubble sort는 불가 / 합병정렬 사용

> **출처**  
> https://im-developer.tistory.com/134
<hr>

## 7568 덩치

### 나의접근
1. 표를 몸무게, 키가 크면 정렬 그렇지않으면 그대로
2. 정려된 표를 가지고 Rank배열을 만들어 인덱스별 순위 지정
3. for문 표배열의길이만큼 진행
4. 정렬된 표에서 현재 사람과 일치하는 인덱스 가져오기
5. 인덱스로 Rank를 참조해 결과배열에 삽입 후 출력

### 다른 풀이
모든 경우의 수를 비교
1. 표만들기
2. 중첩 for문을 사용해 각 사람마다 처음사람부터 끝사람까지 탐색
3. 몸무게, 키가 본인보다 크면 rank ++

### 고친 나의 풀이
정렬할 필요없이 모든것을 탐색한다.

### 주의할점
그리디 알고리즘인줄 알았는데 brute-force였다... (그저 헷갈림)


> **출처**  
>https://dpsc615.tistory.com/123


## 1316 그룹 단어 체커

<hr />

### 나의접근
1. 전체 입력 받고 N과 문자열로 구성된 1차원배열로 만든다.
2. N만큼 for문 실행
3. 각 실행마다 Set 객체를 만들어준다.
4. 문자열 길이만큼 for문을 실행
5. 매 시행시 Set객체에 현재 문자가 없으면 통과
6. 있을 때 Set객체 마지막과 현재 문자와 같으면 통과 / 아닐시 종료
7. 문자열 for문이 강제종료된거 아니면 count증가
8. count 출력

### 다른 풀이
`6번과정`
나는 마지막문자를 for문에서 비교
다른사람은 현재문자를 탐색하면서 while문을 실행시켜 같은게 나올때까지 탐색후 탐색된 후로 넘어감

### 고친 나의 풀이

### 주의할점
마지막에 들어온 문자와 중복된다는 점

> **출처**  



<hr />

### 나의접근
1. 각 테스트 케이스마다 stack을 활용해 해결한다.
2. `(`가 들어올 때 push `)`가 들어올 때 pop
3. 만약 `)`이 들어올 때 stack이 비어있으면 NO
4. 테스트케이스가 끝났는데 문자가 남아있다면 NO
5. 3,4번을 통과했다면 YES 출력

### 다른 풀이

### 고친 나의 풀이

### 주의할점
마지막에 비어있는지 확인 해야된다.
> **출처**  