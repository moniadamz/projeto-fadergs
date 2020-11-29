const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const clientSchema = new Schema({
cpf: {
  type: String,
  required: true
 },
name: {
  type: String,
  required: true
 },
registerDate: {
  type: Date,
  required: true,
 },
 dateOfBirth: {
    type: Date,
    required: false
 },
 phone: {
    type: String,
    required: true
 }
});

const Client = mongoose.model("Clients", clientSchema);
module.exports = Client;