const mongoose = require('mongoose');

const {schema} = mongoose;

const catagSchema = new mongoose.Schema({

username:{
    type:String,
    require:true
}


})
const dataModel = mongoose.model('data', catagSchema);
module.exports=dataModel;