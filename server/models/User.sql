/*
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: "false" },
    isDoctor: { type: Boolean, default: "false" },
    isDealer: { type: Boolean, default: "false" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User",UserSchema)
*/
create DATABASE company;
create Table Userss
(
     username varchar(255) not null ,
     email varchar(255) not null unique,
     pass varchar(255) not null ,
     dealer TEXT[] not null,
     position varchar(255)
);