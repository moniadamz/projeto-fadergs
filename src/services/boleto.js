const axios = require('axios');
const config = require('../../config/default');
const models = require('../models/boletoModel');

const generateBoleto = async (reference, amount, cpf, name) => {
    try {
        const { resources } = config.services.pagSeguro;
        const url = `${resources.boleto}/?email=${config.email}&token=${config.token_prd}`;
        const headers = {
            'Content-Type': 'application/json;charset=ISO-8859-1',
            'Accept': 'application/json;charset=ISO-8859-1',
        };
        
        const body = models.boleto(reference, amount, cpf, name);

        const { data } = await axios.post(url, body, { headers });

        return data;
    } catch(error) {
        throw error;
    }
};

module.exports = { generateBoleto };