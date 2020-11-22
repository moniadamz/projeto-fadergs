const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const roomSchema = new Schema({
roomNumber: {
  type: String,
  required: true
 },
cleaningStatus: {
  type: String,
  required: true
 },
bedsQuantity: {
  type: Number,
  required: true,
 },
 reservationStatus: {
    type: String,
    required: true
 },
 price: {
    type: Number,
    required: true
 }
});

const Room = mongoose.model("Rooms", roomSchema);
module.exports = Room;