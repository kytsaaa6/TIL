const TodoService = require('../services/todo-service');


exports.insertTodo = async (req, res, next) => {
    let { text, user_id } = req.params;
    try {
        let ins = await TodoService.insertTodo(text, user_id)
        return res.json(ins);
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getTodo = async (req, res, next) => {
    let { todoId } = req.params;
    try {
        let rows = await TodoService.getTodo(todoId);
        return res.json(rows);
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getTodos = async (req, res, next) => {
    try {
        let rows = await TodoService.getTodos();
        return res.json(rows);
    } catch (err) {
        return res.status(500).json(err)
    }
}