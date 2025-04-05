const db = require("../database/connection");

module.exports = {
  async listarVisitantes(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        message: "Lista de visitantes",
        dados: null,
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
      return response.status(200).json({
        sucesso: true,
        message: "Cadastro de visitantes",
        dados: null,
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
      return response.status(200).json({
        sucesso: true,
        message: "Editar visitantes",
        dados: null,
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
      return response.status(200).json({
        sucesso: true,
        message: "Apagar visitantes",
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
