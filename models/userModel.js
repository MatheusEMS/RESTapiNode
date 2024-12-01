const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
   email: String,
   senha: String
  },{
    timestamps: true,
    toObject: {
      transform: function(doc,ret,options){
        ret.id = ret._id;
        delete ret_id;
        delete ret.senha,
        delete ret.__v;
        return ret;
      }
    }
  });



module.exports = mongoose.model('User', userSchema);