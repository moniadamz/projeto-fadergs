const checkoutReservation = require('../services/reservations/checkout');

const checkout = async (request, response, next) => {
    try {
        const { cleaningStatus, roomNumber } = request.body;

        const reservation = await checkoutReservation(cleaningStatus, roomNumber);

        return response.status(200).json(reservation);
    } catch (error) {
        return response.status(400).send({
            message: error.message
         });
    }
};

module.exports = checkout;