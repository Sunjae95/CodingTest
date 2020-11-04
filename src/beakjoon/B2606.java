package beakjoon;

import java.util.ArrayList;
import java.util.Scanner;

public class B2606 {
	static boolean[] visited;
	static ArrayList<Integer>[] map;
	static int cnt;
	
	static void dfs(int node) {
		visited[node]=true;
		cnt++;
		for(int a:map[node]) {
			if(!visited[a]) 
				dfs(a);
		}
	}
	@SuppressWarnings("unchecked")
	public static void main(String[] args) {
		Scanner input=new Scanner(System.in);
		int n=input.nextInt();	//컴퓨터수
		int m=input.nextInt();	//연결된 컴퓨터 쌍의 수
		map=new ArrayList[n+1];
		for(int i=0;i<map.length;i++) map[i]=new ArrayList<Integer>();
		
		visited=new boolean[n+1];	//false
		cnt=0;
		
		for(int i=0;i<m;i++) {
			int x=input.nextInt();
			int y=input.nextInt();
			map[x].add(y);
			map[y].add(x);
		}
		dfs(1);
		System.out.print(cnt-1);
	}
}
