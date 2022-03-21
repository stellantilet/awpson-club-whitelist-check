/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useEffect } from "react";
const StarfieldAnimation = dynamic<{
  className?: string;
  numParticles?: number;
  depth?: number;
}>(
  // @ts-ignore
  () => import("react-starfield-animation"),
  {
    ssr: false,
  }
);

import outsideshipImg from "../../assets/img/outsideship.png";

const Splash = ({
  onEnter,
  enter,
  ship,
}: {
  onEnter: () => void;
  enter: boolean;
  ship: boolean;
}) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code == "Enter") {
      onEnter();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed w-full h-full left-0 top-0 flex items-center justify-center font-sans" style={{backgroundColor: '#111111'}}>
      <StarfieldAnimation
        className="fixed w-full h-full left-0 top-0"
        numParticles={1000}
      />
      <div className="h-4/6 text-center relative container">
        <div className="absolute bottom-0 container">
          <div className="py-4 text-center">
            <img
              src={outsideshipImg.src}
              alt="ship"
              className="mx-auto -mb-10"
              style={{
                transition: "transform 2s",
                transform: !ship
                  ? "translate(200%, -150%)"
                  : !enter
                  ? "translate(0%, 0%)"
                  : "translate(-200%, 150%)",
              }}
              height="600"
              width="600"
            />
            <div className="text-4xl sm:text-6xl font-bold text-gray-100 tracking-wider mb-10">
              AWPSONClub x Spaceship
            </div>
            <div className="text-xl sm:text-4xl text-gray-200 tracking-wider mb-4">
              Only the greatest cinephiles may enter
            </div>
          </div>
          <button
            onClick={onEnter}
            className="px-7 py-2 text-xl rounded bg-gradient-to-r from-gray-800 to-gray-900 hover:to-gray-800 hover:from-gray-700"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Splash;
