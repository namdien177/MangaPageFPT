var cloudinary = require('cloudinary');
var express = require('express');
var app = express();

cloudinary.config({
    cloud_name: 'dwd2mzfr3',
    api_key: '556211636531271',
    api_secret: '1G7dDsuA1Y6QToJVXdO9Sc7oM7I'
});
cloudinary.uploader.upload("quang.jpg", function(result) {
    console.log(result)
});
cloudinary.image("sample.jpg", { alt: "Sample Image" })
app.listen(3000,()=>{
    console.log('running on port 3000');
})
