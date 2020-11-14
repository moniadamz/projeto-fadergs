const { creditCardPayment } = require('../services/creditCardPayment');

const checkoutTransaction = async (request, response, next) => {
    try {
        const { itemId, description, amount, reference, card, clientCPF, clientName } = request.body;
        
        const payment = await creditCardPayment(itemId, description, amount, reference, card, clientCPF, clientName)

        return response.status(200).json(payment);
    } catch (error) {
        return response.status(400).send({
            message: 'Something went wrong!'
         });
    }
};

module.exports = checkoutTransaction;