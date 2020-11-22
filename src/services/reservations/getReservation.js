const Reservation = require('../../../database/reservations');

const getReservation = async (id) => {
    try { 
    const room = await Reservation.findOne({
        _id: id,
    });

    return room;
} catch(err) {
    throw err;
}
};

module.exports = getReservation;