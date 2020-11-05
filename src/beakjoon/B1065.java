package beakjoon;

import java.util.Scanner;

public class B1065 {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int x=sc.nextInt();
		if(x<100) System.out.print(x);
		else if(x==1000){
			System.out.print(144);
		}else {
			int count=99;
			for(int i=100;i<=x;i++) {
				int a=i/100;
				int b=i%100/10;
				int c=i%10;
				if(a-b==b-c) {
					count++;
				}
			}
			System.out.print(count);
		}
	}

}
