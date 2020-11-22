const Reservation = require('../../../database/reservations');

const getReservation = async (roomNumber) => {
    try { 
    const room = await Reservation.findOne({
        roomNumber,
    });

    return room;
} catch(err) {
    throw err;
}
};

module.exports = getReservation;