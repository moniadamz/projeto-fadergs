const getUnavailableRooms = require('../services/rooms/getUnavailableRooms');

const unavailableRooms = async (request, response, next) => {
    try {
        const rooms = await getUnavailableRooms();

        return response.status(200).json(rooms);
    } catch (error) {
        return response.status(400).send({
            message: error.message
         });
    }
};

module.exports = unavailableRooms;