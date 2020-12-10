package Programmers;

import java.util.LinkedList;
import java.util.Queue;

public class stockPrice {

	public static void main(String[] args) {
		int[] prices= {1,2,3,2,3};
		int[] answer=new int[prices.length];
		
		Queue<Integer> q=new LinkedList<>();
		q.add(prices[0]);
		for(int i=1;i<prices.length;i++) {
			for(int j=0;j<q.size();j++) {
				int tmp= q.poll();
				if(tmp==-1) {
					q.add(tmp);
					continue;
				}else if(tmp<=prices[i]) {
					answer[j]++;
					q.add(tmp);
				}
				else if(tmp>prices[i]) {
					tmp=-1;
					q.add(tmp);
				}
			}
			q.add(prices[i]);
		}
	
		for(int i:answer) {
			System.out.println(i);
		}
		
	}

}
//이 문제는 몇주만에 내 주가가 떨어지는지 판단하는 문제
//내가 푼 방식은 내 현재 있는 주가가 떨어지지않는 주는 몇주인지를 판단하는 문제로 풀었음
//int[] prices= {1,2,3,2,3};
//int[] answer=new int[prices.length];
//
//Queue<Integer> q=new LinkedList<>();
//q.add(prices[0]);
//for(int i=1;i<prices.length;i++) {
//	for(int j=0;j<q.size();j++) {
//		int tmp= q.poll();
//		if(tmp<=prices[i]) {
//			answer[j]++;
//		}
//		q.add(tmp);
//	}
//	q.add(prices[i]);
//}
//
//for(int i:answer) {
//	System.out.println(i);
//}
