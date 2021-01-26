const express = require('express');
const router = express();
const path = require('path')
const Image = require('../model/image');

const multer = require('multer');
const { url } = require('inspector');

//storage 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/image')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

let upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res, next) => {
    console.log(req.file);
    try {

        const image = new Image(req.body);
        image.url = `http://localhost:3000/image/${req.file.filename}`
        let result = await image.save();
        console.log(result)
        res.json({
            status: 200,
            image_url: result
        })
    } catch (error) {
        res.json({
            status: 500,
            error: error
        })
    }

})
//get All Images
router.get('/uploadImageList', async (req, res, next) => {

    try {
        console.log(req.body);
        const results = await Image.find({});
        let arr = []
        results.forEach(element => {
            arr.push(element.url)
        });
        res.json({
            imageList: arr,
            status: 200,
        });

    } catch (error) {
        res.json({
            error: error,
            status: 404
        })
    }
});

module.exports = router;