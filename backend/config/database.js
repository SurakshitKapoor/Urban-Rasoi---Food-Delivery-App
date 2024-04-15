
const mongoose = require('mongoose');

require('dotenv').config();
const MONGODB_URL = process.env.MONGODB_URL;

const dbConnect = async () => {
    await mongoose.connect(MONGODB_URL)
    .then( async () => 
    {
        console.log("DB is connected !");

        const collection = await mongoose.connection.db.collection("food_items");
        collection.find({}).toArray(function(err, data) {
            if(err) {
                console.log(err);
            }
            else{
                console.log("data : ", data);
            }
            
        })
    })
    .catch((err) => {
        console.log("Failed to connect with DB");
        console.log('Error is : ', err.message);
    })
}

module.exports = dbConnect;
