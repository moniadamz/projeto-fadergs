const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const reservationSchema = new Schema({
paymentStatus: {
  type: String,
  required: true
 },
checkinDate: {
  type: Date,
  required: true
 },
checkoutDate: {
  type: Date,
  required: true,
 },
 roomNumber: {
    type: String,
    required: true
 },
 cpf: {
    type: String,
    required: true
 }
});

const Reservation = mongoose.model("Reservations", reservationSchema);
module.exports = Reservation;