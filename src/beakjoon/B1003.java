package beakjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B1003 {
	static int[] count0=new int[41];
	static int[] count1=new int[41];
	static void fibonacci(int n) {
		if(count0[n]>0&&count1[n]>0) {
			System.out.println(count0[n]+" "+count1[n]);
		}else if(count0[n]>0) {
			for(int i=3;i<=n;i++) {
				count1[i]=count1[i-1]+count1[i-2];
			}
			System.out.println(count0[n]+" "+count1[n]);
		}else if(count1[n]>0) {
			for(int i=3;i<=n;i++) {
				count0[i]=count0[i-1]+count0[i-2];
			}
			System.out.println(count0[n]+" "+count1[n]);
		}else {
			for(int i=3;i<=n;i++) {
				count0[i]=count0[i-1]+count0[i-2];
				count1[i]=count1[i-1]+count1[i-2];
			}
			System.out.println(count0[n]+" "+count1[n]);
		}
	}
	public static void main(String[] args) throws IOException {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		int t=Integer.parseInt(br.readLine());
		count0[0]=1;
		count0[1]=0;
		count0[2]=1;
		count1[0]=0;
		count1[1]=1;
		count1[2]=1;
		for(int i=0;i<t;i++) {
			int n=Integer.parseInt(br.readLine());
			fibonacci(n);
		}
	}
}

//0과 1은 따로 피보나치수열이 돌아감 따로 배열선언한뒤 같이 계산해주기
//0시작 2 3
//1시작 1 2
//f(0)=                          f(0)
//f(1)=                 f(1)
//f(2)=                 f(1)+f(0)
//f(3)=f(2)+f(1)=2f(1)+f(0)
//f(4)=f(3)+f(2)=3f(1)+2f(0)
//f(5)=f(4)+f(3)=5f(1)+3f(0)
//f(6)=f(5)+f(4)=8f(1)+5f(0)

