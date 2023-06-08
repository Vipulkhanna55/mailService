import { Request, Response } from "express";
import { deliverMessage, logger, validator } from "../../utils";

const mail = async (req: Request, res: Response) => {
  try {
    const dataChannel = new deliverMessage();
    if (!validator(req.body)) {
      return res.status(422).send({ message: "Unprocessable Entity" });
    }
    await dataChannel.mailMessage(req.body);
    return res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    logger.error(error);
    return res.status(500).send({ message: "Error sending email", error });
  }
};

export default mail;

{
  /// VALIDATION
  // notification type
  // get the template
  // get the keys required to fill the above template
  // check if all the keys are present in the request
  // if validation fails
  // return error
  // if validation passes
  // enter data in channel
}

{
  // notification type
  // template
  // fill the template
  // get the subject based notification type
  // fill the subject string using the interpolation
  // SMTP CALLLL
  // DONE
}
