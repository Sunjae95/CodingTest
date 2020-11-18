package beakjoon;
import java.util.Scanner;

public class B1517 {
    static int n;
    static long[] arr;
    static long[] arrcopy;
    static long count = 0;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        arr = new long[n];
        arrcopy = new long[n];
        for (int i = 0; i <n ; i++) {
            arr[i] =sc.nextInt();
        }

        count =0;
        Merge(0,n-1);

        System.out.println(count);
    }

    private static void Merge(int left, int right){
        if(left != right){
            int mid =(left+right)/2;
            Merge(left, mid);
            Merge(mid+1, right);
            MergeSort(left,right);
        }
    }

    private static  void MergeSort(int left , int right){
        int mid =(left+right)/2;
        int i  = left;
        int j =  mid + 1;
        int k = left;

        //이제 합친다.
        while(i <= mid && j<=right){
            // i가 mid로 오고, j가 맨끝으로 가면 반복문을 멈춘다.
            if(arr[i] > arr[j]){ // 왼쪽 있는 배열이 더 크면 더작은 오른쪽에 있는 배열을 arrcopy에 담는다.
                arrcopy[k++]=arr[j++];
                count+= mid-i+1;
            }else {
                // 반대의 경우
                arrcopy[k++] =  arr[i++];
            }
        }

        if(i>mid){ //오른쪽에 배열이 남은 경우
            while(j<=right){
                arrcopy[k++] = arr[j++];
            }
        }else{// 왼쪽에 배열이 남은 경우.
            while(i<=mid){
                arrcopy[k++] = arr[i++];
            }
        }


        //arrcopy에 담아놓은 배열을 arr배열에 다시 담는다.
        for (int h = left; h <= right ; h++) {
            arr[h] = arrcopy[h];
        }


    }


}
//내가한코드 아직 index에 익숙하지 않은거 같음
//mergeSort할때 left값과 right값을 제대로 이해하고 설정해야 될거같음
//https://log-laboratory.tistory.com/72 참고 

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