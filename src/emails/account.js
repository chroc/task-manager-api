const sgMail = require('@sendgrid/mail');

const senderEmail = process.env.SENDER_EMAIL;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// Send welcome email
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: senderEmail,
        subject: 'Thanks for joining in!',
        text: `Welcome to the Task Manager App, ${name}! Let me know how you get along with the app.`
    });
};

// Send email on cancelation
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: senderEmail,
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon. Please feel free to provide any feedback.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}