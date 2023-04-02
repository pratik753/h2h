
const router = require("express").Router();
const CryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken")
const pool=require("./../routes/db")
const AppError = require('./AppError');
const catchAsync = require('./catchAsync');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
router.post("/register", catchAsync(async (req, res, next) => {
    console.log(req.body);
    const username= req.body.username;
    const email= req.body.email;
    let secret="darshillashkari009";

    const passphrase = '123';
    console.log("bye ",req.body);
    // console.log(req.body.password);
    const password=req.body.password;
    //Cryptr.encrypt(req.body.password); 
    //const password=CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse());
    // console.log(password);
   const dealer=req.body.dealer;

  //  console.log("dealer hello ",dealer);
   const position=req.body.position;
  try { 
    const user= await pool.query("SELECT * FROM Userss WHERE email = $1", [
      req.body.email
     ]);
     if(user.rows[0]==undefined)
     {
      
      const newUser=await pool.query("insert into Userss (username,email,pass,dealer, position) values ($1,$2,$3,$4,$5)",[username,email,password,dealer,position]);
      // console.log(newUser);
      res.status(201).json(newUser);
     }
     else if(user.rows[0].email==email)
     {
      res.status(400).json("user already exists");
      //return next(new AppError('user already exists', 400));
     }
  } catch (err) {
    console.log(err,"error");
    return next(new AppError(err, 500));
  }
}));
router.post("/login", catchAsync(async (req, res, next) => {
  try {
   const {email,password}=req.body;
   console.log(email+"  "+password);
   if(!email&&!password)
   {
    return next(new AppError('EAMIL OR PASSWORD DONT EXISTS', 401));
   }
   console.log("hi");
    const user= await pool.query("SELECT * FROM Userss WHERE email = $1", [
     req.body.email
    ]);
    console.log(user);
    if(user.rows[0]===undefined)
    {
      console.log("undefined value");
      return next(new AppError('WRONG USER OR PASSWORD', 401));
    }
    //!user.rows[0].email && res.status(401).json("Wrong password or username");
    let secret="darshillashkari009";
   
    console.log(user.rows[0]); 
    const passphrase = '123';
    const OriginalPassword = user.rows[0].pass;

  // const OriginalPassword= CryptoJS.AES.decrypt(user.rows[0].pass, secret);
  //const OriginalPassword = CryptoJS.enc.Base64.parse(user.rows[0].pass).toString(CryptoJS.enc.Utf8);
    //console.log( CryptoJS.enc.Base64.parse().toString(CryptoJS.enc.Utf8));


    //const OriginalPassword=cryptr.decrypt(user.rows[0].pass);
    console.log("hi",OriginalPassword,req.body.password);
    if(OriginalPassword !== req.body.password)
    {
      return next(new AppError('WRONG USER OR PASSWORD', 401));
    } 
      console.log(user.rows[0].email);
      const accesToken = jwt.sign(
        { id: user.rows[0].email,position:user.rows[0].position },
         secret,
        {expiresIn:"5d"}
      );

    const { pass, ...info } = user;
    req.user=user.rows[0];
    res.status(200).json({...info, accesToken});
    next();
  } catch (err) {
    //console.log(err);
    return next(new AppError(err, 500));
  }
}));

module.exports = router;