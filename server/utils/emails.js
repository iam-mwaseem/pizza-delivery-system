import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  //1.Create a transporter object
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    // secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //2. DEFINE email options
  const mailOptions = {
    from: 'Muhammad Waseem <muhammadwaseemkanyal@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //   console.log(mailOptions);

  //3. Actually send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
