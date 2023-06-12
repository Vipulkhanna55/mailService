type AmpQType = {
  url: string;
  exchangeName: string | undefined;
};
interface ENV {
  url: string;
  exchangeName: string | undefined;
}
type notificationType = "CUSTOMER_ONBOARDING_FAILURE";
export { AmpQType, notificationType, ENV };
