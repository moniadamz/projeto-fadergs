const axios = require('axios');
const config = require('../../config/default');
const parser = require('xml2json');

const sessionToken = async () => {
    try {
        const { host, resources } = config.services.pagSeguro;
        const url = `${host}${resources.sessionToken}?appId=${config.app_id}&appKey=${config.app_key}`;

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        const { data } = await axios.post(url, {}, { headers });

        return JSON.parse(parser.toJson(data));
    } catch (error) {
        throw error;
    } 
}

module.exports = sessionToken;