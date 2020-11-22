const moment = require('moment');
const getRoom = require('../rooms/getRoom');
const getClient = require('../clients/getClient');
const Reservation = require('../../../database/reservations');

const makeReservation = async (cpf, roomNumber, daysQty) => {
    try {
        const room = await getRoom(roomNumber);
        if(!room) throw new Error('Room not found.');
        if(room.reservationStatus !== 'available') throw new Error('Room unavailable.');

        const client = await getClient(cpf);

        if(!client) throw new Error('Client not found.');

        const reservation = await createReservation(cpf, room.roomNumber, daysQty);

        return reservation;
    } catch (error) {
        throw error;
    }
}

const createReservation = async (cpf, roomNumber, daysQty) => {
    try {
        const today = moment.now();
        const checkout = moment().add(daysQty, 'day');

        const room = new Reservation({
            checkout_date: checkout,
            checkin_date: today,
            room_number: roomNumber,
            payment_status: 'pending',
            cpf
        });
        
        return room.save();
    } catch (err) {
        throw err;
    }
};

module.exports = makeReservation;