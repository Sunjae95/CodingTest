package ex;

public class eeee {	
	
	 static String f(String str, int n) {
		  if(n==0) return str;
		  
		 if(n/3==0) {
			 if(n%3==1) str+=1;
			 else str+=2;
			 return str;
		 }else {
			 if(n%3==1)  {
				 str+=1;
				 n/=3;
				 }
			 else if(n%3==2)  {
				 str+=2;
				 n/=3;
				 } 
			 else {
				 str+=4;
				 n=n/3-1;}
		 }
		 
		 return f(str,n);
	 }
	public static void main(String[] args) { 
		int n=10;
		String str="";
		
		str=f(str,n);
		str=(new StringBuffer(str)).reverse().toString();
	
		System.out.print(str);
		
		
	}
}