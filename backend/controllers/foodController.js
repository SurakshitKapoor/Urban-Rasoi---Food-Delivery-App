const Order = require('../models/Order');

exports.foodData = async (req, resp) => {
    try{

        console.log('foodData is in controller : ', global.food_items, global.foodCategory);

        return resp.status(200).json({
            success:true,
            message:"Data is fetched succesfuuly",
            foodData : global.food_items,
            category: global.foodCategory
        })
        // resp.send([global.food_items, global.foodCategory]);
        
        
    }
    catch(err) {
        console.log("Error while getting food data : ", err.message);

        return resp.status(500).json({
            success:false,
            message:"Something went wrong while getting food Data"
        })
    }
}

exports.createOrder = async(req, resp) => {
    try{
        const data = req.body.orderData;

        const userId = req.verifiedUser.id;

        if(!orderData || !userId) {
            return resp.status(404).json({
                success:false,
                message:"Please fill all fields"
            })
        }

        const existingUser = await Order.findOne({user:userId});

        if(existingUser) {
            try{
                var newOrder = await Order.findOneAndUpdate({user:userId}, {
                    $push: {
                        orderData: data
                    }
                },
                {new:true});

                console.log("newOrder : ", newOrder);

                resp.status(200).json({
                    success:true,
                    message:"Order is created successfully",
                    newOrder:newOrder
                })
            }
            catch(error) {
                console.log("error is : ", error.message);

                resp.status(404).json({
                    success:false,
                    message:"Failed to create order",
                })
            }
           
        }
        else{
            try{
                var newOrder = await Order.create({user:userId, orderData:[data]});

                console.log("newOrder : ", newOrder);

                return resp.status(200).json({
                    success:true,
                    message:"Order is created successfully",
                    newOrder:newOrder
                })
            }
            catch(error) {
                console.log("error is : ", error.message);

                resp.status(404).json({
                    success:false,
                    message:"Failed to create order",
                })
            }
        }
    }
    catch(error) {
        console.log("Error while creating the order : ", error.message);

        return resp.status(500).json({
            success:false,
            message:"Something went wrong while creating order, try again!",
            error: error.message
        })
    }
}