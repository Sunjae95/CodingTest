package Programmers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class PrimeNumber {
	static int cnt=0;
	
	static void count(String numbers,String tmp) {
		for(int i=0;i<numbers.length();i++) {
			tmp+=numbers.charAt(i);
			String origin=numbers.substring(0, i)+numbers.substring(i+1, numbers.length());
			System.out.println(tmp);
			count(origin,tmp);	
			tmp.substring(tmp.length()-1,tmp.length());
		}
	}

	
	public static void main(String[] args) throws IOException {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		//�Է�
		String numbers=br.readLine();
		count(numbers, "");
	}

}

//1.��� ������ ����(�ʹ������)
//2.�� ���ڰ� �Ҽ��� �´��� Ȯ��

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
//���ڸ��� 0�϶� ����
//�ߺ��� ���� ���ð�� ���� ī���õż� ����..