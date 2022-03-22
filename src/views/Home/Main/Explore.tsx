/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Animated } from "react-animated-css";
import landingImg from "../../../assets/img/landing.png";
import landing1Img from "../../../assets/img/landing-1.png";
import landing2Img from "../../../assets/img/landing-2.png";
import landing3Img from "../../../assets/img/landing-3.png";
import landing4Img from "../../../assets/img/landing-4.png";

import modal1Img from "../../../assets/img/modal1.png";
import modal2Img from "../../../assets/img/modal2.png";
import modal3Img from "../../../assets/img/modal3.png";
import modal4Img from "../../../assets/img/modal4.png";
import modal5Img from "../../../assets/img/modal5.png";
const landingImgs = [landing1Img, landing2Img, landing3Img, landing4Img];

enum ExploreLocation {
  Space = 0,
  Camp = 1,
  Zab = 2,
  Cinema = 3,
}

const explores = {
  [ExploreLocation.Space]: {
    title: "Space",
    text: (
      <div>
        <p>
          We are cinephiles, cinema is our home, is the only place we feel safe
          at. We strive to see beautiful movies, that&lsquo;s why we decided to
          create a few and become the voice for those who are talented but
          don&lsquo;t have a voice just yet.
        </p>
        <p>
          If we see great storylines, we will make sure to find a way to
          crowd-fund and make a dream become reality, give life to something
          that can live forever.
        </p>
        <p>
          Acting is a way of living, films are here to comfort us when we most
          needed. The greatest movies are those that you could watch a hundred
          times and not get bored of.
        </p>
      </div>
    ),
    image: landing1Img,
  },
  [ExploreLocation.Camp]: {
    title: "Camp",
    text: (
      <div>
        <p>
          We strive to see beautiful movies, that&lsquo;s why we decided to
          create a few and become the voice for those who are talented but
          don&lsquo;t have a voice just yet. If we see great storylines, we will
          make sure to find a way to crowd-fund and make a dream become reality,
          give life to something that can live forever.
        </p>
        <p>
          Acting is a way of living, films are here to comfort us when we most
          needed. The greatest movies are those that you could watch a hundred
          times and not get bored of. If you are really into a movie congrats
          you just found your place, welcome to the Club, you can get fully
          immersed into that world, into the movie world.
        </p>
        <p>
          Hi, world, our world!
          <br />
          🛈According to the study by the University of Maryland, comedies and
          movies that make people laugh, caused people&lsquo;s blood vessels to
          dilate by 22%, lowering blood pressure and reducing stress.
        </p>
        <p>
          🛈 I know that there are lots of great movies out there that could make
          it into major films or perhaps even better than a lot of them out
          there but are just lying in the major studios&lsquo; trashes, that has
          to change.
        </p>
      </div>
    ),
    image: landing2Img,
  },
  [ExploreLocation.Zab]: {
    title: "Zab",
    text: (
      <div>
        <p>
          We are cinephiles, cinema is our home, is the only place we feel safe
          at. We strive to see beautiful movies, that&lsquo;s why we decided to
          create a few and become the voice for those who are talented but
          don&lsquo;t have a voice just yet.
        </p>
        <p>
          If we see great storylines, we will make sure to find a way to
          crowd-fund and make a dream become reality, give life to something
          that can live forever.
        </p>
        <p>
          Acting is a way of living, films are here to comfort us when we most
          needed. The greatest movies are those that you could watch a hundred
          times and not get bored of.
        </p>
      </div>
    ),
    image: landing3Img,
  },
  [ExploreLocation.Cinema]: {
    title: "Cinema",
    text: (
      <div>
        <p>
          We are cinephiles, cinema is our home, is the only place we feel safe
          at. We strive to see beautiful movies, that&lsquo;s why we decided to
          create a few and become the voice for those who are talented but
          don&lsquo;t have a voice just yet.
        </p>
        <p>
          If we see great storylines, we will make sure to find a way to
          crowd-fund and make a dream become reality, give life to something
          that can live forever.
        </p>
        <p>
          Acting is a way of living, films are here to comfort us when we most
          needed. The greatest movies are those that you could watch a hundred
          times and not get bored of.
        </p>
      </div>
    ),
    image: landing4Img,
  },
};

export const ExploreModal = ({
  setIsOpen,
  index,
}: {
  setIsOpen: (isOpen: boolean) => void;
  index: ExploreLocation;
}) => {
  const explore = explores[index];
  return (
    <>
      <div
        className="fixed left-0 top-0 w-full h-full z-10 opacity-10"
        onClick={() => setIsOpen(false)}
      />
      <div className="centered">
        <div className="location-dialog">
          <h3 className="modal-title">{explore.title}</h3>
          <span className="modal-close" onClick={() => setIsOpen(false)}>
            x
          </span>
          <div className="modal-content">
            {/* <Animated
              animationIn="fadeInLeft"
              animationOut="fadeOut"
              isVisible
              animationInDelay={0}
              className="relative z-20"
            >
              <img
                src={explore.image.src}
                alt="Landing"
                className="w-full h-auto"
              />
            </Animated> */}
            <Animated
              animationIn="fadeInDown"
              animationOut="fadeOut"
              animationInDelay={500}
              isVisible
              className="z-10 relative"
            >
              {explore.text}
              {/* <table className="rewards-table">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={modal1Img.src}
                        alt="Camp Tokens"
                        className="w-10"
                      />
                    </td>
                    <td>Camp Tokens</td>
                    <td>0.5%</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={modal2Img.src}
                        alt="Money Pouch"
                        className="w-10"
                      />
                    </td>
                    <td>Money Pouch</td>
                    <td>0.5%</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={modal3Img.src}
                        alt="Flash Light"
                        className="w-10"
                      />
                    </td>
                    <td>Flash Light</td>
                    <td>0.5%</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={modal4Img.src}
                        alt="Binoculars"
                        className="w-10"
                      />
                    </td>
                    <td>Binoculars</td>
                    <td>0.5%</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={modal5Img.src} alt="Compass" className="w-10" />
                    </td>
                    <td>Compass</td>
                    <td>0.5%</td>
                  </tr>
                </tbody>
              </table> */}
            </Animated>
          </div>
        </div>
      </div>
    </>
  );
};

const Explore = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleModal = (index: number) => {
    setIsOpenModal(!isOpenModal);
    setIndex(index);
  };

  return (
    <div className="bg-dark">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-xl md:text-3xl text-center mt-2 mb-5">
          Explore Cinephile Valley
        </h2>
        <div>
          <div style={{ position: "relative" }}>
            <img
              src={landingImg.src}
              className="border-black w-full h-auto border-8 rounded"
              alt="Landing"
            />
            <button
              className="explore-button explore-button-space"
              onClick={() => {
                toggleModal(ExploreLocation.Space);
              }}
            >
              Space
            </button>
            <button
              className="explore-button explore-button-camp"
              onClick={() => {
                toggleModal(ExploreLocation.Camp);
              }}
            >
              Camp
            </button>
            <button
              className="explore-button explore-button-zab"
              onClick={() => {
                toggleModal(ExploreLocation.Zab);
              }}
            >
              Zab
            </button>
            <button
              className="explore-button explore-button-cinema"
              onClick={() => {
                toggleModal(ExploreLocation.Cinema);
              }}
            >
              Cinema
            </button>
          </div>
        </div>
      </div>
      {isOpenModal && <ExploreModal setIsOpen={setIsOpenModal} index={index} />}
    </div>
  );
};

export default Explore;
