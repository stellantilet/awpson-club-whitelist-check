/* eslint-disable @next/next/no-img-element */
import Header from "../../Layouts/Header";
import Explore from "./Explore";
import FAQ from "./FAQ";
import Loading from "./Loading";
import RoadMap from "./RoadMap";
import Welcome from "./Welcome";

const Main = ({ load }: { load: boolean }) => {
  return (
    <>
      <Header />
      <Welcome />
      <Explore />
      <RoadMap />
      <FAQ />
      <Loading load={load} />
    </>
  );
};

export default Main;
