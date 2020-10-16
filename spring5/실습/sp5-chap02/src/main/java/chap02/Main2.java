package chap02;

//AnnotationConfigApplicationContext 
//: 자바 설정에서 정보를 읽어와 빈 객체를 생성하고 관리 한다.
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


//ApplicationContext(또는 BeanFactory)는 빈 객체의 생성, 초기화, 보관, 제거 등을 관리하고 있어서
//ApplicationContext를 컨데이터(Container) 라고도 부른다.

//AnnotationConfigApplicationContext : 자바 애노테이션을 이용하여 클래스로부터 객체 설정 정보를 가져온다.
//GenericXmlApplicationContext : XML로부터 객체 설정 정보를 가져온다.
//GenericGroovyApplicationContext : 그루비 코드를 이용해 설정 정보를 가져온다.
public class Main2 {

	public static void main(String[] args) {
		
		// AppContext에 정의한 @Bean 설정 정보를 읽어와 Greeter 객체를 생성하고 초기화
		// 자바 애노테이션을 이용하여 클래스로 부터 객체 설정 정보를 가져온다. 
		AnnotationConfigApplicationContext ctx = 
				new AnnotationConfigApplicationContext(AppContext.class);
		
		// getBean() 메서드는 자바 설정을 읽어와 생성한 빈 객체를 검색할 때 사용
		// 첫번째 파라미터 : @Bean 메서드 이름인 빈 객체의 이름
		// 두번째 파라미터 : 검색할 빈 객체의 타입
		Greeter g = ctx.getBean("greeter", Greeter.class);
		String msg = g.greet("스프링");
		System.out.println(msg);
		ctx.close();
	}
}
