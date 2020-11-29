const cancel = require('../services/reservations/cancel');

const cancelReservation = async (request, response, next) => {
    try {
        const { reservationId } = request.params;
        
        const cancellation = await cancel(reservationId);

        return response.status(200).json(cancellation);
    } catch (error) {
        return response.status(400).send({
            message: error.message,
         });
    }
};

module.exports = cancelReservation;