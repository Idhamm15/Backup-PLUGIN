const cloudinary = require('cloudinary').v2;
const { path } = require('express/lib/application');
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadCLoudinary =(req,res,next) => {
    const pathFile = req.pathFile;
    const uniqueName = new DataTransfer().tolSOSString();

    cloudinary.uploader.upload(
        pathFile,
        {
            resource_type: 'raw',
            public_id:  `express-cloudinary2-{uniqueName}`,
            tags: `express-cloudinary2`,
        },
        (err,image) => {
            if(err) return res.status(500).send(err);
            console.log("File uploaded to cloudinary")

            fs.unlinkSync(pathFile);
            req.image = image;
            next();
        }
    )
}
module.exports = uploadCLoudinary;