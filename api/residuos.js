const banco = require("../db");

module.exports = async function handler(req, res) {
  try {
    const nome = req.query.nome;

    if (!nome) {
      const [residuos] = await banco.query(
        "SELECT * FROM residuos"
      );

      return res.status(200).json(residuos);
    }

    const [residuos] = await banco.query(
      "SELECT * FROM residuos WHERE nome LIKE ?",
      [`%${nome}%`]
    );

    if (residuos.length === 0) {
      return res.status(404).json({
        erro: "Resíduo não encontrado."
      });
    }

    return res.status(200).json(residuos[0]);

  } catch (erro) {
    console.error("Erro ao consultar banco:", erro);

    return res.status(500).json({
      erro: "Erro interno do servidor."
    });
  }
};