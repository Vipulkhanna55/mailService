import "dotenv/config";
import { AmpQType } from "../core/utils";
const PORT: number = Number(process.env.PORT) || Number(8000);
const amqpData: AmpQType = {
  url: process.env.URL!,
  exchangeName: process.env.EXCHANGENAME!,
};
const mail = {
  MAIL_EMAIL: process.env.MAIL_EMAIL,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: 587,
  MAIL_SERVICE: "gmail",
};

export { PORT, amqpData, mail };
