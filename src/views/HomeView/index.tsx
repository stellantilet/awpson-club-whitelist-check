/* eslint-disable @next/next/no-img-element */
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Fireworks } from "fireworks-js/dist/react";
import { checkWhitelisted } from "utils/whitelist";
import backgroundImg from "../../assets/img/background.png";
import outsideshipImg from "../../assets/img/outsideship.png";
import { Animated } from "react-animated-css";

export const HomeView = ({}) => {
  const { publicKey } = useWallet();
  const publicKeyValue = publicKey ? publicKey.toBase58() : "";
  const isWhiteListed = checkWhitelisted(publicKeyValue);
  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <img
        src={backgroundImg.src}
        className="fixed w-full h-full left-0 top-0 z-0 object-cover"
        alt="background"
      />
      {isWhiteListed && (
        <Fireworks
          options={{ speed: 10, particles: 250 }}
          className="fixed w-full h-full left-0 top-0 z-0"
        />
      )}
      <div className="fixed w-full h-full left-0 top-0 flex items-center justify-center">
        <div className="h-1/3 text-center relative container">
          <div className="absolute bottom-0 container">
            <div className="py-4 text-center">
              <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOutRight"
                isVisible={!publicKeyValue}
              >
                <img
                  src={outsideshipImg.src}
                  alt="ship"
                  className="mx-auto object-contain -mb-10"
                />
              </Animated>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={!!publicKeyValue}
              >
                {publicKey && (
                  <div className="max-w-lg mx-auto bg-gray-700 border-yellow-600 border-4 shadow-lg p-5">
                    <p>
                      <>{publicKey.toBase58()}</>
                    </p>
                    {publicKey &&
                      (isWhiteListed ? (
                        <div className="text-5xl text-red text-green-100">
                          Whitelisted
                        </div>
                      ) : (
                        <div className="text-5xl text-red-400">
                          Not Whitelisted
                        </div>
                      ))}
                  </div>
                )}
              </Animated>
            </div>
            <WalletMultiButton className="block mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
