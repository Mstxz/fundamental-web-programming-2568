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

