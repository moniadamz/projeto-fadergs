const getRoom = require('../rooms/getRoom');
const checkoutRoom = require('../rooms/checkoutRoom');

const checkoutReservation = async (cleaning_status = null, roomNumber) => {
    try {
        const room = await getRoom(roomNumber);
        if(!room) throw new Error('Room not found.');
        if(room.reservationStatus === 'available') throw new Error('Room is already available.');

        const reservation = await checkoutRoom(room, cleaning_status);

        return reservation;
    } catch (error) {
        throw error;
    }
}

module.exports = checkoutReservation;