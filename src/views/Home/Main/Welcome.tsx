/* eslint-disable @next/next/no-img-element */
import backgroundImg from "../../../assets/img/background.png";

const Welcome = () => {
  return (
    <div className="relative h-screen w-full flex items-center">
      <img
        src={backgroundImg.src}
        alt="ship"
        className="absolute w-full h-full left-0 top-0 object-cover"
      />
      <div className="container mx-auto relative px-4 py-20">
        <h2 className="text-2xl md:text-3xl mb-6">Welcome to the AWPSONClub</h2>
        <div className="font-sans mb-2">
          A collection of 555 spaceships on the SOLANA Blockchain
        </div>
        <div className="font-sans mb-4">Explore, Create, Enjoy.</div>
        <a
          className="inline-block bg-gray-900 hover:bg-gray-800 rounded px-3 py-1"
          href="https://cinephile.app"
        >
          CINEPHILE.APP
        </a>
      </div>
    </div>
  );
};

export default Welcome;
