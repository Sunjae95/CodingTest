package beakjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B2579 {
	public static void main(String[] args) throws IOException  {
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		int n=Integer.parseInt(br.readLine());
		int arr[]=new int[n+1];
		int dp[]=new int[n+1];	//각 계단마다 최대값
		
		for(int i=1;i<n+1;i++) {
			arr[i]=Integer.parseInt(br.readLine());
		}
		dp[1]=arr[1];
		if(n>=2) {
			dp[2]=arr[1]+arr[2];			
		}
		if(n>=3) {
			dp[3]=Math.max(arr[1]+arr[3],arr[2]+arr[3]);			
		}
		for(int i=4;i<n+1;i++) {
			dp[i]=Math.max(dp[i-3]+arr[i-1]+arr[i],dp[i-2]+arr[i]);
		}
		System.out.println(dp[n]);
	}
}

//초기값을 1번째 2번째 3번째까지 두기
//반례 n이 2,3 일때도 따로 구분해줘야됨


//내가 한것
//규칙을 찾으려 했으나 잘안됐음 뒤에서 부터 계산했지만 초기값을 제대로 두지 못하여 실패
//public class Main {
//	static int max=0;
//	static int count=0;
//	static void up(int[] dn, int n){
//		max+=dn[n];
//		count++;
//		if(n==0||n==1) {
//			System.out.println(max);
//			return;
//		}
//		if(count==2) {
//			count=0;
//			up(dn,n-2);
//		}else {
//			if(dn[n-1]>dn[n-2]) {
//				up(dn,n-1);
//			}else {
//				count=0;
//				up(dn,n-2);
//			}
//		}
//	}
//
//
//	public static void main(String[] args) throws IOException {
//		Scanner sc=new Scanner(System.in);
//		int n=sc.nextInt();
//		int[] dn=new int[n+1];
//		dn[0]=0;
//		for(int i=1;i<n+1;i++) dn[i]=sc.nextInt();
//		up(dn,n);
//	}
//}
