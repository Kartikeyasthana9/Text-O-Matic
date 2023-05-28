//  import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const fileRouter = require('./routers/fileRouter');
const utilRouter = require('./routers/util');
const cors = require('cors');

// initialising express
const app = express();

const port = 5000;

// this will parse JSON data to javascript
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }))

// middleware 
app.use('/user', userRouter);
app.use('/file', fileRouter);
app.use('/util', utilRouter);

// RRoute
app.get('/', (req, res) => {
    res.send('Respond from express ');

})

// route and endpo

app.get('/home', (req, res) => {
    res.send('Respond ');

})

app.listen(port, () => {
    console.log('server has started');
})




  