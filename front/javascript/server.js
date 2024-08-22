const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/register', (req, res) => {
    const { email, nome, telefone, senha } = req.body;
    const sql = 'INSERT INTO usuarios (email, nome, telefone, senha) VALUES (?, ?, ?, ?)';
    db.query(sql, [email, nome, telefone, senha], (err, result) => {
        if (err) throw err;
        res.send('User registered');
    });
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    db.query(sql, [email, senha], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.redirect('/welcome.html');
        } else {
            res.send('Invalid credentials');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
