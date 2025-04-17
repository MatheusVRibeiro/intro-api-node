const db = require("../database/connection");

module.exports = {
  async listarApartamentos(request, response) {
    try {

      const sql = `
          SELECT 
            ap_id, bloco_id, ap_numero, ap_andar
            FROM Apartamentos 
        `;

      const [row] = await db.query(sql);
      const nItens = row.length;

      return response.status(200).json({
        sucesso: true,
        message: "Lista de apartamentos",
        nItens,
        dados: row,
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        message: "Erro na listagem de apartamentos ",
        dados: error.message,
      });
    }
  },
  async cadastrarApartamentos(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        message: "Cadastro de apartamentos",
        dados: null,
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        message: "Erro no cadastro de apartamentos",
        dados: error.message,
      });
    }
  },
  async editarApartamentos(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        message: "Editar apartamentos",
        dados: null,
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        message: "Erro na edição de apartamentos",
        dados: error.message,
      });
    }
  },
  async apagarApartamentos(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        message: "Apagar apartamentos",
        dados: null,
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        message: "Erro na remoção de apartamentos",
        dados: error.message,
      });
    }
  },
};
