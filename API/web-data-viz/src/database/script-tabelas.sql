-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE principeCruel;
USE principeCruel;


CREATE TABLE personagens (
    idPersonagens INT AUTO_INCREMENT PRIMARY KEY,
    nomePersonagem VARCHAR(40),
    descricao VARCHAR(50)
);


CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(100),
    senha VARCHAR(50),
    Rankfã INT,
    personagens_idPersonagens INT,
    CONSTRAINT fk_usuario_personagem
        FOREIGN KEY (personagens_idPersonagens)
        REFERENCES personagens(idPersonagens)
);


CREATE TABLE personagensFav (
    idFav INT AUTO_INCREMENT PRIMARY KEY,
    personagemOdiado VARCHAR(50),
    personagemAmado VARCHAR(45),
    personagens_idPersonagens INT,
    CONSTRAINT fk_fav_personagem
        FOREIGN KEY (personagens_idPersonagens)
        REFERENCES personagens(idPersonagens)
);

select * from usuario;