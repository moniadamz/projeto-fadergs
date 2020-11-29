const axios = require('axios');
const qs = require('qs');
const config = require('../../../config/default');
const parse = require('xml2json');
const Payment = require('../../../database/payments');

const cancelPayment = async (reservationId) => {
    try {
        const payment = await Payment.findOne({ reservationId });
        if(!payment) throw new Error('Payment not found');

        const { host, resources } = config.services.pagSeguro;
        const url = `${host}${resources.cancel}/?email=${config.email}&token=${config.token}`;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1',
        };
        const body = qs.stringify({ transactionCode: payment.paymentId });

        const { data } = await axios.post(url, body, { headers });        

        payment.paymentStatus = 'cancelled';
        await payment.save();

        return JSON.parse(parse.toJson(data));
    } catch(error) {
        throw error;
    }
};
module.exports = cancelPayment;