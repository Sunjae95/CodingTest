package beakjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B10870 {

	public static void main(String[] args) throws IOException {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		int n= Integer.parseInt(br.readLine());
		int[] arr= new int[21];
		arr[1]=1;
		for(int i=2;i<=n;i++) {
			arr[i]=arr[i-1]+arr[i-2];
		}
		System.out.println(arr[n]);
	}
}

//�Ǻ���ġ ��
//arr[i]=arr[i-1]+arr[i-2]�� �˰������� ���� �ذ�ȴ�!