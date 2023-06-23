const Razorpay = require("razorpay");
const shortid = require("shortid");
const razorpay = new Razorpay({
  key_id: "rzp_test_KhYTiBkXohzomU",
  key_secret: "vyxbF25mY2AO8s1K5GVwlK0y",
});

exports.razorpayCon = async (req, res) => {
  console.log(req.body.userDetail.price, "body");
  const { price } = req.body.userDetail;
  console.log(price);
  const payment_capture = 1;
  const amount = parseInt(price);
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    const r = res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};
