let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017',
{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=>{
    console.log('Database Connected Successfully');
})
.catch(()=>{
    console.log('Failed Connection...');
})

module.exports = mongoose