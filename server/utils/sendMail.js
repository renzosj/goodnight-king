const nodemailer = require('nodemailer');



// Send email route
app.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body;
  
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });
  
    // Define email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: subject,
      text: message
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.redirect('/'); // Redirect to an error page or handle the error accordingly
      } else {
        console.log('Email sent: ' + info.response);
        res.redirect('/'); // Redirect to a success page or handle the success accordingly
      }
    });
  });