/* eslint-disable @next/next/no-img-element */
import FAQ from "./FAQ";
import Header from "./Header";
import RoadMap from "./RoadMap";
import WalletCheck from "./WalletCheck";

const Main = () => {
  return (
    <>
      <Header />
      <WalletCheck />
      <RoadMap />
      <FAQ />
    </>
  );
};

export default Main;
