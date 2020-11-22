package collection;

import java.util.*;

// ArrayList 예제1
// ArrayList 기본 메서드 실습
public class ArrayListEx1 {

	public static void main(String[] args) {
		
		ArrayList list1 = new ArrayList(10);
		list1.add(new Integer(5));
		list1.add(new Integer(4));
		list1.add(new Integer(2));
		list1.add(new Integer(0));
		list1.add(new Integer(1));
		list1.add(new Integer(3));
		
		// subList - fromIndex부터 toIndex사이에 저장된 객체를 반환
		// list1의 index 1~4 사이에 저장된 객체로 list2를 생성
		ArrayList list2 = new ArrayList(list1.subList(1,4));
		print(list1,list2);
		
		// list1과 list2를 정렬
		Collections.sort(list1);
		Collections.sort(list2);
		print(list1,list2);
		
		// list2가 list1안에 포함되어 있는지 확인
		System.out.println("list1.containsAll(list2):"+ list1.containsAll(list2));
		System.out.println("list1.containsAll(list2):"+ list2.containsAll(list1));
		
		list2.add("B");
		list2.add("C");
		
		// index 3부터 뒤로 한칸씩 밀림
		list2.add(3, "A");
		print(list1,list2);
		
		list2.add(3, "AA");
		print(list1,list2);
		
		// list1에서 list2와 겹치는 부분만 남기고 나머지는 삭제
		System.out.println("list1.retainAll(list2):"+list1.retainAll(list2));
		
		print(list1,list2);
		
		// list2에서 list1에 포함된 객체들을 삭제
		// 한 요소가 삭제될 때마다 나머지 요소들이 자리이동을 하기 때문에
		// 감소시키면서 반복시켜야 올바른 결과가 나옴 
		for(int i=list2.size()-1; i>=0; i--) {
			if(list1.contains(list2.get(i))) {
				list2.remove(i);
			}
		}
		
		print(list1, list2);
		
	}
	
	static void print(ArrayList list1, ArrayList list2) {
		System.out.println("list1:"+list1);
		System.out.println("list2:"+list2);
		System.out.println();
		
	}

}
