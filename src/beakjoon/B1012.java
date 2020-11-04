package beakjoon;

import java.util.Scanner;

public class B1012 {
	static int n,m,k;
	static int[][] map;
	static boolean[][] visited;
	static int[] dx= {0,0,1,-1};
	static int[] dy= {1,-1,0,0};
	static int count;
	
	static void dfs(int x,int y) {
		visited[x][y]=true;

		for(int i=0;i<4;i++) {
			int temp_x=x+dx[i];
			int temp_y=y+dy[i];
			if(temp_x>=0&&temp_x<n&&temp_y>=0&&temp_y<m) {
				if(!visited[temp_x][temp_y]&&map[temp_x][temp_y]==1) {
					visited[temp_x][temp_y]=true;
					dfs(temp_x,temp_y);
				}
			}
		}
	}
	public static void main(String[] args) {
		Scanner input=new Scanner(System.in);
		int t=input.nextInt();
		for(int i=0;i<t;i++) {
			n=input.nextInt();
			m=input.nextInt();
			k=input.nextInt();
			map=new int[n][m];
			visited=new boolean[n][m];
			count=0;
			for(int j=0;j<k;j++) {	//배추심기
				int x=input.nextInt();
				int y=input.nextInt();
				map[x][y]=1;
			}
			for(int a=0;a<n;a++) {
				for(int b=0;b<m;b++) {
					if(visited[a][b]==false&&map[a][b]==1) {
						dfs(a,b);
						count++;
					}
				}
			}
			System.out.println(count);
		} 
	}

}
