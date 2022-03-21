/* eslint-disable @next/next/no-img-element */
import Explore from "./Explore";
import FAQ from "./FAQ";
import Header from "./Header";
import Loading from "./Loading";
import RoadMap from "./RoadMap";
import WalletCheck from "./WalletCheck";

const Main = ({ load }: { load: boolean }) => {
  return (
    <>
      <Header />
      <WalletCheck />
      <Explore />
      <RoadMap />
      <FAQ />
      <Loading load={load} />
    </>
  );
};

export default Main;
