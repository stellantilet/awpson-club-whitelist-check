import loadingImg from "../../../assets/img/loading.gif";
import classNames from "classnames";
const Loading = ({ load }: { load: boolean }) => {
  return (
    <div
      className={classNames({
        "fixed w-full h-full z-20 left-0 top-0": true,
        hidden: load,
      })}
      style={{ backgroundImage: `url(${loadingImg.src})` }}
    ></div>
  );
};

export default Loading;
