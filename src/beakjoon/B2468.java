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
		//map�Է�	
		int max=0;
		for(int i=0;i<n;i++) {
			for(int j=0;j<n;j++) {
				int x=sc.nextInt();
				map[i][j]=x;
				if(x>max) max=x;
			}
		}
		int maxCount=0;
		//������0���� max���̱��� �ݺ�
		while(max>=0) {
			int cnt=0;
			//���������� ���ų� ������ ħ��
			for(int i=0;i<n;i++) {
				for(int j=0;j<n;j++)
					if(max>=map[i][j]) checkMap[i][j]=true;	
			}
			//ħ���ȵȰ� Ž���� �����Ѱ����� �Ǵ��Ͽ� ++
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


// 1. ���� ũ�� �Է�
// 2. �� ���� �� ���� �Է�
// 3. �������� ������??

// 1. ���̰� �����������̸� �� �湮ǥ��
// 2. dfs�Ͽ� �湮�� �湮ǥ�� ��ó�� dfs �� ī��Ʈ
// 3. ī��Ʈ�Ȱ� ���