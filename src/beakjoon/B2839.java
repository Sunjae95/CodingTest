package beakjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B2839 {
	public static void main(String[] args) throws NumberFormatException, IOException {
	BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
	int n= Integer.parseInt(br.readLine());
	int count=0;
	while(true) {
		if(n%5==0) {
			System.out.println(n/5+count);
			break;
		}else{
			count++;
			n-=3;
		}
		if(n<0) {
			System.out.println(-1);
			break;
		}
	}
	}
}
//ó�� Ǯ���� ������ 5�� �������� 124�� ������ -1 ��� 3�̳����� 5�� ���� count�ϰ� 3�� ������ count�Ͽ� ���
//�ٵ� 6�̳� 9�� ��ü kg���� ������������ ��������
//����
//5��3�� �ּҰ�������� ũ��? 
//Yes count 3���� ��ü������ 15�� ��
//No 5�� ������ 3�� ����� �ǳ�? 
//	  Yes count 1���� ��ü������ 5�� ��
//    No 3�� ������ 0�� ������? 
//       Yes count 1���� ��ü������ 3�� ��
//		 No count-1
//�ݷ� 16

//�ٸ� ��α׿��� �׸��� �˰����� ����϶���ߴµ� ��� ����ϴ��� ������.
//���� 5�� ����ũ�ϱ� 5�� �������� ����ϴ°� �´� ���������� 3�� �������� ����ϴ°� �ݷʾ���
//�ߵ��ư��°��� Ȯ���Ҽ��־���.

//public class Main {
//	static int del(int n,int count) {
//		if(n>=15&&((n-15)%5==0||(n-15)%3==0)) {
//			n-=15;
//			count+=3;
//			count=del(n,count);
//		}else if(n>=5&&((n-5)%5==0||(n-5)%3==0)){
//			n-=5;
//			count++;
//			count=del(n,count);
//		}else if(n>=3&&((n-3)%5==0||(n-3)%3==0)){
//			n-=3;
//			count++;
//			count=del(n,count);			
//		}else if(n==1||n==2||n==4){
//			count=-1;
//		}
//		
//		return count;
//	}
//	public static void main(String[] args) throws NumberFormatException, IOException {
//		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
//		int n=Integer.parseInt(br.readLine());
//		int count=0;
//		System.out.println(del(n,count));
//	}
//}