
//const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  restrictTo
} = require("./verifyToken");

const authcontroller=require("./verifyToken");
const router = require("express").Router();
const pool=require("./../routes/db")
const formidable=require('formidable')
const fs=require('fs');
const multer = require('multer');

router.post("/data",verifyToken,restrictTo('Dealer'),async(req,res)=>{
       
        
       console.log("HI DATA ",req.body);

       const {title,descriptio,image_name,price,per}=req.body;

       let p=parseInt(price);
       let pe=parseInt(per);
       console.log(p+"  "+per);
       let q=(pe/100)*p;
       
       console.log(q);
      // var {id}=req.user;
        /*var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'public/images/')
        },
        filename: function (req, file, cb) {
            console.log("hello",file.buffer);
            cb(null, file.originalname)
        }
      })
let form=new formidable.IncomingForm();
form.keepExtensions=true;


             var inputValues;
            
            form.parse(req,async (err,fields,file)=>{
                console.log(fields)
                if(file[Object.keys(file)[0]])
                {
                    console.log('Bye');
                   // console.log("good"+"   "+[Object.keys(file)[0]].[0]);
                    console.log(file);
                   const imageName=fs.readFileSync(file.image_name.filepath)
                   //  console.log(imageName)
                   //  let val= unescape(encodeURIComponent(imageName) );
                    //val=val.toString(); 
                   //  console.log(val);
                   console.log("hi ",imageName);
                     console.log(inputValues);
                     image_name=imageName;
                     console.log("ok ",image_name);


                }*/
                let email=req.user.id;
                //console.log(fields);
                const newProduct=await pool.query("insert into products (title,descriptio,image_name,price,email) values ($1,$2,$3,$4,$5)",[title,descriptio,image_name,q,email]);
                console.log("yes ",newProduct);
                res.json(newProduct);   
          
                } ) 
            //)
             
   // console.log(req.body);        
  

//doctor and nurse
router.post("/postdoctor",verifyToken,restrictTo('Doctor','Nurse'),async(req,res)=>{
 
  /*reimbersement varchar not null,
  dat varchar(255) not null,
  email varchar(255)  not null,
  item varchar[]; 
  img varchar[],
  ID1  SERIAL PRIMARY KEY*/
  var reimbersement=req.body[0].price;
  var dat=req.body[0].date_time;
  var email=req.user.id;

  let p=[];
  var z=0,y=0;
  let im=[];
  for(let i=0;i<req.body.length;i++)
  {
     let title=req.body[i].title;
     let price=req.body[i].pricing;
     let img=req.body[i].image_name;
    let s=""+title+" "+price;
     p[z++]=s;
     im[y++]=img;
  }
    const newProduct=await pool.query("insert into Doctor (reimbersement,dat,email,item,img) values ($1,$2,$3,$4,$5)",[reimbersement,dat,email,p,im]);
    console.log("yes ",newProduct);
  }
  )
router.post("/pres",verifyToken,restrictTo('Doctor','Nurse'),async(req,res)=>{
  try{
      const{title,price,quantity}=req.body;
     // console.log(description);
     const {id}=req.user;
     const email=id;
      console.log(req.body);
      console.log(pool);
      const newProduct=await pool.query("insert into Prescription (title,price,quantity,email) values ($1,$2,$3,$4)",[title,price,quantity,email]);
      console.log(newProduct);
      res.json(newProduct);
  }
  catch(err)
  {
    console.log(err);
      res.status(500).json(err);
  }
});

//
router.get("/dealer",verifyToken,restrictTo('Dealer'),async(req,res)=>{
  try
  {
    console.log("hi");
    const {id}=req.user;
    const email=id;
    const positiondoctor="Doctor";
    const positionnurse="Nurse";
   const data=await pool.query("SELECT * FROM Userss WHERE position = $1 or position=$2",[positiondoctor,positionnurse]);
   

    //console.log("welcome ",data);
   //[] dealer1,dealer2
   //[] dealer2,dealer4
   //[] dealer3,dealer1


   //if i have login with dealer 1
   
   //so i need email id of all those doctor and their commission and their position

    //create array of objects

   /*[

    {email,commission,position},
    {email,commission,position},
    {email,commission,position}
   ]*/
   let arr=[];
   for(let i=0;i<data.rows.length;i++)
   {
      // console.log(data.rows[i].dealer);
       if(data.rows[i].dealer.includes(email))
       {
           let obj={};
           Object.assign(obj, {name:data.rows[i].username,email: data.rows[i].email,position: data.rows[i].position,REIMBURCEMENT:"4000"});
           if(obj!==null)
              arr[i]=obj;
       }       
   }
  console.log("welcome dealer",arr); 
  res.status(200).json(arr);
}
catch(err)
{
  console.log(err);
  res.status(404);
}
});

router.get("/getpart/:id",async(req,res)=>{
   try
   {
   const {id}=req.params;
   console.log(id);
   const data=await pool.query("SELECT * FROM products WHERE ID=$1",[id]);

   console.log(data);
   res.status(200).json(data.rows)
   }
   catch(err)
   {
    res.status(404);
   }
})
router.get("/getpres/:id",async(req,res)=>{
  try
  {
  const {id}=req.params;
  console.log("hi from prescription",id);
  const data=await pool.query("SELECT * FROM Doctor WHERE email=$1",[id]);

  console.log(data);
  res.status(200).json(data.rows)
  }
  catch(err)
  {
   res.status(404);
  }
})

//get all doctor prescription according to email

router.get("/alldealer",async(req,res)=>{
   try
   {
      const email="Dealer";
      const getall=await pool.query("SELECT * FROM Userss WHERE position = $1", [
        email
      ]);
      console.log(getall);
      res.status(200).json({data:getall.rows});
   }
   catch(err)
   {

   } 
})
router.get("/getall",verifyToken,restrictTo('Doctor','Nurse'),async(req,res)=>{  //prescription toh doctor and nurse add kr sakte hai..
  try
  {
    const {id}=req.user;
    const email=id;
    console.log("hello from getall",email);
   const data=await pool.query("SELECT * FROM Userss WHERE email = $1", [
    email
  ]);
  console.log(data.rows[0].dealer);
  var val;
  let arr=[];
  for(let i=0;i<data.rows[0].dealer.length;i++)
  {
      var value=data.rows[0].dealer[i];
      let obj={};
      console.log("hi value ",value);
       val=await pool.query("SELECT * FROM products where email=$1",[value]);
       Object.assign(obj,val.rows)
       if((Object.keys(obj).length === 0))
       {
        console.log("hi from obj");
       }
       else{
        
       arr[i]=obj;
      //console.log("hi ",val);
       }
  }
  res.status(200).json(arr);
}
catch(err)
{
  res.status(404);
}
})
router.get("/prescription",verifyToken,restrictTo('Dealer'),async(req,res)=>{  //prescription toh doctor and nurse add kr sakte hai..
  try
  {
   const {email}=req.body;
   const data=await pool.query("SELECT * FROM Prescription WHERE email = $1", [
    email
  ]);
  console.log(data);
  res.status(200).json({data:data});
}
catch(err)
{
  res.status(404);
}
})
router.post("/getdate",verifyToken,restrictTo('Dealer'),async(req,res)=>{  //prescription toh doctor and nurse add kr sakte hai..
  try
  {
   let {id}=req.user;
   let email=id; 
   let date=req.body.date;
   let start=date.split(" ")[0];
   let end=date.split(" ")[1];
   //console.log(start);
   //console.log(end);
   const data=await pool.query("SELECT * FROM Userss");
  //console. log(data.rows);
  var dats=[];
  var sum=0;
  for(let i=0;i<data.rows.length;i++)
  {
      if(data.rows[i].dealer!=null&&data.rows[i].dealer.includes(email))
      {
        console.log(data.rows[i]);
         let em=data.rows[i].email;
       //  console.log(em);
         const dat=await pool.query("SELECT * FROM Doctor where email=$1",[em]);
        
         let val=[]; 
         for(let j=0;j<dat.rows.length;j++)
         {
          console.log(dat.rows[j]);
          let pp=[];
          let x=[];
          pp=dat.rows[j].dat.split(" ")[2];
          x=pp.split("/");
          let r=x[0];
          let s=x[1];
          if(r.length==1)
          {
              r="0"+r;
          }
          if(s.length==1)
          {
              s="0"+s;
          }
          let dates=""+r+"/"+s+"/"+x[2];
          console.log(end);
          console.log(dates);
          
         var d1 = start.split("/");
var d2 = end.split("/");
var c = dates.split("/");

var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
var check = new Date(c[2], parseInt(c[1])-1, c[0]);


console.log(from+"  "+to+"   "+check)
          
          if(check >= from && check <= to)    
          {
              sum=sum+parseInt(dat.rows[j].reimbersement);
              dats.push(dat.rows[j]);
          }
          
         }
      }
  }
  console.log(dats+"   "+sum); 
  if(dats.length>0)
  {
    console.log(dats[0]);
    console.log("bye");
    dats[0]={...dats[0],sum:sum};
  }
  res.status(200).json(dats);
}
catch(err)
{
  res.status(404);
}
})
router.get("/getaccordingtodate",verifyToken,restrictTo('Doctor','Nurse'),async(req,res)=>{
    const{startdate,enddate,company}=req.body;

    //3 combination possible
    //1st
    // startdate and enddate filter and no company
    //2nd
    //company and no startdate and enddate
    //3rd
    //both combined

    //1st
    var data;
    if(startdate!=" "&&enddate!=" ")
    {
          if(company==" ")
          {
                data=await pool.query("SELECT * FROM Prescription WHERE email = $1 and dat between startdate=$2 and enddate=$3", [
                email,startdate,enddate
              ]);
          }
    }
    //2nd
    var adding=[];
    if(startdate==" "&&enddate==" ")
    {
       if(company!=" ")
       {
           const dealername=await pool.query("SELECT * from products where email=$1 ",[company]);//email id pass krna hoga
           let n=dealername.rows.length;
           for(let i=0;i<n;i++)
           {
            let title=dealername.rows[i].title;
            data=await pool.query("SELECT * FROM Prescription WHERE title = $1",[title]);    
            adding[i]=data;
           }     
       }
    }
    //3rd
    if(startdate!=" "&&enddate!=" ")
    {
       if(company!=" ")
       {
           const dealername=await pool.query("SELECT * from Products where email=$1 ",[company]);//email id pass krna hoga
           let n=dealername.rows.length;
           for(let i=0;i<n;i++)
           {
            let title=dealername.rows[i].title;
            data=await pool.query("SELECT * FROM Prescription WHERE title = $1 and dat between startdate=$2 and enddate=$3 ",[title,startdate,enddate]);    
            adding[i]=data;
           }
       }
    }
   
    //console.log(dat); 
   try{
        res.status(200).json("hello");
    }
    catch(err)
    {
      res.status(404);
    }
})
//UPDATE
/*
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/
module.exports = router;
 