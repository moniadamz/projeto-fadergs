const express = require("express")
const router = express.Router()

const creditCardPayment = require('./controllers/creditCardPayment');
const boletoPayment = require('./controllers/boletoCheckoutController');
const makeReservation = require('./controllers/checkin');
const availableRooms = require('./controllers/availableRooms');
const checkout = require('./controllers/checkout');
const getReservationById = require('./controllers/getReservationById');
const unavailableRooms = require('./controllers/getUnavailableRooms');
const allClients = require('./controllers/getAllClients');
const cancel = require('./controllers/cancelReservation');

router.post('/creditCardPayment', creditCardPayment);

router.post('/boletoPayment', boletoPayment);

router.post('/makeReservation', makeReservation);

router.get('/availableRooms', availableRooms);

router.post('/checkout', checkout);

router.get('/reservation/:id', getReservationById);

router.get('/unavailableRooms', unavailableRooms);

router.get('/allClients', allClients);

router.post('/cancelReservation/:reservationId', cancel);

module.exports = router;