import { logger } from "./logger";

interface messageType {
  Key: string;
}
interface Input {
  receiver_email: string;
  notification_type: string;
  notificationBodyMetaData?: messageType;
  notiFicationSubjectMetaData?: messageType;
}
function validator(data: Input): boolean | undefined {
  try {
    if (data.hasOwnProperty("notificationBodyMetaData")) {
      if (typeof data.notificationBodyMetaData !== "object") {
        return false;
      }
    } else if (data.hasOwnProperty("notificationSubjectMetaData")) {
      if (typeof data.notiFicationSubjectMetaData !== "object") {
        return false;
      }
    }
    return true;
  } catch (error: any) {
    logger.log(error);
  }
}
export default validator;
