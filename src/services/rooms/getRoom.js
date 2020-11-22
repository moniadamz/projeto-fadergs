const Room = require('../../../database/rooms');

const getRoom = async (roomNumber) => {
    try {
    const room = await Room.findOne({
        roomNumber,
    });

    return room;
} catch(err) {
    throw err;
}
};

module.exports = getRoom;