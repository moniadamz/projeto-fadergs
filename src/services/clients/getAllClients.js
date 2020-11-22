const Client = require('../../../database/clients');

const getClient = async () => {
    return Client.find({});
};

module.exports = getClient;