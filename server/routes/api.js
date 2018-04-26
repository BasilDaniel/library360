const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({ 
  storage: storage,
  fileFilter: function(reg , file, cb){
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if(extname && mimetype){
      return cb(null, true);
    }
    else{
      cb('Error: Images Only');
    }
  }
 })

/* GET api listing. */
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'api GET works'
  });
});

router.get('/:panoId', (req, res, next) => {
  const id = req.params.panoId;
  res.status(200).json({
    message: 'api GET:panoId works',
    id: id
  });
});

router.post('/', upload.single('panoImage'), (req, res, next) => {
  console.log(req.file);
  res.status(201).json({
    message: 'api POST works',
    name: req.body.name,
    imagePath: req.file.path
  });
});

module.exports = router;