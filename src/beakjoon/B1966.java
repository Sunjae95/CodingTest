package beakjoon;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class B1966 {
	static int t,n,m;
	
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		t=sc.nextInt();
		for(int i=0;i<t;i++) {
			n=sc.nextInt();	//문서개수
			m=sc.nextInt();	//몇번째 인덱스를 뽑아야하는지
			Queue<Integer> q= new LinkedList<>();
			//입력받기
			int best=0; //중요도
			int ans=0;
			for(int j=0;j<n;j++) {
				int x=sc.nextInt();
				q.add(x);
				if(x>best) best=x;	//초기 중요도 올려줌
				if(j==m) ans=x;	//뽑아야되는 문서 추적
			}
			int count=0;	//언제뽑혔는지 알려주는것
			while(true) {	
				if(best==q.peek()) {	//우선순위대로 문서 출력
					if(ans==q.peek()&&m==0) {	//프린트
						count++;
						System.out.println(count) ;
						break;
					}else {
					q.remove();
					count++;
					m--;
					best=0;
					for(int k=0;k<q.size();k++) {	//가장높은 우선순위 찾기
						int tmp=q.poll();
						if(tmp>best) best=tmp;
						q.add(tmp);
					}
					}
				}else if(best!=q.peek()) {	//우선순위아닐시 뒤로보내기
					int tmp=q.poll();
					q.add(tmp);
					if(m==0) m=q.size()-1;
					else m--;
				}
			}
		}
	}
}

//각 testcase에 대하여 n과 m을 입력받는다
//여기서 중요한것은 m!! m은 우리가 뽑아야될 문서이므로 움직이며 문서의 우선순위를 가르켜야됨
//그래서 index라는 변수를 만들어 처음 m을 입력받을때 우선순위를 입력받음

//내가 원하는 위치에 문서를 뽑을때까지 while문반복
//조건은 두가지 1.가장높은 우선순위와 큐의 처음이 같은지 2.가장높은 우선순위와 큐의 처음이 다른지  

//같을경우는 두가지로 나뉨 맨처음이 내가 원하는문서인지 아닌지
//원하는 문서일 경우 count++ 후 count 출력 및 break
//아닐 경우 큐에서 제거후 count++ 후에 가장높은 우선순위 탐색후 best에 저장

//다를경우 맨처음수를 큐에서 맨뒤로 보내고 m이 0이냐 아니냐에 따라 절감해주면된다.