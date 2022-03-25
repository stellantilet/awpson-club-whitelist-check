import { ReactNode } from "react";
import classNames from "classnames";

const RoadMapContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
    {children}
  </div>
);

const RoadMapItem = ({
  no,
  date,
  title,
  children,
  left = false,
}: {
  no: number;
  date?: string;
  title: ReactNode;
  children?: ReactNode;
  left?: boolean;
}) => (
  <div
    className={classNames({
      "flex md:contents": true,
      "flex-row-reverse": left,
    })}
  >
    {left ? (
      <div className="col-start-1 col-end-5 py-4 my-10 mr-auto md:ml-auto md:mr-0">
        <div className="block md:hidden text-sm mb-2 opacity-80">{date}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        {children && (
          <div className="leading-tight text-lg font-sans pb-3 border-b-2">
            {children}
          </div>
        )}
      </div>
    ) : (
      date && (
        <div className="hidden md:block col-start-1 col-end-5 py-4 my-10 text-right opacity-80">
          {date}
        </div>
      )
    )}
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-10 flex items-center justify-center">
        <div
          className="h-full bg-gray-200 pointer-events-none"
          style={{ width: "2px" }}
        ></div>
      </div>
      <div className="w-10 h-10 absolute top-12 border-2 pt-2 rounded-full bg-yellow-400 text-black shadow text-center">
        {no}
      </div>
    </div>
    {!left ? (
      <div className="col-start-6 col-end-10 py-4 my-10 shadow-md">
        <div className="block md:hidden text-sm mb-2 opacity-80">{date}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        {children && (
          <div className="leading-tight text-lg font-sans pb-3 border-b-2">
            {children}
          </div>
        )}
      </div>
    ) : (
      <div className="hidden md:block col-start-6 col-end-12 py-4 my-10 opacity-80">
        {date}
      </div>
    )}
  </div>
);

const RoadMap = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h3 className="text-2xl md:text-3xl text-center pb-8">Road Map</h3>
      <RoadMapContainer>
        <RoadMapItem no={1} date="Apr 2022" title="Chapter I" left>
          <ul className="list-disc ml-4">
            <li>Implementation of the Valley Staking system. </li>
            <li>Implementation of Cinephilewood platform. </li>
            <li>Marketing.</li>
          </ul>
        </RoadMapItem>
        <RoadMapItem no={2} date="May 2022" title="Marketing">
          <ul className="list-disc ml-4">
            <li>AMA session with celebrity, marketing.</li>
            <li>Dropping 25% royalties to holders.</li>
          </ul>
        </RoadMapItem>
        <RoadMapItem no={3} date="July 2022" title="Movies" left>
          <ul className="list-disc ml-4">
            <li>Adding new indie licensed movies on the platform.</li>
            <li>
              Begin working on the script for our short film WEB3 movie,
              pre-production.
            </li>
          </ul>
        </RoadMapItem>
        <RoadMapItem no={4} date="August 2022" title="Metaverse">
          <ul className="list-disc ml-4">
            <li>
              Start working on the metaverse, if we do it, we&lsquo;ll do it right.
            </li>
            <li>Dropping 25% revenue from royalties to holders.</li>
          </ul>
        </RoadMapItem>
        <RoadMapItem
          no={5}
          title={
            <div className="relative">
              Chapter II
              <div className="text-sm absolute -top-5 -right-4 font-sans">
                soon
              </div>
            </div>
          }
          left
        ></RoadMapItem>
      </RoadMapContainer>
    </div>
  );
};

export default RoadMap;
