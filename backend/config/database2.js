const mongoose = require('mongoose');

require('dotenv').config();
const MONGODB_URL = process.env.MONGODB_URL;

const dbConnect = async() => {
    try{
        await mongoose.connect(MONGODB_URL);

        const collection = await mongoose.connection.db.collection("food_items");
        // console.log("collection : ", collection);

        const data = await collection.find({}).toArray(async function(err, data) {

            if(err) {
                console.log('err in data collection: ', err.message);
            }
            else{
                console.log("data is : ", data);
            }
        })
        console.log("data : ", data);
        global.food_items = data;

        const foodCategoryCollection = await mongoose.connection.db.collection('foodCategory');
        // console.log(foodCategoryCollection);

        const catData = await foodCategoryCollection.find({}).toArray();

        console.log("catData: ", catData);
        global.foodCategory = catData;

        
    }
    catch(err) {
        console.log("Failed to connect with DB");
        console.log("Error is : ", err.message);
    }
}

module.exports = dbConnect;