package Programmers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class PrimeNumber {
	static int cnt=0;
	
	static void find(String[] arr, int n,String before) {
		before+=arr[n];	//글자 추가
		String st=arr[n];
		arr[n]=null;	//추가후 체크
		int tmp=Integer.parseInt(before);	//숫자로 변환
		
		for(int i=2;i<=tmp;i++) {	//소수 판별
			if(tmp==i) {
				cnt++;
			}	
			if(tmp%i==0) break;
		}
		for(int i=0;i<arr.length;i++) {
			if(arr[i]!=null) find(arr,i,before);
		}
		arr[n]=st;	//다시 되돌려놔야됨
		return;
	}
	public static void main(String[] args) throws IOException {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		//입력
		String str=br.readLine();
		String[] s;
		
		s=str.split("");	//한글자씩 배열에 저장
		for(int i=0;i<s.length;i++) {
			find(s,i,"");
		}
		System.out.print(cnt);
	}

}

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