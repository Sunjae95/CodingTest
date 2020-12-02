package beakjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B2947 {
    public static void main(String args[]) throws IOException {
        int[] arr = new int[5];
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] nums;
 
        nums = br.readLine().split(" ");
        //input string=>int
        for (int i = 0; i < arr.length; i++)
            arr[i] = Integer.parseInt(nums[i]);
 
        for(int i=0; i<arr.length-1;i++){
            for (int j=0; j<arr.length-1; j++){
                if(arr[j]>arr[j+1]){
                	int tmp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=tmp;
                    for(int p :arr)
                        System.out.print(p+" ");
                    System.out.println();
                }
            } 
        } 
    }
}

//BubbleSort ¹®Á¦
