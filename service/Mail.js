import nodemailer from "nodemailer";

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendCode({ username, phone }) {
    return await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Благодарим за оставленный звонок: ${phone}`,
      text: "",
      html: `
        <div>
          <h1>Мы Вам обязательно перезвоним ${username}</h1>
        </div>
      `,
    });
  }
}

export default MailService;
