import whitelist from "../config/whitelist.json";
export const checkWhitelisted = (publicKey: string) => {
  return whitelist.indexOf(publicKey) >= 0;
};
