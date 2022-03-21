import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQContainer = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);

const FAQItem = ({
  title,
  children,
  active = false,
  toggleOpen = () => {},
}: {
  title: ReactNode;
  children: ReactNode;
  active?: boolean;
  toggleOpen?: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    toggleOpen();
  };

  useEffect(() => {
    const contentDiv = contentRef.current as HTMLDivElement;
    if (active) {
      const contentInnerDiv = contentDiv.childNodes[0] as HTMLDivElement;
      contentDiv.style.height = `${contentInnerDiv.scrollHeight}px`;
      return;
    }
    contentDiv.style.height = `0px`;
  }, [active]);

  return (
    <div className="mb-4">
      <div
        className="text-sm md:text-lg bg-gray-800 px-4 py-3 rounded cursor-pointer flex items-center justify-between"
        onClick={handleToggle}
      >
        <div>{title}</div>
        <div>{active ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
      <div
        ref={contentRef}
        className={classNames({
          "font-sans text-lg overflow-hidden text-sm transition-height": true,
        })}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [active, setActive] = useState(-1);
  const toggleActive = (index: number) => {
    if (active === index) {
      setActive(-1);
      return;
    }
    setActive(index);
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <h3 className="text-xl md:text-3xl mb-8 text-center">
        FAQ
      </h3>
      <FAQContainer>
        <FAQItem
          title="What is project AWPSONClub?"
          active={active === 0}
          toggleOpen={() => {
            toggleActive(0);
          }}
        >
          The AWPSON team is building a unique virtual world where players can
          stay in their own rooms or together, build their own rooms and watch
          movies together. We want to bring people together, crypto and
          non-crypto movie enthusiasts, to create beautiful, meaningful as well
          as creative things, movie + metaverse platforms in the future, as well
          as staking in the first round of the first drop spaceships which will
          be the start-up of the project, low supply + utilities, on the long
          term this is a utility project that will make passive income for
          everyone in the project. - 555 uniquely generated spaceships are made
          by the best space engineers to take the Intergalactiens to their
          unique rooms.
        </FAQItem>
        <FAQItem
          title="What is the benefit of holding an AWPSONClub NFT?"
          active={active === 1}
          toggleOpen={() => {
            toggleActive(1);
          }}
        >
          <p>- staking, passive income.</p>
          <p>- access to all upcoming series/movies and platforms. </p>
          <p>- in the future metagame verse.</p>
        </FAQItem>
      </FAQContainer>
    </div>
  );
};

export default FAQ;
