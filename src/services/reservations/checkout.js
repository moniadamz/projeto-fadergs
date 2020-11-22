const getRoom = require('../rooms/getRoom');
const checkoutRoom = require('../rooms/checkoutRoom');

const checkoutReservation = async (cleaningStatus = null, roomNumber) => {
    try {
        const room = await getRoom(roomNumber);
        if(!room) throw new Error('Room not found.');
        if(room.reservationStatus === 'available') throw new Error('Room is already available.');

        const reservation = await checkoutRoom(room, cleaningStatus);

        return reservation;
    } catch (error) {
        throw error;
    }
}

module.exports = checkoutReservation;