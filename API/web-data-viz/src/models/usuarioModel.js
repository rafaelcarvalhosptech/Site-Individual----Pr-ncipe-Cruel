var database = require("../database/config");

function autenticar(email, senha, ) {
    console.log("ACESSEI O USUARIO MODEL -> entrar(): ", email, senha );
    var instrucaoSql = `
         SELECT * FROM usuario 
         WHERE email = '${email}'
         AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
  const instrucaoSql = `
    INSERT INTO usuario (nome, email, senha)
    VALUES ('${nome}', '${email}', '${senha}');
  `;
  console.log("Executando SQL:", instrucaoSql);
  return database.executar(instrucaoSql);
}


function salvarNivel(idUsuario, nivelTorcedor) {
    var instrucaoSql = `
        UPDATE usuario
        SET nivelTorcedor = ${nivelTorcedor}
        WHERE id = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}



function kpiMedia() {
  var instrucaoSql = `
    SELECT ROUND(AVG(nivelTorcedor), 2) AS mediaNivel
    FROM usuario
    WHERE nivelTorcedor IS NOT NULL;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function kpiUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT nivelTorcedor 
        FROM usuario
        WHERE id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    salvarNivel,
    kpiMedia,
    kpiUsuario
};
