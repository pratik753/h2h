var multer  = require('multer');
var imageMiddleware= require('./ImageMiddle');
var imageModel= require('./image-model');
const formidable = require('formidable');
const fs=require('fs');

module.exports={
    imageUploadForm:function(req,res){
        res.render('upload-form');
     },
     storeImage:function(req,res){
        let form=new formidable.IncomingForm();
        form.keepExtensions=true;
      /*  var upload = multer({
                    storage: imageMiddleware.image.storage(), 
                    allowedImage:imageMiddleware.image.allowedImage 
                    }).single('image');*/


                    form.parse(req,(err,fields,file)=>{
                        if(file[Object.keys(file)[0]])
                        {
                            console.log('Bye');
                           // console.log("good"+"   "+[Object.keys(file)[0]].[0]);
                          
                            const imageName=fs.readFileSync(file.image.filepath)
                           //  console.log(imageName)
                           //  let val= unescape(encodeURIComponent(imageName) );
                            //val=val.toString(); 
                           //  console.log(val);
                            var inputValues = {
                                image_name: imageName
                             }
                             imageModel.storeImage(inputValues, function(data){
                                res.render('upload-form',{alertMsg:data})
                              })
                        }   
                  
                        }  
                    )         
             /*               
        upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
              res.send(err);
           } else if (err) {
              res.send(err);
           }else{
              // store image in database
               var imageName = req.file.originalname;
               console.log(req.file.path.toString());
               console.log(fs.readFileSync(file[Object.keys(file)[0]].path));
               var inputValues = {
                  image_name: imageName
               }
             // call model
             imageModel.storeImage(inputValues, function(data){
               res.render('upload-form',{alertMsg:data})
             })
              
           }
           
        })
        */
     }
}