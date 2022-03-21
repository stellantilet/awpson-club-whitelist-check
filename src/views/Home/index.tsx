/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Main from "./Main";
import Splash from "./Splash";

export const HomeView = ({}) => {
  const [enter, setEnter] = useState(false);
  const [next, setNext] = useState(false);
  const [ship, setShip] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShip(true);
    }, 100);
  });

  const handleEnter = () => {
    setEnter(true);
    setTimeout(() => {
      setNext(true);
      setTimeout(() => {
        setLoad(true);
      }, 1000);
    }, 2000);
  };

  return !next ? (
    <Splash onEnter={handleEnter} ship={ship} enter={enter} />
  ) : (
    <Main load={load} />
  );
};
