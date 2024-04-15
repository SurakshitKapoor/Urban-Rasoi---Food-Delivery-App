
const nodemailer = require("nodemailer");;

require("dotenv").config();

const mailSender = async(email, title, body) => {
    try{

        //creating a transporter 
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        });

        //sending the mail
        let info = await transporter.sendMail({
            from: "Urban Rasoi",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        });

        console.log(info);

        return info;
    }
    catch(err) {
        console.log("Error occured while sending mail : ",err.message);

        return response.status(500).json({
            success:false,
            message: "Server error while mail sending"
        })
    }
}

module.exports = mailSender;