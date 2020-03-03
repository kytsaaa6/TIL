// ToDoList JS

// 문서 로드 시 실행 이벤트 정의
$(document).ready(function() {

    // 저장 버튼 이벤트
    $("#addBtn").click(function() {
        TodoListController.createTodoAjax();
    });

    // 수정 버튼 이벤트
    $("#editBtn").click(function() {
        TodoListController.updateTodoView();
    });

    // 저장 버튼 이벤트
    $("#saveBtn").click(function() {
        TodoListController.updateTodoAjax();
    });

    // 취소 버튼 이벤트
    $("#cancelBtn").click(function() {
        TodoListController.cancelUpdate();
    });

    // 삭제 버튼 이벤트
    $("#removeBtn").click(function() {
        TodoListController.deleteTodoAjax();
    });

    // 모두 삭제 버튼 이벤트
    $("#allDelBtn").click(function() {
        TodoListController.allDelTodoAjax();
    });

    TodoListController.initTodo();

});

const TodoListController = {

    initTodo() {

        TodoListController.readTodoAjax();

    }, readTodoAjax() {
              
        const param = {
            userId: $('#userId').val()
        }

        $.ajax({

            url: '/api/todos',
            type: 'GET',
            //data: param,
            //dataType: ,
            success: function(data) {
                
                let listHtml = '';

                for(let i=0; i<data.length; i++) {
                    listHtml += `<div class="Todo_Input item">
                                    <input type="hidden" id="text" name="text" value=${data.todoId}/>
                                    <input type="hidden" id="text" name="text" value=${data.created_at}/>
                                    <input type="text" id="text" name="text" value=${data.text}/>
                                    <span class="btn edit" id="editBtn" name="editBtn">수정</sapn>
                                    <span class="btn complete" id="saveBtn" name="saveBtn">완료</span>
                                    <span class="btn remove" id="removeBtn" name="removeBtn">삭제</span>
                                    <span class="btn cancel" id="cancelBtn" name="cancelBtn">취소</span>
                                    </div>`
                }

                $(".Todo_Input list").html(listHtml);

                $('#editBtn').show();
                $('#saveBtn').hide();
                $('#cancelBtn').hide();
                $('#removeBtn').show();
            }

        });

    }, createTodoAjax() {

        const param = {
            userId: $('#userId').val(),
            text: $('#text').val()
        }

        $.ajax({

            url: '${pageContext.request.contextPath}',
            type: 'POST',
            data: param,
            //dataType: ,
            success: function(data) {
                
                if(data.msg == 'success') {

                    alert('추가되었습니다.')
                    TodoListController.readTodoAjax();
                }
            }

        });

    }, deleteTodoAjax() {

        $.ajax({

            url: '${pageContext.request.contextPath}/${todo_id}',
            type: 'POST',
            //dataType: ,
            success: function(data) {
                
                if(data.msg == 'success') {

                    alert('삭제되었습니다.')
                    TodoListController.readTodoAjax();
                }
            }

        });

    }, updateTodoView() {

        $('#editBtn').hide();
        $('#saveBtn').show();
        $('#cancelBtn').show();
        $('#removeBtn').hide();


    }, updateTodoAjax() {
        
        const param = {
            userId: $('#userId').val(),
            text: $('#text').val()
        }

        $.ajax({

            url: '${pageContext.request.contextPath}',
            type: 'POST',
            data: param,
            //dataType: ,
            success: function(data) {
                
                if(data.msg == 'success') {

                    alert('추가되었습니다.')
                    TodoListController.readTodoAjax();
                }
            }

        });

    }, cancelUpdate() {

        $('#editBtn').show();
        $('#saveBtn').hide();
        $('#cancelBtn').hide();
        $('#removeBtn').show();
    }
}

