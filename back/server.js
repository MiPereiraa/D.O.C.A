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

// Rota para registrar um novo usuário
app.post('/register', (req, res) => {
    const { email, nome, sobrenome, telefone, senha } = req.body;
    const sql = 'INSERT INTO usuarios (email, nome, sobrenome, telefone, senha) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [email, nome, sobrenome, telefone, senha], (err, result) => {
        if (err) throw err;
        res.send('User registered');
    });
});

// Rota para login
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

// Rota para registrar um novo pet
app.post('/pet-profile', (req, res) => {
    const { nome, data_nascimento, peso, vacinas, consultas, tutor_id } = req.body;
    const sql = 'INSERT INTO pets (nome, data_nascimento, peso, vacinas, consultas, tutor_id) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nome, data_nascimento, peso, vacinas, consultas, tutor_id], (err, result) => {
        if (err) throw err;
        res.send('Pet registered');
    });
});

// Rota para registrar dados diários
app.post('/daily-data', (req, res) => {
    const { titulo, conteudo, data, tutor_id } = req.body;
    const sql = 'INSERT INTO dados (titulo, conteudo, data, tutor_id) VALUES (?, ?, ?, ?)';
    db.query(sql, [titulo, conteudo, data, tutor_id], (err, result) => {
        if (err) throw err;
        res.send('Data registered');
    });
});

// Rota para registrar lugares favoritos
app.post('/favorite-places', (req, res) => {
    const { nome, status, tutor_id } = req.body;
    const sql = 'INSERT INTO favoritos (nome, status, tutor_id) VALUES (?, ?, ?)';
    db.query(sql, [nome, status, tutor_id], (err, result) => {
        if (err) throw err;
        res.send('Favorite place registered');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
