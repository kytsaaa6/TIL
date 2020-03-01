const pool = require("../database/pool.js");
const TodoQuery = require("../queries/todo-query.js")

exports.insertTodo = async (text) => {
    try {
        let data = await pool.query(TodoQuery.insertTodo, text);
        return data[0];
    } catch (err) {
        console.log(err);
        throw Error(err);
    }

};

exports.getTodos = async () => {
    try {
        let data = await pool.query(TodoQuery.getTodos);
        return data[0];
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
};

exports.getTodo = async (todoId) => {
    try {
        let data = await pool.query(TodoQuery.getTodo, todoId);
        return data[0]
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}
