package beakjoon;

import java.util.Scanner;

public class B4963 {
	static int n,m,count;
	static int[][] map;
	static boolean[][] visited;
	static int[] dx= {1,-1,-0,0,-1,1,1,-1};
	static int[] dy= {0,0,-1,1,1,1,-1,-1};
	static void dfs(int x,int y) {
		if(map[x][y]==1&&visited[x][y]==false) 	{
			visited[x][y]=true;
		}else return;	
		for(int i=0;i<8;i++) {
			int tmp_x=x+dx[i];
			int tmp_y=y+dy[i];
			if(tmp_x>=0&&tmp_x<m&&tmp_y>=0&&tmp_y<n) {
				if(map[tmp_x][tmp_y]==1&&visited[tmp_x][tmp_y]==false) {
					dfs(tmp_x,tmp_y);
				}
			}
		}
	}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		while(true) {
			n=sc.nextInt();
			m=sc.nextInt();
			if(n==0&&m==0) break;
			map=new int[m][n];
			visited=new boolean[m][n];
			for(int i=0;i<m;i++) {	//�����Է�,�������� ���� ���� ���ΰ� �ݴ�� ������ 
				for(int j=0;j<n;j++) {
					int x=sc.nextInt();
					map[i][j]=x;
					if(x==0) {
						visited[i][j]=true;
					}
				}
			}
			//���� Ž��
			count=0;	//���ǰ���
			for(int i=0;i<m;i++) {
				for(int j=0;j<n;j++) {
					if(visited[i][j]==false&&map[i][j]==1) {
						dfs(i,j);
						count++;
					}
				}
			}
			System.out.println(count);
		}
	}

}

//dfs�������� dx,dy�� �밢������ �̵��ϴ� �迭���� 4���� �߰��ϸ� Ǯ��