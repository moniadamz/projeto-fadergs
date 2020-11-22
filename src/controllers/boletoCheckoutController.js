
const boleto = require('../services/payment/boleto');

const boletoCheckoutTransaction = async (request, response, next) => {
    try {
        const { reservationId, reference, amount, cpf, name } = request.body;
        
        const payment = await boleto.makePayment(reservationId, reference, amount, cpf, name);

        return response.status(200).json(payment);
    } catch (error) {
        return response.status(400).send({
            message: error.message,
         });
    }
};

module.exports = boletoCheckoutTransaction;