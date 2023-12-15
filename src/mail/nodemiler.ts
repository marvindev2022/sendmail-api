import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendMail = async (from: string, subject: string, text: string):Promise<boolean> => {
  await transporter.sendMail({
    to: process.env.MAIL_FROM,
    from,
    subject,
    text,
    html: `<span>email recebido de ${from} <br> <br> ${text.replace(
      /\n/g,
      "<br>"
    )}</span>`,
  });

  return true;
};