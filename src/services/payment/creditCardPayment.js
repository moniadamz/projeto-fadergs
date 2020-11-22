const axios = require('axios');
const qs = require('qs');

const config = require('../../../config/default');
const sessionToken = require('../sessionToken');
const models = require('../../models/creditCardTransactionModel');
const parse = require('xml2json');
const getRoom = require('../rooms/getRoom');

const generateCreditCardToken = async (
        amount,
        number,
        brand,
        cvv,
        expirationMonth,
        expirationYear
    ) => {
    try {
        const { resources } = config.services.pagSeguro;
        const url = `${resources.creditCardToken}/?email=${config.email}&token=${config.token}`
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        const token = await sessionToken();
        const { id } = token.session;
        
        const body = qs.stringify(models.transactionToken(id, amount, number, brand, cvv, expirationMonth, expirationYear));

        const { data } = await axios.post(url, body, { headers });

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const creditCardPayment = async (itemId, description, amount, reference, card, clientCPF, clientName ) => {
    try {
        const { host, resources } = config.services.pagSeguro;
        const url = `${host}${resources.creditCardPayment}?email=${config.email}&token=${config.token}`;

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/vnd.pagseguro.com.br.v3+xml',
        };
        const { number,
            brand,
            cvv,
            expirationMonth,
            expirationYear } = card;

        const { token } = await generateCreditCardToken(
            amount,
            number,
            brand,
            cvv,
            expirationMonth,
            expirationYear,
        );

        const body = qs
            .stringify(models.creditCardPayment(reference, itemId, description, amount, token, clientCPF, clientName));

        const { data } = await axios.post(url, body, { headers });

        return JSON.parse(parse.toJson(data));
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const makePayment = async (roomNumber, itemId, description, amount, reference, card, clientCPF, clientName) => {
    try {
        const room = await getRoom(roomNumber);
        if(!room) throw new Error('Room not found');

        const payment = await creditCardPayment(itemId, description, amount, reference, card, clientCPF, clientName);
        room.paymentStatus = 'paid';
        await room.save();
        return payment;
    } catch (error) {
        throw error;
    }
}

module.exports = { creditCardPayment, makePayment };