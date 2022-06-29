const  {Schema, model} = require('mongoose');

const todoSchema = new Schema ({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true}
);

const todoModel = model('todo', todoSchema);

module.exports = todoModel;
