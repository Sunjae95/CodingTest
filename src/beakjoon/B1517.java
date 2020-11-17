package beakjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B1517 {
	static int stoi(String s) {return Integer.parseInt(s);}
	static int cnt=0;
	
	static void mergeSort(int[] arr) {
		sort(arr, 0,arr.length);
	}
	
	static void sort(int[] arr, int start,int end) {
		if(start<end) {
			int mid=(start+end)/2;
			sort(arr,start,mid);
			sort(arr,mid,end);
			merge(arr,start,mid,end);
		}
	}
	
	static void merge(int[] arr,int start, int mid,int end) {
		int[] temp=new int[end-start];
		int t=0, s=start, e=mid;
		while(s<mid&&e<end) {
			if(arr[s]<=arr[e]) {
				temp[t++]=arr[s++];
				cnt++;
			}else {
				temp[t++]=arr[e++];
				cnt++;
			}
		}
		while(s<mid) {
			temp[t++]=arr[s++];
		}
		while(e<end) {
			temp[t++]=arr[e++];
		}
		for(int i=start;i<end;i++) {
			arr[i]=temp[i-start];
		}
	}
	
	public static void main(String[] args) throws Exception {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int n=stoi(br.readLine());
		int[] arr=new int[n];
		st=new StringTokenizer(br.readLine());
		for(int i=0;i<n;i++) 	arr[i]=stoi(st.nextToken());
		mergeSort(arr);
		System.out.print(cnt);
	}
	
}
//merge sort까지 됐지만 cnt를 세는 방법을 모르겠음
