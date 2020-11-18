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

        //���� ��ģ��.
        while(i <= mid && j<=right){
            // i�� mid�� ����, j�� �ǳ����� ���� �ݺ����� �����.
            if(arr[i] > arr[j]){ // ���� �ִ� �迭�� �� ũ�� ������ �����ʿ� �ִ� �迭�� arrcopy�� ��´�.
                arrcopy[k++]=arr[j++];
                count+= mid-i+1;
            }else {
                // �ݴ��� ���
                arrcopy[k++] =  arr[i++];
            }
        }

        if(i>mid){ //�����ʿ� �迭�� ���� ���
            while(j<=right){
                arrcopy[k++] = arr[j++];
            }
        }else{// ���ʿ� �迭�� ���� ���.
            while(i<=mid){
                arrcopy[k++] = arr[i++];
            }
        }


        //arrcopy�� ��Ƴ��� �迭�� arr�迭�� �ٽ� ��´�.
        for (int h = left; h <= right ; h++) {
            arr[h] = arrcopy[h];
        }


    }


}
//�������ڵ� ���� index�� �ͼ����� ������ ����
//mergeSort�Ҷ� left���� right���� ����� �����ϰ� �����ؾ� �ɰŰ���
//https://log-laboratory.tistory.com/72 ���� 

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