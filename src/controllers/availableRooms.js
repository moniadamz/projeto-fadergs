const getAvailableRooms = require('../services/rooms/getAvailableRooms');

const availableRooms = async (request, response, next) => {
    try {
        const rooms = await getAvailableRooms();

        return response.status(200).json(rooms);
    } catch (error) {
        return response.status(400).send({
            message: error.message
         });
    }
};

module.exports = availableRooms;