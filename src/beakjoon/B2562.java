package beakjoon;

import java.util.Scanner;

public class B2562 {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		int check=0;
		int max=0;
		
		for(int i=0;i<9;i++) {
			int x=sc.nextInt();
			if(max<x) {
				check=i+1;
				max=x;
			}
		}
		System.out.println(max);
		System.out.println(check);
	}

}
