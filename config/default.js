const dotenv = require('dotenv');

dotenv.config();

const config = {
    port: process.env.PORT,
    email: process.env.EMAIL,
    token: process.env.TOKEN,
    token_prd: process.env.TOKEN_PRD,
    app_id: process.env.APP_ID,
    app_key: process.env.APP_KEY,
    client_email: process.env.CLIENT_EMAIL,
    services: {
        pagSeguro: {
            host: process.env.PAG_SEGURO_HOST,
            resources: {
                creditCardPayment: process.env.PAG_SEGURO_RESOURCE_CREDIT_CARD,
                creditCardToken: process.env.PAG_SEGURO_RESOURCE_CREDIT_CARD_TOKEN,
                sessionToken: process.env.PAG_SEGURO_RESOURCE_SESSION_TOKEN,
                boleto: process.env.PAG_SEGURO_RESOURCE_BOLETO,
            }
        }
    }
}

module.exports = config;