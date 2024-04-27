import { createTransport } from 'nodemailer';

const sendMail = async(subject, textMessage, sent_to, sent_from, reply_to )=>{
    const transporter = createTransport({
        host: process.env.EMAIL_HOST,
        PORT: "587",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
        },
        tls:{
            rejectUnauthorized:false,
        }


    })
    const options = {
        from : {
            name:"Sriya Task Management Office",
            address:sent_from,
        },
        to : sent_to,
        replyTo: reply_to,
        subject: subject,
        //html: htmlMessage,
        text: textMessage,
        
    }

    //Send Mail
    transporter.sendMail(options,function(err,info){
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    })
}
export default sendMail;
