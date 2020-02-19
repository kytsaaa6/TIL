// ToDoList JS

// 문서 로드 시 실행 이벤트 정의
window.onload = function() {
    
    // 저장 버튼 이벤트
    document.getElementById('saveBtn').addEventListener('click', TodoListController.createTodoAjax());
    // 수정 버튼 이벤트
    document.getElementById('editBtn').addEventListener('click', TodoListController.updateTodoView());
    // 삭제 버튼 이벤트
    document.getElementById('removeBtn').addEventListener('click', TodoListController.deleteTodoAjax());
    // 모두 삭제 버튼 이벤트
    document.getElementById('allDelBtn').addEventListener('click', TodoListController.initTodo());

//    document.getElementById('').addEventListener('click', TodoListController.initTodo());

//   document.getElementById('').addEventListener('click', TodoListController.initTodo());

//    document.getElementById('').addEventListener('click', TodoListController.initTodo());

//    document.getElementById('').addEventListener('click', TodoListController.initTodo());


    TodoListController.initTodo();
}

var TodoListController = {

	initTodo : function() {

        TodoListController.readTodoAjax();

	}, readTodoAjax : function() {
                
        //객체 생성부분
        var xmlhttp; 
        if (window.XMLHttpRequest) {  
            xmlhttp = new XMLHttpRequest();
        } 
        else {  
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Ajax구현부분
        xmlhttp.onreadystatechange = function() {  
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //통신 성공시 구현부분

                //JSON파싱
                //JSON.parse(xmlhttp.responseText);
                //UTF-8 변환
                //encodeURIComponent('')

                document.getElementById('text').value = xmlhttp.responseText.text;

            } else {
                //alert('readTodoAjax fail');
            }
        }
        var userId = sessionStorage.getItem('userId');

        xmlhttp.open("GET", "/api/todo", true);  
        xmlhttp.send(userId);  

	//}, createTodoView : function() {

	}, createTodoAjax : function() {

        //객체 생성부분
        var xmlhttp;  
        if (window.XMLHttpRequest) {  
            xmlhttp = new XMLHttpRequest();
        } 
        else {  
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Ajax구현부분
        xmlhttp.onreadystatechange = function() {  
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //통신 성공시 구현부분

                //JSON파싱
                //JSON.parse(xmlhttp.responseText);
                
                alert('저장이 완료되었습니다.');

            } else {
                //alert('createTodo fail');
            }
        }
        var todoText = document.getElementById('text').value;

        xmlhttp.open("POST", "/api/todo", true);  
        xmlhttp.send(todoText);

	//}, updateTodoView : function() {
	
	//}, updateTodoAjax : function() {
	
	}, deleteTodoAjax : function() {

        //객체 생성부분
        var xmlhttp;  
        if (window.XMLHttpRequest) {  
            xmlhttp = new XMLHttpRequest();
        } 
        else {  
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Ajax구현부분
        xmlhttp.onreadystatechange = function() {  
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //통신 성공시 구현부분

                //JSON파싱
                //JSON.parse(xmlhttp.responseText);
                
                alert('삭제가 완료되었습니다.');

            } else {
                //alert('createTodo fail');
            }
        }
        var todoId = document.getElementById('id').value;

        xmlhttp.open("POST", "/api/todo", true);  
        xmlhttp.send('id='+todoId);
	}
}
