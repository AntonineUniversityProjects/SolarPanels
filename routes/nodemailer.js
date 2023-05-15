// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport(transporter,{
//     service : "gmail" ,
//     auth: {
//         user: "roy.gebrayel10@gmail.com",
//         pass:"ROge1234"
//     }
// });
// const options = {
//     from: "roy.gebrayel10@gmail.com",
//     to: "roy.gebrayel11@gmail.com",
//     subject: "sending email with node.js",
//     Text: "wow that's simple"

// };
// transporter.sendMail(options,function(err , info){
//     if(err){
//         console.log(err);
//     }
// })

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'roy.gebrayel10@gmail.com',
        pass: 'ROge1234'
    }
});

var mailOptions = {
    from: 'roy.gebrayel10@gmail.com',
    to: 'roy.gebrayel11@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});