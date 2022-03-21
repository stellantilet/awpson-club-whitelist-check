/* eslint-disable @next/next/no-img-element */
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Fireworks } from "fireworks-js/dist/react";
import { Animated } from "react-animated-css";
import { checkWhitelisted } from "utils/whitelist";
import backgroundImg from "../../assets/img/background.png";
import smileImg from "../../assets/img/smile.png";
import sadImg from "../../assets/img/sad.png";
import monitorImg from "../../assets/img/monitor.gif";

const WalletCheck = () => {
  const { publicKey } = useWallet();
  const publicKeyValue = publicKey ? publicKey.toBase58() : "";
  const isWhiteListed = checkWhitelisted(publicKeyValue);
  return (
    <div className="relative h-screen w-full flex items-center">
      <img
        src={backgroundImg.src}
        className="absolute h-full w-full left-0 top-0 object-cover"
        alt="Background"
      />
      {isWhiteListed.wl && (
        <Fireworks
          options={{ speed: 10, particles: 250 }}
          className="absolute w-full h-full left-0 top-0 z-0"
        />
      )}
      <div className="container mx-auto relative">
        <div className="text-2xl md:text-3xl text-center px-4 pb-10">
          Presale
        </div>
        <div className="max-w-sm mx-auto text-center relative">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible>
            <img
              src={monitorImg.src}
              alt="monitor"
              className="object-contain"
            />
            <div
              className="absolute left-4 right-2 flex items-center justify-center"
              style={{ top: "28%" }}
            >
              <div className="py-4 text-center">
                {publicKey && (
                  <div>
                    {publicKey &&
                      (isWhiteListed.wl ? (
                        <div className="text-2xl text-green-200">
                          {isWhiteListed.swl ? "SUB-WL" : "WL"}
                          <Animated
                            animationIn="bounceIn"
                            animationOut="bounceOut"
                            isVisible
                          >
                            <img
                              src={smileImg.src}
                              alt="Smile"
                              width={50}
                              className="mt-7 mx-auto"
                            />
                          </Animated>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="text-2xl text-red-500 text-center">
                            FAILED
                          </div>
                          <Animated
                            animationIn="bounceIn"
                            animationOut="bounceOut"
                            isVisible
                          >
                            <img
                              src={sadImg.src}
                              alt="Sad"
                              width={50}
                              className="mt-7 mx-auto"
                            />
                          </Animated>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </Animated>
          <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible>
            <WalletMultiButton className="block mx-auto mt-10">
              {publicKey ? "" : "Login"}
            </WalletMultiButton>
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default WalletCheck;
