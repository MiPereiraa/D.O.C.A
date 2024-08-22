create database doca_db;
use doca_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    peso VARCHAR(20),
    vacinas VARCHAR(255),
    consultas VARCHAR(255),
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES usuarios(id)
);

CREATE TABLE favoritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    status VARCHAR(20),
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES usuarios(id)
);

CREATE TABLE dados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT,
    data DATE,
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES usuarios(id)
);