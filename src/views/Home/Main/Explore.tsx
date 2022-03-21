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

export const ExploreModal = ({
  setIsOpen,
  index,
}: {
  setIsOpen: (isOpen: boolean) => void;
  index: number;
}) => {
  let indexRestricted = index < 1 ? 0 : index > 4 ? 3 : index - 1;

  return (
    <>
      <div
        className="fixed left-0 top-0 w-full h-full z-10 opacity-10"
        onClick={() => setIsOpen(false)}
      />
      <div className="centered">
        <div className="location-dialog">
          <h2 className="uppercase mb-4">
            Prision{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setIsOpen(false)}
            >
              x
            </span>
          </h2>
          <div className="modal-content">
            <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible>
              <img src={landingImgs[indexRestricted].src} alt="Landing" />
            </Animated>

            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible>
              <table className="rewards-table">
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
              </table>
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
              className="border-black w-full h-auto"
              style={{
                borderWidth: "10px 10px 10px 10px",
                borderRadius: "98% 2% 99% 1%/2% 98% 1% 99%",
              }}
              alt="Landing"
            />
            <button
              className="explore-button explore-button-space"
              onClick={() => {
                toggleModal(1);
              }}
            >
              Space
            </button>
            <button
              className="explore-button explore-button-camp"
              onClick={() => {
                toggleModal(2);
              }}
            >
              Camp
            </button>
            <button
              className="explore-button explore-button-zab"
              onClick={() => {
                toggleModal(3);
              }}
            >
              Zab
            </button>
            <button
              className="explore-button explore-button-cinema"
              onClick={() => {
                toggleModal(4);
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
