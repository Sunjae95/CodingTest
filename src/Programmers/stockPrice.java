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
//�� ������ ���ָ��� �� �ְ��� ���������� �Ǵ��ϴ� ����
//���� Ǭ ����� �� ���� �ִ� �ְ��� ���������ʴ� �ִ� ���������� �Ǵ��ϴ� ������ Ǯ����
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
