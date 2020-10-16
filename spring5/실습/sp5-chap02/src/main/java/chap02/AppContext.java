package chap02;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// @Configuration : 스프링 설정 클래스
@Configuration
public class AppContext {
	
	// @Bean : 스프링이 관리하는 객체로 등록
	@Bean
	public Greeter greeter() {
		Greeter g = new Greeter();
		g.setFormat("%s, 안녕하세요!");
		return g;
	}

}
