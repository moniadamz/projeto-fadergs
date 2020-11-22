const creditCard = require('../services/payment/creditCardPayment');

const checkoutTransaction = async (request, response, next) => {
    try {
        const {roomNumber, itemId, description, amount, reference, card, clientCPF, clientName } = request.body;
        
        const payment = await creditCard.makePayment(roomNumber, itemId, description, amount, reference, card, clientCPF, clientName)

        return response.status(200).json(payment);
    } catch (error) {
        return response.status(400).send({
            message: error.message,
         });
    }
};

module.exports = checkoutTransaction;