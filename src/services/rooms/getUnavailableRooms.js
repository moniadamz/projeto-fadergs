const Room = require('../../../database/rooms');

const getUnavailableRooms = async () => {
    try {
        const rooms = await Room.find({
            reservationStatus: { $ne: 'available' },
        });
        return rooms;
    } catch (err) {
        throw err;
    }
};

module.exports = getUnavailableRooms;