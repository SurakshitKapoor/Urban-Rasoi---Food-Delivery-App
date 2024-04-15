const mongoose = require('mongoose');
const Order = require('./Order');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now()
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
})


async function sendVerificationEmail (email) {
    try{
        const mailResponse = await mailSender (email, "WelCome to Urban Rasoi", "Your registeration is successfull at Urban Rasoi");
        console.log("Mail sended Successfully : ", mailResponse);
    }
    catch(err) {
        console.log("Error occured in sendVerificationEmail func while sending mail : ", err.message);

        throw err;
    }  
}

//db mein schema bnane ke baad -> pre call hoga -> means model mein entry se phle yeh pre wala kaam karo
userSchema.post("save", async function(next) {
    await sendVerificationEmail(this.email);
    next();
})

module.exports = mongoose.model('User', userSchema);

