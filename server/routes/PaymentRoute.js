const express = require("express");
const route = express.Router();
const payment = require("../Controller/PaymentController");
// route.post("/verification", payment.verification);
route.post("/razorpay", payment.razorpayCon);
module.exports = route;
