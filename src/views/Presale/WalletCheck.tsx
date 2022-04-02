/* eslint-disable @next/next/no-img-element */
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Fireworks } from "fireworks-js/dist/react";
import { Animated } from "react-animated-css";
import { checkWhitelisted } from "utils/whitelist";
// import smileImg from "../../assets/img/smile.png";
// import sadImg from "../../assets/img/sad.png";
import monitorImg from "../../assets/img/monitor.gif";
import monitorSmileImg from "../../assets/img/monitor-smile.gif";
import monitorSadImg from "../../assets/img/monitor-sad.gif";

const WalletCheck = () => {
  const { publicKey } = useWallet();
  const publicKeyValue = publicKey ? publicKey.toBase58() : "";
  const isWhiteListed = checkWhitelisted(publicKeyValue);
  const selectedMonitorImg = !publicKey
    ? monitorImg
    : isWhiteListed.wl
    ? monitorSmileImg
    : monitorSadImg;
  return (
    <div className="bg-black relative h-screen w-full flex items-center">
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
              src={selectedMonitorImg.src}
              alt="monitor"
              className="border border-white border-8 rounded object-contain"
            />
            <div
              className="absolute left-4 right-2 flex items-center justify-center"
              style={{ top: "28%" }}
            >
              <div className="py-4 text-center">
                {publicKey && (
                  <div>
                    {publicKey && isWhiteListed.wl && (
                      <div className="text-2xl text-green-200">
                        {isWhiteListed.swl ? "SUB-WL" : "WL"}
                      </div>
                    )}
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
