const express = require('express');
const {json} = require('express')
const connect = require('./config/db');
const todoRoutes = require('./routes/TodoRoutes');

const app = express();
app.use(json());
app.use('/todo', todoRoutes);

connect();


app.get('/', (req, res)=>{
    res.send('fuck you')
})





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));