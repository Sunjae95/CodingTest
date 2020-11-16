package beakjoon;

import java.util.Arrays;
import java.util.Scanner;

public class B2468 {
	static int n;
	static int[][] map;
	static boolean[][] checkMap;
	static int[] dx= {0,0,1,-1};
	static int[] dy= {1,-1,0,0,};
	static void dfs(int x,int y) {
		checkMap[x][y]=true;
		
		for(int k=0;k<4;k++) {
			int tmpX=x+dx[k];
			int tmpY=y+dy[k];
			if(tmpX>=0&&tmpX<n&&tmpY>=0&&tmpY<n) {
				if(!checkMap[tmpX][tmpY]) {
					dfs(tmpX,tmpY);
				}
			}
		}
	}
	
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		n=sc.nextInt();
		map=new int[n][n];
		checkMap=new boolean[n][n];
		//map입력	
		int max=0;
		for(int i=0;i<n;i++) {
			for(int j=0;j<n;j++) {
				int x=sc.nextInt();
				map[i][j]=x;
				if(x>max) max=x;
			}
		}
		int maxCount=0;
		//강수량0부터 max높이까지 반복
		while(max>=0) {
			int cnt=0;
			//강수량보다 낮거나 같을시 침수
			for(int i=0;i<n;i++) {
				for(int j=0;j<n;j++)
					if(max>=map[i][j]) checkMap[i][j]=true;	
			}
			//침수안된곳 탐색후 안전한곳으로 판단하여 ++
			for(int i=0;i<n;i++) {
				for(int j=0;j<n;j++) {
					if(!checkMap[i][j]) {
						cnt++;
						dfs(i,j);
					}
				}
			}
			if(cnt>maxCount) maxCount=cnt;
			max--;
			for(int i=0;i<n;i++) Arrays.fill(checkMap[i], false);
		}
		System.out.println(maxCount);
	}
}


// 1. 지역 크기 입력
// 2. 각 지역 별 높이 입력
// 3. 강수량은 몇인지??

// 1. 높이가 강수량이하이면 다 방문표시
// 2. dfs하여 방문시 방문표시 맨처음 dfs 시 카운트
// 3. 카운트된거 출력