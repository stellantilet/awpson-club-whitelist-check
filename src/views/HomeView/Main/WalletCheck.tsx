/* eslint-disable @next/next/no-img-element */
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Fireworks } from "fireworks-js/dist/react";
import { Animated } from "react-animated-css";
import { checkWhitelisted } from "utils/whitelist";
import backgroundImg from "../../../assets/img/background.png";
import monitorImg from "../../../assets/img/monitor.png";

const WalletCheck = () => {
  const { publicKey } = useWallet();
  const publicKeyValue = publicKey ? publicKey.toBase58() : "";
  const isWhiteListed = checkWhitelisted(publicKeyValue);
  return (
    <div className="relative h-screen w-full">
      <img
        src={backgroundImg.src}
        alt="ship"
        className="absolute w-full h-full left-0 top-0 object-cover"
      />
      {isWhiteListed && (
        <Fireworks
          options={{ speed: 10, particles: 250 }}
          className="absolute w-full h-full left-0 top-0 z-0"
        />
      )}
      <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
        <div className="text-center relative max-w-sm">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible>
            <img
              src={monitorImg.src}
              alt="monitor"
              className="object-contain"
            />
            <div
              className="absolute top-5 left-4 right-2 flex items-center justify-center"
              style={{ aspectRatio: "17 / 9" }}
            >
              <div className="py-4 text-center">
                {publicKey && (
                  <div>
                    {publicKey &&
                      (isWhiteListed ? (
                        <div className="text-2xl text-green-500 text-green-100">
                          SUCCESS
                        </div>
                      ) : (
                        <div className="text-2xl text-red-500">
                          FAILED
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </Animated>
          <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible>
            <WalletMultiButton className="block mx-auto mt-10 font-sans">
              {publicKey ? "" : "Login"}
            </WalletMultiButton>
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default WalletCheck;
