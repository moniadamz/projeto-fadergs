const csv = require('csv-parser');
const fs = require('fs');
const { CronJob } = require('cron');

const Client = require('../../../database/clients');

const persistClient = () => {
    fs.createReadStream('C:\\Users\\monic\\Downloads\\clientes_hotel.csv')
    .pipe(csv())
    .on('data', async (row) => {
        const find = await Client.findOne({ cpf: row.cpf });
        if(!find) {
            await Client
            .create({
                cpf: row.cpf,
                phone: row.telefone,
                name: row.nome,
                registerDate: new Date(),
                });
        };
    });
};


const job = new CronJob('*/10 * * * * *', async () => {
    console.log(`Job running at ${Date.now()}`)
    await persistClient();
}, null, true, 'America/Los_Angeles');
module.exports = () => job.start();
