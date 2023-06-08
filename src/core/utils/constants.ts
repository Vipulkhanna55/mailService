const CUSTOMER_ONBOARDING_FAILURE_CONSTANTS = {
  subject(subject?: string) {
    return subject !== undefined
      ? ` ${subject}   `
      : `Customer on boarding failure`;
  },
  text: "The onBoarding of the customer has been Failed",
  body(name?: string) {
    return name !== undefined
      ? `The process for onboarding of the User ${name}   has been failed`
      : `The process for onboarding of the User has been failed`;
  },
};

export { CUSTOMER_ONBOARDING_FAILURE_CONSTANTS };
