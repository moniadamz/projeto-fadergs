const getReservation = require('../services/reservations/getReservation');

const getReservationById = async (request, response, next) => {
    try {
        const { id } = request.params;

        const reservation = await getReservation(id);

        return response.status(200).json(reservation);
    } catch (error) {
        return response.status(400).send({
            message: error.message
         });
    }
};

module.exports = getReservationById;