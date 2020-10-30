package beakjoon;

import java.io.IOException;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Mirro {
	static int n,m;
	static int[][] maze;
	static boolean[][] visited;
	static int[] dx= {1,-1,0,0}; //�¿�
	static int[] dy= {0,0,1,-1}; //����
	
	static void bfs() {
		Queue<Integer> q_x=new LinkedList<Integer>();
		Queue<Integer> q_y=new LinkedList<Integer>();
		q_x.add(0);
		q_y.add(0);
		visited[0][0]=true;
		
		while(!q_x.isEmpty()) {
			int x=q_x.poll();
			int y=q_y.poll();
			for(int i=0;i<4;i++) {
				int temp_x=x+dx[i];
				int temp_y=y+dy[i];
				if(temp_x>=0&&temp_y>=0&&temp_x<n&&temp_y<m) {
					if(maze[temp_x][temp_y]==1&&visited[temp_x][temp_y]==false) {
						q_x.add(temp_x);
						q_y.add(temp_y);
						
						visited[temp_x][temp_y]=true;
						maze[temp_x][temp_y]=maze[x][y]+1;
					}
				}
			}
		}
	}
	public static void main(String[] args) throws IOException {
		Scanner sc=new Scanner(System.in);
		n=sc.nextInt();
		m=sc.nextInt();
		maze=new int[n][m];
		visited=new boolean[n][m];	//false�� �ʱ�ȭ
		
		for(int i=0;i<n;i++) {
			String str=sc.next();
			for(int j=0;j<m;j++){
				maze[i][j]=(int)str.charAt(j)-48;	//�ѱ��ھ� 1�� ����
			}
		}
		
		bfs();
		
		System.out.print(maze[n-1][m-1]);
	}
}