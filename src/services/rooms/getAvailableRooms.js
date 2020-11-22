const Room = require('../../../database/rooms');

const getAvailableRooms = async () => {
    try {
        const rooms = await Room.find({
            reservationStatus: 'available',
        });
        return rooms;
    } catch (err) {
        throw err;
    }
};

module.exports = getAvailableRooms;