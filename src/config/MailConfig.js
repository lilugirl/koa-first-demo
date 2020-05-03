"use strict";
import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
async function send(sendInfo) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '794516454@qq.com', // generated ethereal user
      pass: 'input your passowrd' // generated ethereal password
    }
  });



  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"认证邮件 👻" <794516454@qq.com>', // sender address
    to: sendInfo.email, // list of receivers
    subject: sendInfo.user !== '' ? `你好开发者，${sendInfo.user} ! 注册码：${sendInfo.code}` : `你好开发者 注册码：${sendInfo.code}`, // Subject line
    text: `您的邀请码是 ${sendInfo.code}  ,邀请码过期时间：${sendInfo.expire}`,
    html: `<b>Hello ${sendInfo.user}</b>您的邀请码是 ${sendInfo.code}  ,邀请码过期时间：${sendInfo.expire}` // html body
  });

  return "Message sent: %s", info.messageId;
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//main().catch(console.error);

export default send