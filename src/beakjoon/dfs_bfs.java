package beakjoon;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

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
		int n,m,v;
		Scanner input=new Scanner(System.in);
		
		n=input.nextInt();
		m=input.nextInt();
		v=input.nextInt();
		
		@SuppressWarnings("unchecked")
		ArrayList<Integer>[] graph=new ArrayList[n+1];
		for(int i=0;i<graph.length;i++) graph[i]=new ArrayList<Integer>();
		boolean[] visited=new boolean[n+1];
		//간선입력
		for(int i=0;i<m;i++) {
			int x=input.nextInt();
			int y=input.nextInt();
			graph[x].add(y);
			graph[y].add(x);
		}
		//정렬
		for(int i=0;i<graph.length;i++) Collections.sort(graph[i]);
		
		dfs(graph,visited,v);
		System.out.println("");
		Arrays.fill(visited, false);
		bfs(graph,visited,v);
		
	}
}
