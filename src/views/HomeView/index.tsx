/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Main from "./Main";
import Splash from "./Splash";

export const HomeView = ({}) => {
  const [enter, setEnter] = useState(false);
  const [next, setNext] = useState(false);

  const handleEnter = () => {
    setEnter(true);
    setTimeout(() => {
      setNext(true);
    }, 2000);
  };

  return !next ? <Splash onEnter={handleEnter} enter={enter} /> : <Main />;
};
