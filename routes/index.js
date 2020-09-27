var express = require("express");
var router = express.Router();
const path = require("path");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/privacy", function (req, res, next) {
  res.render("privacy");
});
router.get("/schemes", function (req, res, next) {
  res.render("schemePage");
});
router.all("/connect", function (req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let phone = req.body.phone;
  let service = req.body.service;
  const msg = {
    to: "rajulapudip@gmail.com, preetisingh1307@gmail.com",
    cc: "techpranee@gmail.com",
    from: "praneeth@techpranee.com",
    subject: `TECH PRANEE SERVICES REQUIRED FOR ${name} with email :${email} phone : ${phone}`,
    text: `Visitor with name ${name} has sent a message : ${message} for service : ${service}`,
  };
  const msg2 = {
    to: email,
    bcc: "rajulapudip@gmail.com, preetisingh1307@gmail.com",
    from: "praneeth@techpranee.com",
    subject: `Hello ${name} ! Thanks for your enquiry`,
    text: `We will get back to you soon!. You can contact us any time on +917032160008 or write to us at praneeth@techpranee.com`,
  };
  sgMail.send(msg2);
  sgMail
    .send(msg)
    .then(() => {
      res.render("thankyou", {
        title: "Tech Pranee - Web Development and Marketing",
      });
    })
    .catch((err) => {
      res.render("failed");
    });
});

router.all("/blog", (req, res) => { });

module.exports = router;
