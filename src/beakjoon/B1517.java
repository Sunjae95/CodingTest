package beakjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B1517 {
	static int cnt=0;
	static int n;
	static long[] arr;
	static long[] tmp;
	
	static void mergeSort(int start,int end) {
		if(start!=end) {
			int mid=(start+end)/2;
			mergeSort(start,mid);
			mergeSort( mid+1, end);	//�迭�ε��� ������ mergeSort�ؼ� mid+1��
			sort(start,end);
		}
	}
	static void sort(int start,int end) {
		int mid=(start+end)/2;
		int s=start, e=mid+1, t=start;
		tmp=new long[end];	//�迭�ε����� �޾ұ⿡ +1�� ����
		while(s<=mid&&e<=end) {	//���� �迭�� �ϼ��Ǹ� break
			if(arr[s]>arr[e]) {
				tmp[t++]=arr[e++];
				cnt+=mid-s+1;	//������ �ε����� �����ο����� �����ε��� ����ŭ ������ ���ߵǱ⶧��
			}else {
				tmp[t++]=arr[s++];
			}
		}
		//�����ִ� �� ����
		if(s>mid) {
			while(e<=end) {
				tmp[t++]=arr[e++];
			}
		}else {
			while(s<=mid) {
				tmp[t++]=arr[s++];
			}
		}
		//�ٽ� arr�� ���
		for(int i=0;i<=tmp.length;i++) {
			arr[i+start]=tmp[i];
		}
	}
	
	
	
	
	public static void main(String[] args) throws IOException {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		//�Է�
		n=Integer.parseInt(br.readLine());
		arr=new long[n];
		StringTokenizer st=new StringTokenizer(br.readLine());
		for(int i=0;i<n;i++) 	arr[i]=Long.parseLong(st.nextToken());
		mergeSort(0,arr.length-1);
		System.out.print(cnt);
	}
}
//�������ڵ�
//
//
//
//
//
//public class B1517 {
//	static int cnt=0;
//	
//	static void mergeSort(int[] arr,int start,int end) {
//		if(start!=end) {
//			int mid=(start+end)/2;
//			mergeSort(arr,start,mid);
//			mergeSort(arr, mid+1, end);	//�迭�ε��� ������ mergeSort�ؼ� mid+1��
//			sort(arr,start,mid,end);
//		}
//	}
//	static void sort(int[] arr,int start,int mid,int end) {
//		int s=start, e=mid+1, t=0;
//		int[] tmp=new int[end+1];	//�迭�ε����� �޾ұ⿡ +1�� ����
//		while(s<=mid&&e<=end) {	//���� �迭�� �ϼ��Ǹ� break
//			if(arr[s]>arr[e]) {
//				tmp[t++]=arr[e++];
//				cnt+=mid-s+1;	//������ �ε����� �����ο����� �����ε��� ����ŭ ������ ���ߵǱ⶧��
//			}else {
//				tmp[t++]=arr[s++];
//			}
//		}
//		//�����ִ� �� ����
//		if(s>mid) {
//			while(e<=end) {
//				tmp[t++]=arr[e++];
//			}
//		}else {
//			while(s<=mid) {
//				tmp[t++]=arr[s++];
//			}
//		}
//		//�ٽ� arr�� ���
//		for(int i=start;i<=end;i++) {
//			arr[i]=tmp[i];
//		}
//	}
//	
//	
//	
//	
//	public static void main(String[] args) throws IOException {
//		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
//		//�Է�
//		int n=Integer.parseInt(br.readLine());
//		int[] arr=new int[n];
//		StringTokenizer st=new StringTokenizer(br.readLine());
//		for(int i=0;i<n;i++) 	arr[i]=Integer.parseInt(st.nextToken());
//		mergeSort(arr,0,arr.length-1);
//		System.out.print(cnt);
//	}
//}