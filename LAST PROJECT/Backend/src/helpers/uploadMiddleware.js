const multer = require('multer');
const path = require("path")

const storage = multer.diskStorage({
    destination: (req,filename,calback) => {
        calback(null,'../public/image')
    },
    filename:(req,file,calback) => {
        const nameFormat = `${Date.now()}--${file.fieldname}${path.extname(
            file.originalname
        )}`;
        calback(null,nameFormat);
    },
});

const upload = multer({
    storage: storage,
    limits: 2 * 1000 * 1000,

})

const singleUpload = (req,res,next) => {
    const uploadImage = upload.single('image');
    uploadImage(req,res,(err) => {
        if(err){
            res.status(500).send({
                msg: "error multer",
                status: 500,
                err,
            })
        }else{
            next();
        }
    })
}

module.exports = singleUpload;