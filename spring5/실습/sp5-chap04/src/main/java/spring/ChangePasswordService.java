package spring;

import org.springframework.beans.factory.annotation.Autowired;

public class ChangePasswordService {
	
	// 설정 클래스에서 의존을 주입하지 않아도 
	// 스프링이 해당 타입의 빈 객체를 찾아서 필드에 할당
	@Autowired
	private MemberDao memberDao;

	public void changePassword(String email, String oldPwd, String newPwd) {
		Member member = memberDao.selectByEmail(email);
		if (member == null)
			throw new MemberNotFoundException();

		member.changePassword(oldPwd, newPwd);

		memberDao.update(member);
	}

	public void setMemberDao(MemberDao memberDao) {
		this.memberDao = memberDao;
	}

}
