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
  date: string;
  title: ReactNode;
  children: ReactNode;
  left?: boolean;
}) => (
  <div
    className={classNames({
      "flex md:contents": true,
      "flex-row-reverse": left,
    })}
  >
    {left ? (
      <div className="col-start-1 col-end-5 py-4 my-10 ml-auto border-b-2">
        <div className="block md:hidden text-sm mb-2 opacity-80">{date}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="leading-tight text-sm">{children}</p>
      </div>
    ) : (
      <div className="hidden md:block col-start-1 col-end-5 py-4 my-10 text-right opacity-80">
        {date}
      </div>
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
      <div className="col-start-6 col-end-10 py-4 my-10 ml-auto shadow-md border-b-2">
        <div className="block md:hidden text-sm mb-2 opacity-80">{date}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="leading-tight text-sm">{children}</p>
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
      <h3 className="text-center text-5xl pb-8">Road Map</h3>
      <RoadMapContainer>
        <RoadMapItem no={1} date="Apr 2022" title="Initial Drop" left>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quaerat?
        </RoadMapItem>
        <RoadMapItem no={2} date="July 2022" title="Initial Drop">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quaerat?
        </RoadMapItem>
        <RoadMapItem no={2} date="July 2022" title="Initial Drop" left>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quaerat?
        </RoadMapItem>
        <RoadMapItem no={2} date="July 2022" title="Initial Drop">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quaerat?
        </RoadMapItem>
      </RoadMapContainer>
    </div>
  );
};

export default RoadMap;
