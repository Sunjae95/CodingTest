package beakjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B2839 {
	public static void main(String[] args) throws NumberFormatException, IOException {
	BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
	int n= Integer.parseInt(br.readLine());
	int count=0;
	while(true) {
		if(n%5==0) {
			System.out.println(n/5+count);
			break;
		}else{
			count++;
			n-=3;
		}
		if(n<0) {
			System.out.println(-1);
			break;
		}
	}
	}
}
//처음 풀때는 무조건 5의 나머지가 124가 나오면 -1 출력 3이나오면 5의 몫을 count하고 3을 나누어 count하여 출력
//근데 6이나 9가 전체 kg으로 지정됐을때를 생각못함
//조건
//5와3의 최소공배수보다 크냐? 
//Yes count 3번후 전체수에서 15를 뺌
//No 5를 뺐을때 3의 배수가 되냐? 
//	  Yes count 1번후 전체수에서 5를 뺌
//    No 3을 뺐을때 0이 나오냐? 
//       Yes count 1번후 전체수에서 3을 뺌
//		 No count-1
//반례 16

//다른 블로그에서 그리디 알고리즘을 사용하라고했는데 어떻게 사용하는지 몰랐다.
//나는 5가 가장크니깐 5를 기준으로 계산하는게 맞다 생각했지만 3을 기준으로 계산하는게 반례없이
//잘돌아가는것을 확인할수있었다.

//public class Main {
//	static int del(int n,int count) {
//		if(n>=15&&((n-15)%5==0||(n-15)%3==0)) {
//			n-=15;
//			count+=3;
//			count=del(n,count);
//		}else if(n>=5&&((n-5)%5==0||(n-5)%3==0)){
//			n-=5;
//			count++;
//			count=del(n,count);
//		}else if(n>=3&&((n-3)%5==0||(n-3)%3==0)){
//			n-=3;
//			count++;
//			count=del(n,count);			
//		}else if(n==1||n==2||n==4){
//			count=-1;
//		}
//		
//		return count;
//	}
//	public static void main(String[] args) throws NumberFormatException, IOException {
//		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
//		int n=Integer.parseInt(br.readLine());
//		int count=0;
//		System.out.println(del(n,count));
//	}
//}