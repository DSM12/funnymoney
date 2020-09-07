const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  FullName: { type: String, 
              trim: true, 
              required: true },
  Phone: { type: String, 
           trim: true, 
           required: true },
  UserName: { type: String, 
              trim: true, 
              required: true },
  Email: { type: String, 
           trim: true, 
           required: true },
  Password: { type: String, 
              validate: [
              function(input){
                return input.length >= 6;
              },
              //Error message
              "Password must be longer."
            ]
          }
});

const User = mongoose.model("User", userSchema);

module.exports = User;