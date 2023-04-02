// const jwt = require("jsonwebtoken");

// function verify(req, res, next) {
//   const authHeader = req.headers.token;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];

//     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//       if (err) res.status(403).json("Token is not valid!");
//       req.user = user;
//       next();
//     });
//   } else {
//     return res.status(401).json("You are not authenticated!");
//   }
// }

// module.exports = verify;
const AppError = require('./AppError');
const catchAsync = require('./catchAsync');
const jwt = require("jsonwebtoken");

const verifyToken =  catchAsync(async (req, res, next) =>{


  //1)get token





  //2)validate token





  //3)
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("value of ",token);
    let secret="darshillashkari009";
    jwt.verify(token, secret, (err, user) => {
      if (err) 
      {
        return next(new AppError('Token is not valid!', 403));
      }
      req.user =user;
      console.log(user);
      next();
    });
  } else {
    console.log("hi");
    return next(new AppError('User not authenticated', 403));
  }
});

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(catchAsync(async(req, res,next)=> {
    console.log(user);
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  }));
};
const restrictTo=(...roles)=>{
  return(catchAsync(async(req,res,next)=>{
    console.log("bye bye ",roles);
    console.log("fuckkk",req.user.position);
    if(!roles.includes(req.user.position))
    {
      return next(new AppError('You are not allowed to do that', 403));
    }
    next();
  }
))}
module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  restrictTo
};