var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");


router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/MostrarRank", function (req, res) {
    usuarioController.MostrarRank(req, res);
});




router.get("/kpi/Rank", function (req, res) {
    usuarioController.kpiRank(req, res);
});

router.get("/kpiPrincipe/:id", function (req, res) {
    usuarioController.kpiPrincipe(req, res);
});


module.exports = router;