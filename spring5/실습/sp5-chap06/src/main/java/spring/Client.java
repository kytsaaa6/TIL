package spring;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class Client implements InitializingBean, DisposableBean {

	private String host;

	public void setHost(String host) {
		this.host = host;
	}
	// 1. 초기화
	@Override
	public void afterPropertiesSet() throws Exception {
		System.out.println("Client.afterPropertiesSet() 실행");
	}
	// 2. 
	public void send() {
		System.out.println("Client.send() to " + host);
	}
	// 3. 소멸
	@Override
	public void destroy() throws Exception {
		System.out.println("Client.destroy() 실행");
	}

}
