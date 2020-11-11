package beakjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class B14891 {
	static LinkedList<Integer>[] tobni;

	
	static void rotation(int where,int d) {
		if(d==1) {
			int tmp=tobni[where].pollLast();
			tobni[where].addFirst(tmp);
		}else {
			int tmp=tobni[where].pollFirst();
			tobni[where].addLast(tmp);
		}
	}
	static void left(int where,int d) {
		int tmp=where-1;
		if(tmp>0) {
			if(tobni[tmp].get(2)!=tobni[where].get(6)) {
				d*=-1;
				left(tmp,d);
				rotation(tmp,d);
			}
		}
	}
	static void right(int where,int d) {
		int tmp=where+1;
		if(tmp<5) {
			if(tobni[tmp].get(6)!=tobni[where].get(2)) {
				d*=-1;
				right(tmp,d);
				rotation(tmp,d);
			}
		
		}
	}

	@SuppressWarnings("unchecked")
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer token;
		tobni= new LinkedList[5];
		//입력
		tobni[0]=new LinkedList<Integer>();
		for(int i=1;i<tobni.length;i++) {
			tobni[i]=new LinkedList<Integer>();
			String str=br.readLine();
			for(int j=0;j<str.length();j++) {
				int x=str.charAt(j)-'0';
				tobni[i].add(x);
			}
		}
	
		//톱니회전
		int k=Integer.parseInt(br.readLine());
		
		for(int i=0;i<k;i++) {
			token=new StringTokenizer(br.readLine());
			int where=Integer.parseInt(token.nextToken());
			int d=Integer.parseInt(token.nextToken());
			
			left(where, d);
			right(where, d);
			rotation(where,d);
		}
		
		
		int ans=0;
		if(tobni[1].get(0)==1) ans+=1;
		if(tobni[2].get(0)==1) ans+=2;
		if(tobni[3].get(0)==1) ans+=4;
		if(tobni[4].get(0)==1) ans+=8;
		System.out.print(ans);
	}

}
