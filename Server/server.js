const express = require('express')
const { Client } = require('pg')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// uncomment for local host 

/*const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
}) */


// const db = mysql.createConnection // require mysql 

const db = new Client({
    host: 'pgdb',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
})

db.connect((error) => {
    if (error) {
      console.error('Error connecting to Postgres database!!', error);
    } else {
      console.log('Connected to Postgres database!!');   
      
      // created in signup.sql uncoment for localhost 
      var sql = `CREATE TABLE IF NOT EXISTS login (id serial primary key NOT NULL, username VARCHAR (255), password VARCHAR (255))`
      db.query(sql, function (err, result) {
        if (err) throw err;
      });
    } 
  });


app.post('/signup', (req,res) => {
    const insertQuery = {
        text: "INSERT INTO login (username, password) VALUES ($1, $2);",
        values: [
            req.body.username,
            req.body.password
        ]
    } 

    db.query(insertQuery,(err,data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data);
    })
})

app.post('/login', (req,res) => {
    const loginQuery = {
        text: "SELECT * FROM login WHERE username = $1 AND password = $2;",
        values: [
            req.body.username,
            req.body.password
        ]
    } 

    db.query(loginQuery, (err,data) => {
        if(err) {
            return res.json('Error')
        } 
        if(data.rowCount > 0 ) {
            return res.json('Success')
        } else {
            return res.json('Fail')
        }
    })
})

app.listen(8005, ()=>{
    console.log('SREVER STARTED')
} )