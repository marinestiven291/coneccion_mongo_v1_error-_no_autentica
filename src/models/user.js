/*const {Schema,model}= require('mogoose');
const { applyTimestamps } = require('./note');
const bcrypt =require('bcryptjs');



const usersquema= new Schema({
    name:{ type : String , required :true},
    email:{type : String , required :true},
    password:{type: String , required :true}
},
{
    timestamps: true
});

usersquema.methods.encript= password => {

    bcrypt.genSalt(10)

}

module.exports=model('primer_usuario',usersquema);*/