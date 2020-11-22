const Client = require('../../../database/clients');

const getClient = async (cpf) => {
    return Client.findOne({cpf});
};

module.exports = getClient;