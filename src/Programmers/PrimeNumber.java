package Programmers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class PrimeNumber {
	static int cnt=0;
	
	static void find(String[] arr, int n,String before) {
		before+=arr[n];	//���� �߰�
		String st=arr[n];
		arr[n]=null;	//�߰��� üũ
		int tmp=Integer.parseInt(before);	//���ڷ� ��ȯ
		
		for(int i=2;i<=tmp;i++) {	//�Ҽ� �Ǻ�
			if(tmp==i) {
				cnt++;
			}	
			if(tmp%i==0) break;
		}
		for(int i=0;i<arr.length;i++) {
			if(arr[i]!=null) find(arr,i,before);
		}
		arr[n]=st;	//�ٽ� �ǵ������ߵ�
		return;
	}
	public static void main(String[] args) throws IOException {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		//�Է�
		String str=br.readLine();
		String[] s;
		
		s=str.split("");	//�ѱ��ھ� �迭�� ����
		for(int i=0;i<s.length;i++) {
			find(s,i,"");
		}
		System.out.print(cnt);
	}

}

//ex abcd���Է�
//a-b-c-d
// -b-d-c
// -c-b-d
// -c-d-b
// -d-b-c
// -d-c-b
//b-a-c-d
// -a-d-c
// -c-a-d
// -c-d-a
// -d-a-c
// -d-c-a
//�̷������� ���� ���ڿ��� ���� ���ڸ� ��ġ�鼭 �÷��ߵȴٰ� ������
//ó�� ���� �޾ƿ�(�ѹ�����ߴٰ� üũ) �Ҽ����� Ȯ�� ������ cnt++
//for���� ���� üũ�ȵ� ���� ���ϱ�