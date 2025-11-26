var graficosModel = require("../models/graficoModel");


function buscarDados(req, res) {
    graficosModel.buscarDados().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosrankFã(req, res) {
    var id = req.params.id;
    console.log('Recuperando medidas em tempo real');
    graficosModel.buscarDadosNivelTorcedor(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o nivel do torcedor.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarNivelTorcedor(req, res) {
    var id = req.params.id;
    console.log('Recuperando medidas em tempo real');
    graficosModel.buscarNivelTorcedor(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o nivel do torcedor.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarDados,
    buscarNivelTorcedor,
    buscarDadosNivelTorcedor
}
