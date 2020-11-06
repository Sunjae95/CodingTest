package beakjoon;

import java.util.Scanner;

public class B2798 {

	public static void main(String[] args) {
		Scanner sc =new Scanner(System.in);
		//입력
		int n=sc.nextInt();
		int sum=sc.nextInt();
		int[] arr=new int[n];
		for(int i=0;i<n;i++) {
			arr[i]=sc.nextInt();
		}
		int	max=0;
		for(int i=0;i<n-2;i++) {
			for(int j=i+1;j<n-1;j++) {
				for(int k=j+1;k<n;k++) {
					int hap=arr[i]+arr[j]+arr[k];
					if(sum>=hap&&hap>max) max=hap;
					if(max>=sum) break;
				}
				if(max>=sum) break;
			}
			if(max>=sum) break;
		}
		System.out.print(max);
	}
}

//3중 for문사용해야됨
//만약 max값이 sum보다 크거나 같으면(답 찾은 후) 그냥 break 하는것이 속도향상