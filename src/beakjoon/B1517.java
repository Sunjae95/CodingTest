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
			mergeSort( mid+1, end);	//배열인덱스 끝까지 mergeSort해서 mid+1함
			sort(start,end);
		}
	}
	static void sort(int start,int end) {
		int mid=(start+end)/2;
		int s=start, e=mid+1, t=start;
		tmp=new long[end];	//배열인덱스로 받았기에 +1을 해줌
		while(s<=mid&&e<=end) {	//한쪽 배열이 완성되면 break
			if(arr[s]>arr[e]) {
				tmp[t++]=arr[e++];
				cnt+=mid-s+1;	//오른쪽 인덱스가 앞으로오려면 왼쪽인덱스 수만큼 앞으로 가야되기때문
			}else {
				tmp[t++]=arr[s++];
			}
		}
		//남아있는 수 정리
		if(s>mid) {
			while(e<=end) {
				tmp[t++]=arr[e++];
			}
		}else {
			while(s<=mid) {
				tmp[t++]=arr[s++];
			}
		}
		//다시 arr에 담기
		for(int i=0;i<=tmp.length;i++) {
			arr[i+start]=tmp[i];
		}
	}
	
	
	
	
	public static void main(String[] args) throws IOException {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		//입력
		n=Integer.parseInt(br.readLine());
		arr=new long[n];
		StringTokenizer st=new StringTokenizer(br.readLine());
		for(int i=0;i<n;i++) 	arr[i]=Long.parseLong(st.nextToken());
		mergeSort(0,arr.length-1);
		System.out.print(cnt);
	}
}
//내가한코드
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
//			mergeSort(arr, mid+1, end);	//배열인덱스 끝까지 mergeSort해서 mid+1함
//			sort(arr,start,mid,end);
//		}
//	}
//	static void sort(int[] arr,int start,int mid,int end) {
//		int s=start, e=mid+1, t=0;
//		int[] tmp=new int[end+1];	//배열인덱스로 받았기에 +1을 해줌
//		while(s<=mid&&e<=end) {	//한쪽 배열이 완성되면 break
//			if(arr[s]>arr[e]) {
//				tmp[t++]=arr[e++];
//				cnt+=mid-s+1;	//오른쪽 인덱스가 앞으로오려면 왼쪽인덱스 수만큼 앞으로 가야되기때문
//			}else {
//				tmp[t++]=arr[s++];
//			}
//		}
//		//남아있는 수 정리
//		if(s>mid) {
//			while(e<=end) {
//				tmp[t++]=arr[e++];
//			}
//		}else {
//			while(s<=mid) {
//				tmp[t++]=arr[s++];
//			}
//		}
//		//다시 arr에 담기
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
//		//입력
//		int n=Integer.parseInt(br.readLine());
//		int[] arr=new int[n];
//		StringTokenizer st=new StringTokenizer(br.readLine());
//		for(int i=0;i<n;i++) 	arr[i]=Integer.parseInt(st.nextToken());
//		mergeSort(arr,0,arr.length-1);
//		System.out.print(cnt);
//	}
//}