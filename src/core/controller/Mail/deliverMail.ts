import amqp from "amqplib";
import { amqpData } from "../../../config";
import { request, sendMail, templates, notificationType } from "../../utils";

templates;

const Email = async () => {
  const rabbitMQConnection = await amqp.connect(amqpData.url);
  const channel = await rabbitMQConnection.createChannel();
  await channel.assertExchange(amqpData.exchangeName!, "direct");
  const createQueue = await channel.assertQueue("MessageQueue");
  await channel.bindQueue(createQueue.queue, amqpData.exchangeName!, "");

  channel.consume(createQueue.queue, (msg) => {
    if (msg !== null) {
      const messageData = JSON.parse(msg.content.toString());
      const mailData: notificationType = messageData.notification_type;

      sendMail(
        request[mailData].subject(
          messageData.hasOwnProperty("notificationSubjectMetaData")
            ? messageData.notificationSubjectMetaData.hasOwnProperty("subject")
              ? messageData.notificationSubjectMetaData.subject
              : undefined
            : undefined
        ),
        request[mailData].text,
        templates(
          request[mailData].body(
            messageData.hasOwnProperty("notificationBodyMetaData")
              ? messageData.notificationBodyMetaData.hasOwnProperty("name")
                ? messageData.notificationBodyMetaData.name
                : undefined
              : undefined
          )
        ),
        messageData.receiver_email.toLowerCase().trim(),
        channel,
        msg
      );
    }
  });
};

export default Email;
