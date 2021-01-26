let mongoose = require('mongoose');
let ImageSchema = new mongoose.Schema(
  { img: 
      { data: Buffer, contentType: String },
      url:String
  },
  { timestamps: true }
);
  
module.exports = mongoose.model('image', ImageSchema);