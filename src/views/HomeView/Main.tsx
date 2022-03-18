/* eslint-disable @next/next/no-img-element */
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Fireworks } from "fireworks-js/dist/react";
import { Animated } from "react-animated-css";
import { checkWhitelisted } from "utils/whitelist";
import backgroundImg from "../../assets/img/background.jpg";
import landingImg from "../../assets/img/landing.png";
import monitorImg from "../../assets/img/monitor.png";

const Main = () => {
  const { publicKey } = useWallet();
  const publicKeyValue = publicKey ? publicKey.toBase58() : "";
  const isWhiteListed = checkWhitelisted(publicKeyValue);

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0 ">
      <img
        src={backgroundImg.src}
        alt="ship"
        className="fixed w-full h-full left-0 top-0 object-cover"
      />
      {isWhiteListed && (
        <Fireworks
          options={{ speed: 10, particles: 250 }}
          className="fixed w-full h-full left-0 top-0 z-0"
        />
      )}
      <div className="fixed w-full h-full left-0 top-0 flex items-center justify-center">
        <div className="text-center relative max-w-sm">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible>
            <img
              src={monitorImg.src}
              alt="monitor"
              className="object-contain"
            />
            <div
              className="absolute top-2 left-2 right-2 bg-gray-300 flex items-center justify-center"
              style={{ aspectRatio: "17 / 9" }}
            >
              <div className="py-4 text-center">
                {publicKey && (
                  <div>
                    {publicKey &&
                      (isWhiteListed ? (
                        <div className="text-3xl text-green-500 text-green-100">
                          Whitelisted
                        </div>
                      ) : (
                        <div className="text-3xl text-red-500">
                          Not Whitelisted
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </Animated>
          <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible>
            <WalletMultiButton className="block mx-auto">
              {publicKey ? "" : "Login"}
            </WalletMultiButton>
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default Main;
