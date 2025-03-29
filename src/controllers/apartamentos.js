const db = require(" ../database/connection");

module.exports = {
  async listarApartamentos(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        message: "Listagem de apartamentos realizada com sucesso",
        dados: null,
      });
  } catch (error) {
      return response.status(500).json({
        sucesso: false,
        message: "Listagem de apartamentos realizada com sucesso",
        dados: null,
      });
    }
  },
};
