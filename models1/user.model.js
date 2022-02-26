const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email:{type: 'string', required: true},
    password:{type: 'string', required: true},
    
},{
    versionKey:false,
    timestamps:true
})


userSchema.pre("save",function(next){
    if(! this.isModified("password")) return next();
    
    var hash = bcrypt.hashSync(this.password, 8);
    this.password=hash;
    
    return next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}
const User = mongoose.model("user",userSchema)
module.exports = User;