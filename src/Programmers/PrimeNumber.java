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
		//입력
		String numbers=br.readLine();
		count(numbers, "");
	}

}

//1.모든 숫자의 조합(너무어려움)
//2.각 숫자가 소수가 맞는지 확인

//ex abcd가입력
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
//이런식으로 현재 글자에서 다음 글자를 합치면서 올려야된다고 생각함
//처음 글자 받아옴(한번사용했다고 체크) 소수인지 확인 맞으면 cnt++
//for문을 통해 체크안된 글자 더하기
//앞자리가 0일때 못함
//중복된 수가 나올경우 같이 카운팅돼서 실패..