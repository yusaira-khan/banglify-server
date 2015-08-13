function sendEmail (fbResponse, emails) {

    var sendgrid_username = process.env.SENDGRID_USERNAME;
    var sendgrid_password = process.env.SENDGRID_PASSWORD;
    var from = "no-reply@fbdigest.com";


    var sendgrid = require('sendgrid')(sendgrid_username, sendgrid_password);
    var email = new sendgrid.Email();

    email.setTos(emails);
    email.setFrom(from);
    email.setSubject('Your daily digest for HH');
    email.setHtml(fbResponse);
    email.addHeader('X-Sent-Using', 'SendGrid-API');
    email.addHeader('X-Transport', 'web');

    console.log("Sending emails! Stand by...");

    sendgrid.send(email, function (err, json) {
        if (err) {
            console.log("Error!")
            return console.error(err);
        }
        console.log(json);
    });

}

module.exports = sendEmail;
