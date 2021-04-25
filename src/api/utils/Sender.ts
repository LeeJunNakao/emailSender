import { Sender as ISender } from '../protocols/utils';
import nodemailer from 'nodemailer';

export class Sender implements ISender {
  async send(to: string, subject: string, text: string): Promise<void> {
    const user = process.env.USER_EMAIL;
    const pass = process.env.PASSWORD_EMAIL;

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to,
      subject,
      text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) throw error;
      else console.log(`Email enviado:${info.response}`);
    });
  }
}
