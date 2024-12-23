const { log } = require("console");
const multer = require("multer")
const path = require('path');

const filesDir = path.join(__dirname, '../files');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, filesDir)
    },
    filename: function (req, file, cb) {

      console.log(file);
      
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload


