const config = require('../../config/default');

const boleto = (reference, amount, cpf, name) => {
    return {
        reference,
        firstDueDate: '2020-11-21',
        numberOfPayments: '1',
        periodicity: 'monthly',
        amount,
        instructions: 'juros de 1% ao dia e mora de 5,00',
        description: 'Despesas de hotelaria',
        customer: {
            document: {
                type: 'CPF',
                value: cpf,
            },
            name,
            email: config.client_email,
            phone: {
                areaCode: '11',
                number: '78970564',
            },
            address: {
                postalCode: '91110540',
                street: 'Av. Ipiranga',
                number: '100',
                district: 'Republica',
                city: 'Sao Gonçalo',
                state: 'SP',
            },
        },
    };
};

module.exports = { boleto }
