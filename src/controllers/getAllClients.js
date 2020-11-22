const getAllClients = require('../services/clients/getAllClients');

const allClients = async (request, response, next) => {
    try {
        const clients = await getAllClients();

        return response.status(200).json(clients);
    } catch (error) {
        return response.status(400).send({
            message: error.message
         });
    }
};

module.exports = allClients;