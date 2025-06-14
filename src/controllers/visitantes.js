const db = require("../database/connection");

module.exports = {
  async listarVisitantes(request, response) {
    try {

      const sql = `
      SELECT 
        vst_id, vst_nome, vst_documento, AP_id, vst_data_visita
        FROM Visitantes 
    `;

      const [row] = await db.query(sql);
      const nItens = row.length;

      return response.status(200).json({
        sucesso: true,
        message: "Lista de visitantes",
        nItens,
        dados: row,
      });
  } catch (error) {
      return response.status(500).json({
        sucesso: false,
        message: "Erro na listagem de visitantes ",
        dados: error.message,
      });
    }
  },
  async cadastrarVisitantes(request, response) {
    try {

      const { nome, documento, ap_id, data_visita } = request.body;

      const sql = `
        INSERT INTO Visitantes (vst_nome, vst_documento, AP_id, vst_data_visita)
        VALUES (?, ?, ?, ?)
        `;


        const values = [nome, documento, ap_id, data_visita];

        const [result] = await db.query(sql, values);

        const dados = {
          id: result.insertId,
          nome,
          documento,
          ap_id,
          data_visita,
        };
      return response.status(200).json({
        sucesso: true,
        message: "Cadastro de visitantes",
        dados
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        message: "Erro no cadastro de visitantes",
        dados: error.message,
      });
    }
  },
  async editarVisitantes(request, response) {
    try {

      const { nome, documento, ap_id, data_visita } = request.body;
      const { id } = request.params;

      const sql = `
      UPDATE Visitantes
      SET vst_nome = ?, vst_documento = ?, AP_id = ?, vst_data_visita = ?
      WHERE vst_id = ?;
      `;


      const values = [nome, documento, ap_id, data_visita, id];
      const [result] = await db.query(sql, values);
      
      const atualizaDados = await db.query(sql, values);

      const dados = {
        id,
        nome,
        documento,
        ap_id,
        data_visita,
      };

      if (result.affectedRows === 0) {
        return response.status(404).json({
          sucesso: false,
          message: `Visitante ${id} não encontrado!`,
          dados: null,
        });
      }
      return response.status(200).json({
        sucesso: true,
        message: `Visitante ${id} atualizado com sucesso!`, 
        dados
      });
  } catch (error) {
      return response.status(500).json({
        sucesso: false,
        message: "Erro na edição de visitantes",
        dados: error.message,
      });
    }
  },
  async apagarVisitantes(request, response) {
    try {

      const { id } = request.params;

      const sql = `
      DELETE FROM Visitantes
      WHERE vst_id = ?;
      `;
      const values = [id];
      const [result] = await db.query(sql, values);

      if (result.affectedRows === 0) {
        return response.status(404).json({
          sucesso: false,
          message: `Visitante ${id} não encontrado!`,
          dados: null,
        });
      }

      return response.status(200).json({
        sucesso: true,
        message: `Visitante ${id} removido com sucesso!`, 
        dados: null,
      });
  } catch (error) {
      return response.status(500).json({
        sucesso: false,
        message: "Erro na remoção de visitantes",
        dados: error.message,
      });
    }
  },
};
