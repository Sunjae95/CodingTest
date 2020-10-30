package beakjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
import java.util.StringTokenizer;

public class dfs_bfs {
	static void dfs(ArrayList<Integer>[] graph, boolean[] visited, int v) {
		visited[v]=true;
		System.out.print(v+" ");
		
		for(int a:graph[v]) {
			if(!visited[a]) dfs(graph,visited,a);
		}
	}
	static void bfs(ArrayList<Integer>[] graph, boolean[] visited, int v) {
		Queue<Integer> q=new LinkedList<Integer>();
		q.add(v);
		visited[v]=true;
		while(!q.isEmpty()) {
			v=q.poll();
			System.out.print(v+" ");
			for(int a: graph[v]) {
				if(!visited[a]) {
					q.add(a);
					visited[a]=true;
				}
			}
		}
	}
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // �� �� �Է�
		StringTokenizer str = new StringTokenizer(br.readLine()); // ��ū���� �Ľ�
		int n = Integer.parseInt(str.nextToken()); // ���� ����
		int m = Integer.parseInt(str.nextToken()); // ���� ����
		int v = Integer.parseInt(str.nextToken()); // Ž���� ������ ���� ��ȣ

		@SuppressWarnings("unchecked")
		ArrayList<Integer>[] graph=new ArrayList[n+1];
		for(int i=0;i<graph.length;i++) graph[i]=new ArrayList<Integer>();
		
		for(int i=0; i<m; i++) {
			str = new StringTokenizer(br.readLine()); // ��� �Է¹���
			int x = Integer.parseInt(str.nextToken());
			int y = Integer.parseInt(str.nextToken());
			graph[x].add(y);
			graph[y].add(x);
		}
		br.close();	
		
		boolean[] visited=new boolean[n+1];
		
		//����
		for(int i=0;i<graph.length;i++) Collections.sort(graph[i]);
		
		dfs(graph,visited,v);
		System.out.println("");
		Arrays.fill(visited, false);
		bfs(graph,visited,v);
		
	}
}
