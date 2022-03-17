import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>AWPSON Club</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <meta name="description" content="AWPSON Club Whitelist Checking" />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
