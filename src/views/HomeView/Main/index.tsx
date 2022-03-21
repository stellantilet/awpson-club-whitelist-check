/* eslint-disable @next/next/no-img-element */
import Explore from "./Explore";
import FAQ from "./FAQ";
import Header from "./Header";
import Loading from "./Loading";
import RoadMap from "./RoadMap";
import WalletCheck from "./WalletCheck";
import Welcome from "./Welcome";

const Main = ({ load }: { load: boolean }) => {
  return (
    <>
      <Header />
      <Welcome />
      <Explore />
      <WalletCheck />
      <RoadMap />
      <FAQ />
      <Loading load={load} />
    </>
  );
};

export default Main;
