const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
})

db.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');   
      var sql = `CREATE TABLE IF NOT EXISTS login (id INT AUTO_INCREMENT primary key NOT NULL, username VARCHAR (255), password VARCHAR (255))`
      db.query(sql, function (err, result) {
        if (err) throw err;
      });
    }
  });


app.post('/signup', (req,res) => {
    const sql = "INSERT INTO login (`username`, `password`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.password
    ]

    db.query(sql,[values],(err,data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data);
    })
})

app.post('/login', (req,res) => {

    const sql = 'SELECT * FROM login WHERE `username`= ? AND `password`= ? '
    
    db.query(sql, [req.body.username, req.body.password], (err,data) => {
        if(err) {
            return res.json('Error')
        } 
        if(data.length > 0 ) {
            return res.json('Success')
        } else {
            return res.json('Fail')
        }

    })
})

app.listen(8000, ()=>{
    console.log('SREVER STARTED')
} )