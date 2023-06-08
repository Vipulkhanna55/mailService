import { AmpQType } from "../core/utils";
const port: number = 8000;
const amqpData: AmpQType = {
  url: "amqp://localhost",
  exchangeName: "mailExchange",
};
const mail = {
  MAIL_EMAIL: "vipulkhanna33@gmail.com",
  MAIL_PASSWORD: "muapddtxurggsxkw",
  EMAIL_FROM: "vipulkhanna33@gmail.com",
  MAIL_HOST: "smtp.gmail.com",
  MAIL_PORT: 587,
  MAIL_SERVICE: "gmail",
};

export { port, amqpData, mail };
