/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import loadingImg from "../../../assets/img/loading.gif";
const Loading = ({ load }: { load: boolean }) => {
  return (
    <div
      className={classNames({
        "fixed w-full h-full z-20 left-0 top-0 bg-center": true,
        hidden: load,
      })}
      style={{
        backgroundImage: `url(${loadingImg.src})`,
      }}
    ></div>
  );
};

export default Loading;
