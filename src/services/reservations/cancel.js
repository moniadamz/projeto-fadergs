const getReservation = require('./getReservation');
const Payment = require('../../../database/payments');
const checkoutReservation = require('./checkout');

const cancelPayment = require('../payment/cancel');
const Reservation = require('../../../database/reservations');

const cancel = async (id) => {
    try {
        const reservation = await getReservation(id);
        if(!reservation) throw new Error('Reservation not found.');

        if(reservation.paymentStatus === 'paid') {
            const payment = await Payment.findOne({ reservationId: reservation._id })
            if(payment.method === 'creditCard') await cancelPayment(id);
        }
        await checkoutReservation('clean', reservation.roomNumber);
        await Reservation.deleteOne({ _id: id });
        
        return { status: 'cancelled' };
    } catch (error) {
        throw error;
    }
}

module.exports = cancel;