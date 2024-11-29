const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.CLOADINARY_CLOUD_NAME,
    api_key: process.env.CLOADINARY_API_KEY,
    api_secret: process.env.CLOADINARY_API_SECRET,
});

module.exports = cloudinary;