const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');

app.use('/api/v1/users', usersRoutes);

const port = 5000;
try {
    app.listen(port, ()=>{
        console.log(`Server is listening on port ${port}...`);
    })
} catch (error) {
    console.log(error);
}