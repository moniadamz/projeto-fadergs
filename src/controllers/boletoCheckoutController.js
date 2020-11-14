
const { generateBoleto } = require('../services/boleto');

const boletoCheckoutTransaction = async (request, response, next) => {
    try {
        const { reference, amount, cpf, name } = request.body;
        
        const payment = await generateBoleto(reference, amount, cpf, name);

        return response.status(200).json(payment);
    } catch (error) {
        return response.status(400).send({
            message: 'Something went wrong!'
         });
    }
};

module.exports = boletoCheckoutTransaction;