package assembler;

import spring.ChangePasswordService;
import spring.MemberDao;
import spring.MemberRegisterService;

// 조립기는 객체를 생성하고 의존 객체를 주입하는 기능을 제공
// 특정 객체가 필요한 곳에 객체를 제공
public class Assembler {

	private MemberDao memberDao;
	private MemberRegisterService regSvc;
	private ChangePasswordService pwdSvc;

	// 사용할 객체들을 생성자에 정의
	// 의존 객체를 변경하려면 조립기의 코드만 수정하면 됨
	public Assembler() {
		memberDao = new MemberDao();
		regSvc = new MemberRegisterService(memberDao);
		pwdSvc = new ChangePasswordService();
		pwdSvc.setMemberDao(memberDao);
	}

	public MemberDao getMemberDao() {
		return memberDao;
	}

	public MemberRegisterService getMemberRegisterService() {
		return regSvc;
	}

	public ChangePasswordService getChangePasswordService() {
		return pwdSvc;
	}

}
