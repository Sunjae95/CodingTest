package beakjoon;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class B1966 {
	static int t,n,m;
	
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		t=sc.nextInt();
		for(int i=0;i<t;i++) {
			n=sc.nextInt();	//��������
			m=sc.nextInt();	//���° �ε����� �̾ƾ��ϴ���
			Queue<Integer> q= new LinkedList<>();
			//�Է¹ޱ�
			int best=0; //�߿䵵
			int ans=0;
			for(int j=0;j<n;j++) {
				int x=sc.nextInt();
				q.add(x);
				if(x>best) best=x;	//�ʱ� �߿䵵 �÷���
				if(j==m) ans=x;	//�̾ƾߵǴ� ���� ����
			}
			int count=0;	//������������ �˷��ִ°�
			while(true) {	
				if(best==q.peek()) {	//�켱������� ���� ���
					if(ans==q.peek()&&m==0) {	//����Ʈ
						count++;
						System.out.println(count) ;
						break;
					}else {
					q.remove();
					count++;
					m--;
					best=0;
					for(int k=0;k<q.size();k++) {	//������� �켱���� ã��
						int tmp=q.poll();
						if(tmp>best) best=tmp;
						q.add(tmp);
					}
					}
				}else if(best!=q.peek()) {	//�켱�����ƴҽ� �ڷκ�����
					int tmp=q.poll();
					q.add(tmp);
					if(m==0) m=q.size()-1;
					else m--;
				}
			}
		}
	}
}

//�� testcase�� ���Ͽ� n�� m�� �Է¹޴´�
//���⼭ �߿��Ѱ��� m!! m�� �츮�� �̾ƾߵ� �����̹Ƿ� �����̸� ������ �켱������ �����Ѿߵ�
//�׷��� index��� ������ ����� ó�� m�� �Է¹����� �켱������ �Է¹���

//���� ���ϴ� ��ġ�� ������ ���������� while���ݺ�
//������ �ΰ��� 1.������� �켱������ ť�� ó���� ������ 2.������� �켱������ ť�� ó���� �ٸ���  

//�������� �ΰ����� ���� ��ó���� ���� ���ϴ¹������� �ƴ���
//���ϴ� ������ ��� count++ �� count ��� �� break
//�ƴ� ��� ť���� ������ count++ �Ŀ� ������� �켱���� Ž���� best�� ����

//�ٸ���� ��ó������ ť���� �ǵڷ� ������ m�� 0�̳� �ƴϳĿ� ���� �������ָ�ȴ�.