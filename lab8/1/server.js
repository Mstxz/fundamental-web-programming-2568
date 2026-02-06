// index.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


// เพิ่มใช้งานไฟล์
//const conn = require('./database'); 

// static resourse & template engine
app.use(express.static('public'));

// routing 
app.get('/create',  (req, res) => {
    // Create table in MySQL database
    const sql = `CREATE TABLE `;

    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created or already exists");
        res.send("Table created or already exists");
    });
    // then, Insert data into the table    

});

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
})


app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 