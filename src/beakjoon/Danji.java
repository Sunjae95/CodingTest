package beakjoon;

import java.util.Collections;
import java.util.LinkedList;
import java.util.Scanner;

public class Danji {
	static int n,count;
	static int[][] map;
	static boolean[][] visited;
	static int[] dx= {1,-1,0,0};
	static int[] dy= {0,0,-1,1};
	
	public static int dfs(int x, int y) {
		visited[x][y]=true;
		
		for(int i=0;i<4;i++) {
			int temp_x=x+dx[i];
			int temp_y=y+dy[i];
			
			if(temp_x>=0&&temp_x<n&&temp_y>=0&&temp_y<n) {
				if(map[temp_x][temp_y]==1&&visited[temp_x][temp_y]==false){
					dfs(temp_x,temp_y);
					count++;
				}
			}
		}
		return count;
	}
	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		n=sc.nextInt();
		map=new int[n][n];
		visited=new boolean[n][n];
		
		//입력 및 저장
		for(int i=0;i<n;i++) {
			String str=sc.next();
			for(int j=0;j<n;j++) {
				map[i][j]=str.charAt(j)-'0';
			}
		}
		//dfs 1인 부분만 탐색 
		LinkedList<Integer> answer=new LinkedList<Integer>();
		for(int i=0;i<n;i++) {
			for(int j=0;j<n;j++) {
				if(map[i][j]==1&&visited[i][j]==false) {
					count=1;
					answer.add(dfs(i,j));
				}
			}
		}
		//오름차순정렬
		Collections.sort(answer);
		//출력
		System.out.println(answer.size());
		for(int i=0;i<answer.size();i++) System.out.println(answer.get(i));
	}

}
