To Do List
=============

Express 정리자료
--------------------
https://miro.medium.com/max/2145/1*vOioyVJnwWIDiFEJt3cMTA.png

* 애플리케이션 레벨 미들웨어
* 라우터 레벨 미들웨어
- 라우터 미들웨어는 사용자로부터 요청받은 req 객체를 처리한 후 응답 객체 res 를 리턴하는 방식으로 동작
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
