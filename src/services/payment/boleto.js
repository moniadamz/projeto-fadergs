const axios = require('axios');
const config = require('../../../config/default');
const models = require('../../models/boletoModel');
const getReservation = require('../reservations/getReservation');
const Payment = require('../../../database/payments');

const generateBoleto = async (reference, amount, cpf, name) => {
    try {
        const { resources } = config.services.pagSeguro;
        const url = `${resources.boleto}/?email=${config.email}&token=${config.token_prd}`;
        const headers = {
            'Content-Type': 'application/json;charset=ISO-8859-1',
            'Accept': 'application/json;charset=ISO-8859-1',
        };
        
        const body = models.boleto(reference, amount, cpf, name);

        const { data } = await axios.post(url, body, { headers });

        return data;
    } catch(error) {
        throw error;
    }
};

const makePayment = async (reservationId, reference, amount, cpf, name) => {
    try {
        const reservation = await getReservation(reservationId);
        if(!reservation) throw new Error('Reservation not found.');
        if(reservation.paymentStatus === 'paid') throw new Error('Reservation is already paid.');

        const payment = await generateBoleto(reference, amount, cpf, name);
        
        reservation.paymentStatus = 'paid';
        await reservation.save();

        await Payment.create({ reservationId, cpf, method: 'boleto', paymentStatus: 'paid' })
        return payment;
    } catch (error) {
        throw error;
    }
}
module.exports = { generateBoleto, makePayment };