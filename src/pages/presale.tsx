import type { NextPage } from "next";
import Head from "next/head";
import { PresaleView } from "views/Presale";

const Presale: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>AWPSONClub x Spaceships - Presale</title>
      </Head>
      <PresaleView />
    </div>
  );
};

export default Presale;
