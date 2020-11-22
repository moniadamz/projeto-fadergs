const makeReservation = require('../services/reservations/makeReservation');

const checkin = async (request, response, next) => {
    try {
        const { cpf, roomNumber, daysQty } = request.body;

        const reservation = await makeReservation(cpf, roomNumber, daysQty);

        return response.status(200).json(reservation);
    } catch (error) {
        return response.status(400).send({
            message: error.message
         });
    }
};

module.exports = checkin;