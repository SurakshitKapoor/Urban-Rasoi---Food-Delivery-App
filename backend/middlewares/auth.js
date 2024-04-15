
const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.auth = async(req, resp, next) => {
    try{
        let jwtToken = req.body.jwtToken || req.cookies.token;

        if(!jwtToken) {

            console.log('Token is missing');

            return resp.status(404).json({
                success:false,
                message:"The Token is missing!"
            })
        }

        console.log("jwtToken : ", jwtToken);

        try{
            const decodedToken = jwt.verify(jwtToken, process.env.JWT_SECRET);
            console.log("decodedToken : ", decodedToken);

            req.verifiedUser = decodedToken;

            next();
        }
        catch(error) {
            console.log("Error while decoding the jwtToken : ", error.message);

            return resp.status(404).json({
                success:false,
                message:"Something went wrong while decoding the jwtToken"
            })
        }
    }
    catch(error){
        console.log("Error while fetching jwtToken : ", error.message);

        return resp.status(500).json({
            success:false,
            message:'Something went wrong while fetching the jwtToken',
            error:error.message
        })
    }
}