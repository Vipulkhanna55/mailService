import { CUSTOMER_ONBOARDING_FAILURE_CONSTANTS } from "../constants";

const request = {
  CUSTOMER_ONBOARDING_FAILURE: {
    subject(subject?:string){return CUSTOMER_ONBOARDING_FAILURE_CONSTANTS.subject(subject)},
    text: CUSTOMER_ONBOARDING_FAILURE_CONSTANTS.text,
    body(name?: string|undefined) {
     return  CUSTOMER_ONBOARDING_FAILURE_CONSTANTS.body(name);
    },
  },
};
export default request;
