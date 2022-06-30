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

exports.getTodo = async (req,res) => {
    try {
        let id = {_id: req.params.id}
        let todos = await todo.findOne(id);
        if(!todos) return res.status(404).json({
            success: false,
            message: 'todo not created'
        })
        res.status(200).json({
            success: true,
            message: 'todo found',
            todos,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.message
        })
    }
}

exports.createTodo = async(req, res) => {
   try {
    let todos = await req.body;
    let created = await todo.create(todos);
    if(!created) return res.status(400).json({
        success: false,
        message: 'todo creation failed'
    })
    return res.status(200).json({
        success: true,
        message: 'todo created',
        todos: created
    })
   } catch (error) {
       res.status(500).json({
           success: false,
           message: 'internal server error',
           error: error.message
       })
   }
}

exports.updateTodo = async (req, res)=> {
    try {
        let id = { _id: req.params.id}
        let todos = await req.body;
        let update = await todo.findOneAndUpdate(id, todos, {new : true});
        if(!update) return res.status(400).json({
            success: false,
            message: " todo not updated"
        })
        return res.status(201).json({
            success: true,
            message: 'we don see wetin you wan do',
            todos: update
        })   
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server err',
            error: error.message
        })
    }
}
        
exports.deleteTodo = async (req, res) => {
    try {
        let id = { _id: req.params.id};
        let deleted = await todo.findOneAndRemove(id);
        if(!deleted) return res.status(400).json({
            success: false,
            message: ' e no gree delete'
        });
        return res.status(200).json({
            success: true,
            message: 'we don commot am'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server ',
            error: error.message
        })
    }
}