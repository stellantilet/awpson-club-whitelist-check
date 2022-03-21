import whitelist from "../config/whitelist";
import subwalletlist from "../config/subwalletlist";
export const checkWhitelisted = (publicKey: string) => {
  const whiltelisted = whitelist.indexOf(publicKey) >= 0;
  if (whiltelisted) {
    return { wl: true, swl: false };
  }
  const subwalletlisted = subwalletlist.indexOf(publicKey) >= 0;
  return subwalletlisted ? { wl: true, swl: true } : { wl: false, swl: false };
};
