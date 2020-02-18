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
                JSON.parse(xmlhttp.responseText);
            } else {
                alert('readTodoAjax fail');
            }
        }
        xmlhttp.open("GET", "/api/todo", true);  
        xmlhttp.send();  

	}, createTodoView : function() {

	}, createTodoAjax : function() {

	}, updateTodoView : function() {
	
	}, updateTodoAjax : function() {
	
	}, deleteTodoAjax : function() {
	
	}
}
