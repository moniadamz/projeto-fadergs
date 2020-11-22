const creditCard = require('../services/payment/creditCardPayment');

const checkoutTransaction = async (request, response, next) => {
    try {
        const {reservationId, itemId, description, amount, reference, card, clientCPF, clientName } = request.body;
        
        const payment = await creditCard.makePayment(reservationId, itemId, description, amount, reference, card, clientCPF, clientName)

        return response.status(200).json(payment);
    } catch (error) {
        return response.status(400).send({
            message: error.message,
         });
    }
};

module.exports = checkoutTransaction;