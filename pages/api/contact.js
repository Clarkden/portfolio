import nodemailer from "nodemailer";

export default async (req, res) => {

  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });


  try {
    await transporter.sendMail({
      from: email,
      to: "clark_holden@icloud.com",
      subject: `clark-holden.com web development submission! ${name}`,
      html: `<h11>You have a contact form submission from ${name}</h1><br>
        <h2><strong>Email: </strong> ${email}</h2>
        <h2><strong>Message: </strong> ${message}</h2>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: '' });
};