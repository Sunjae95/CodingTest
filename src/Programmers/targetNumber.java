package Programmers;

import java.util.ArrayList;

public class targetNumber {
	static int[] numbers;
	static int target;
	
	public static int dfs(int sum,int index) {
		//맨마지막이면 1 or 0리턴하고 차곡차곡 ans로 쌓임
		if(index>=numbers.length) {
			if(target==sum) {
				return 1;
			}
			return 0;
		}
		int sum1=sum+numbers[index];
		int sum2=sum-numbers[index];
		
		int ans=0;
		ans+=dfs(sum1,index+1);
		ans+=dfs(sum2,index+1);
		return ans;
	}
	
	public static void main(String[] args) {
		//numbers초기화
		numbers= new int[5];
		for(int i=0;i<numbers.length;i++) numbers[i]=1;
		int answer=0;
		int now=numbers[0];
		//루트노드 양수 음수 시작
		answer+=dfs(now,1);
		answer+=dfs(-now,1);
		
		System.out.print(answer);
	}

}
