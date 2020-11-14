const creditCardCheckoutController = require('./controllers/creditCardPayment');
const boletoCheckoutController = require('./controllers/boletoCheckoutController');

module.exports = (app) => {
    app.post('/creditCardCheckout', creditCardCheckoutController);

    app.post('/boletoCheckout', boletoCheckoutController);

    return app;
};