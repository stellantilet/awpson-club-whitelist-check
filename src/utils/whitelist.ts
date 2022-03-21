import whitelist from "../config/whitelist";
import subwalletlist from "../config/subwhiltelist";
export const checkWhitelisted = (publicKey: string) => {
  const whiltelisted = whitelist.indexOf(publicKey) >= 0;
  if (whiltelisted) {
    return { wl: true, swl: false };
  }
  const subwhitelisted = subwalletlist.indexOf(publicKey) >= 0;
  return subwhitelisted ? { wl: true, swl: true } : { wl: false, swl: false };
};
