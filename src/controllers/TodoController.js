const todo = require('../models/TodoModel');


exports.getAllTodo = async (req, res)=> {
    try {
        let todos = await todo.find();
        if(todos.length === 0)
        return res.status(404).json({
            success: false,
            message: 'no todos found'
        })
        res.status(200).json({
            success: true,
            message: 'todo collection found',
            todos
        })
    } catch (error) {
        res.status(500).json({
             success: false,
             message: 'internal server error',
             error: error.message
        })
    }
}