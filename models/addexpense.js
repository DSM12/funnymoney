const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addexSchema = new Schema({
  Date: { type: Date, 
              trim: true, 
              required: true },
  Amount: { type: String, 
           trim: true, 
           required: true },
  Description: { type: String, 
              trim: true, 
              required: true },
  Merchant: { type: String, 
           trim: true, 
           required: true }
});

const addex = mongoose.model("Addex", addexSchema);

module.exports = addex;