const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const paymentSchema = new Schema({
paymentId: {
    type: String,
    required: false,
},
reservationId: {
    type: String,
    required: true
},
paymentStatus: {
  type: String,
  required: true
},
cpf: {
    type: String,
    required: true
 },
 method: {
     type: String,
     required: true
 }
});

const Payment = mongoose.model("Payments", paymentSchema);
module.exports = Payment;