import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9627d86db224e0",
    pass: "bb1e7c344bf534",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <contato@streamline.com.br>",
      to: "Roberto Oliveira <roherool@hotmail.com>",
      subject,
      html: body,
    });
  }
}
