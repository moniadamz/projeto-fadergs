const config = require("../../config/default");

const creditCardPayment = (reference, itemId, description, amount, token, clientCPF, name) => {
    return {
        currency: 'BRL',
        reference,
        'payment.mode': 'default',
        'payment.method': 'creditCard',
        'item[1].id': itemId,
        'item[1].description': description,
        'item[1].amount': amount,
        'item[1].quantity': '1',
        'installment.quantity': '1',
        'installment.value': amount,
        'creditCard.token': token,
        'creditCard.holder.birthDate': '06/01/1995',
        'creditCard.holder.phone': '45678912',
        'creditCard.holder.areaCode': '41',
        'creditCard.holder.CPF': clientCPF,
        'creditCard.holder.name': name,
        'sender.name': 'Hotelaria Fadergs',
        'sender.CPF': '56941860014',
        'sender.areaCode': '51',
        'sender.phone': '21365748',
        'sender.email': config.client_email,
        'shipping.address.street': 'av nilopolis',
        'shipping.address.number': '300',
        'shipping.address.complement': 'casa',
        'shipping.address.district': 'zn',
        'shipping.address.postalCode': '91110540',
        'shipping.address.city': 'poa',
        'shipping.address.state': 'SP',
        'shipping.address.country': 'brasil',
        'shipping.type': '3',
        'shipping.cost': '0.00',
        'billingAddress.street': 'av moranguinho',
        'billingAddress.number': '12',
        'billingAddress.complement': 'none',
        'billingAddress.district': 'zn',
        'billingAddress.postalCode': '91110540',
        'billingAddress.city': 'poa',
        'billingAddress.state': 'SP',
        'billingAddress.country': 'brasil'
    };
};

const transactionToken = (id, amount, number, brand, cvv, expirationMonth, expirationYear) => {
    return  {
        sessionId: id,
        amount,
        cardNumber: number,
        cardBrand: brand,
        cardCvv: cvv,
        cardExpirationMonth: expirationMonth,
        cardExpirationYear: expirationYear,
    };
};

module.exports = { creditCardPayment, transactionToken }