To Do List
=============

Node.JS + Express 정리자료
--------------------------
1. Node.js 란?
 * 구글의 크롬 V8 자바스크립트 엔진을 기반으로한 비동기 IO 를 지원하는 고성능네트워크 서버이다.
 * 프로그래밍 언어로 Javascript를 사용한다.
 
2. Node.js 장점
 * 매우 빠른 고성능 서버
     * 비동기 처리로 인해 퍼포먼스가 증가한다.
 * 한가지 언어(Javascript)를 사용하여 개발 할 수 있다.
     * 서버-클라이언트 모두를 개발할 수 있다.
 * 광범위한 커뮤니티
 * 탁월한 생산성

3. Express.js 란?
 * Express.js는 Node.js를 위한 빠르고 간편한 웹 프레임워크입니다.
 * 다양한 웹프레임웍이 있지만 현재까지 가장 많이 사용하는 것이 바로 익스프레스 엔진입니다.
 * "Express.js는 Node.js의 핵심 모듈인 http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크다. 
 그러한 컴포넌트를 미들웨어(middleware)라고 하며, 설정보다는 관례(convention over configuration)와 같은 
 프레임워크의 철학을 지탱하는 주춧돌에 해당한다. 즉, 개발자들은 특정 프로젝트에 필요한 라이브러리를 어떤 것이든 
 자유롭게 선택할 수 있으며, 이는 개발자들에게 유연함과 수준 높은 맞춤식 구성을 보장한다."


4. Express 디렉터리 구조
https://miro.medium.com/max/2145/1*vOioyVJnwWIDiFEJt3cMTA.png
 
 * bin/www : 서버를 실행할 때 연결될 port 번호 저장
 * config/ : DB 연결정보, API 키값 등 환경변수 정보 파일을 담고 있는 폴더
 * public/ : css, html 같은 정적 파일을 위한 폴더
 * routes/ : 라우팅을 위한 폴더. 라우팅 리소스 별로 모듈을 만들어 라우팅 로직을 구현,
            클라이언트에서 요청 별로 어떤 로직을 수행할지 정해놓은 파일이라고 생각하시면 됩니다. (java에서는 Controller 역할)
 * views/  : request 요청에 대한 로직을 처리한 후 클라이언트에 응답을 보낼 때 html 코드로 변환해서 반환하는 파일을 정의한 폴더
 * app.js : express 서버가 어떻게 동작해야하는지 규정하는 앱파일
     * morgan:  http 리퀘스트에 대해 로깅하는 모듈
     * body-parser: http 요청 중 POST 요청의 데이터에 접근하기 위한 모듈
     * cookie-parser: http로 요청한 클라이언트 쿠키 정보에 접근하기 위한 모듈
     * express.static(… ‘public’): 정적 파일 호스팅을 위한 폴더를 설정
     * app.use(‘/’, routes): 라우팅 설정. 세부 라우팅은 /routes 폴더에 구현
 * package.json : 프로그램 이름, 버전, 필요한 모듈 등 노드 프로그램의 정보를 기술 (NPM은 이 정보를 참고하여 필요한 모듈을 관리)


5. 라우팅 레벨 미들웨어
 * app.METHOD(PATH, HANDLER) - 앱에 대한 Request가 발생할 때 마다 실행 
    -> router 미들웨어를 사용하여 라우팅 파일 단위로 모듈화 - 라우터 단위로 Request가 발생하면 실행
 * request - use / get / post / put / delete / patch
 * response
     * res.send(): 문자열로 응답
     * res.json(): 제이슨(Json) 객체로 응답
     * res.render():  html 변환 템플릿을 렌더링(ejs)
     * res.sendfile(): 파일 다운로드




* 애플리케이션 레벨 미들웨어
* 라우터 레벨 미들웨어
    * 라우터 미들웨어는 사용자로부터 요청받은 req 객체를 처리한 후 응답 객체 res 를 리턴하는 방식으로 동작
* 오류 처리 미들웨어
* 써드파티 미들웨어


API code
--------
* app.js
```
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
// ...
app.use(methodOverride()); // PUT, DELETE를 지원 안 하는 클라이언트를 위해
app.use(bodyParser.json()); // body의 데이터를 json형식으로 받음
app.use(bodyParser.urlencoded({ extended: true })); // qs모듈로 쿼리스트링 파싱
```

* 생성화면
```
router.post("/api/todo", function (req, res) {
  console.log("TDL 생성 진행")
  var body = req.body;
  getConnection().query('insert into todolist(user_id,text) values (?,?)', [body.user_id, body.text], function () {
  //응답
  res.redirect('/todo');
})
```

* 리스트
```
router.get("/api/todo/:id", function (req, res) {
  console.log("TDL 읽기")
  getConnection().query('select * from todolist where id = ?', [req.params.id], function (error, result) {
    res.json({ id: });
    })
  })
});
```
