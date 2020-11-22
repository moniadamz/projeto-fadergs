const checkoutRoom = async (room, cleaningStatus = 'not-clean') => {
    try { 
        room.cleaningStatus = cleaningStatus;

        room.reservationStatus = cleaningStatus === 'clean' ? 'available' : 'unavailable';
        return room.save();
    } catch(err) {
        throw err;
    }
};

module.exports = checkoutRoom;