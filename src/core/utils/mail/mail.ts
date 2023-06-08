import nodemailer from "nodemailer";
import { mail } from "../../../config";
import {logger} from "../logger";

const transporter = nodemailer.createTransport({
  service: mail.MAIL_SERVICE,
  host: mail.MAIL_HOST,
  port: mail.MAIL_PORT,
  secure: false,
  auth: {
    user: mail.MAIL_EMAIL,
    pass: mail.MAIL_PASSWORD,
  },
});
const sendMail = async (
  subject: string,
  text: string,
  htmlBody: any,
  toSend: string,
  channel: any,
  msg: unknown
) => {
  try {
    const info = await transporter.sendMail({
      from: mail.EMAIL_FROM,
      to: toSend,
      subject: subject,
      text: text,
      html: htmlBody,
    });
    transporter.sendMail(info, (error, response) => {
      if (error) {
        logger.error(error);
      } else {
        channel.ack(msg);
        logger.info(
          `Email Sent successfully to ${response.envelope.to[0]} from ${response.envelope.from}`
        );
      }
    });
  } catch (error) {
    logger.error(error);
  }
};

export default sendMail;
