package Programmers;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class carpet {

	public static void main(String[] args) {
	BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
	int brown=24;
	int yellow = 24;
	int[] answer=new int[2];
	for(int i=1;i<=yellow;i++) {
		if(yellow%i==0) {
			int a= yellow/i;
			int b=i;
			if(brown==(2*a+2*b+4)) {
				answer[0]=b+2;
				answer[1]=a+2;
			}
		}
	}
	System.out.println(answer[0]+" "+answer[1]);
	}

}
