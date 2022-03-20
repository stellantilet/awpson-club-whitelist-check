/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
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
}: {
  onEnter: () => void;
  enter: boolean;
}) => {
  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0 font-sans">
      <StarfieldAnimation
        className="fixed w-full h-full left-0 top-0"
        numParticles={1000}
      />
      <div className="fixed w-full h-full left-0 top-0 flex items-center justify-center">
        <div className="h-4/6 text-center relative container">
          <div className="absolute bottom-0 container">
            <div className="py-4 text-center">
              <img
                src={outsideshipImg.src}
                alt="ship"
                className="mx-auto -mb-10"
                style={{
                  transition: "transform 2s",
                  transform: !enter
                    ? "translate(0%, 0%)"
                    : "translate(-200%, 150%)",
                }}
                height="600"
                width="600"
              />
              <div className="text-4xl sm:text-6xl font-bold text-gray-100 tracking-wider mb-10">
                AWPSONClub x Spaceship
              </div>
              <div className="text-2xl sm:text-4xl text-gray-300 tracking-wider mb-4">
                Only the greatest cinephiles may enter
              </div>
            </div>
            <button
              onClick={onEnter}
              className="bg-gray-600 px-6 py-2 rounded hover:bg-gray-800 font-bold"
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
