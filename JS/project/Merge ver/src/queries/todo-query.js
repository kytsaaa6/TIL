exports.insertTodo = 'INSERT INTO todo SET ?'
exports.getTodo = 'SELECT todo_id, text, user_id, created_at FROM todo where todo_id = ?'
exports.getTodos = 'SELECT todo_id, text, user_id, created_at FROM todo'