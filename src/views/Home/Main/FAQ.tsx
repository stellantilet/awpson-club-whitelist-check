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
  children?: ReactNode;
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
      <h3 className="text-xl md:text-3xl mb-8 text-center">FAQ</h3>
      <FAQContainer>
        <FAQItem
          title="What is The AWPSONClub x Spaceships?"
          active={active === 0}
          toggleOpen={() => {
            toggleActive(0);
          }}
        >
          The AWPSONClub x Spaceships is an NFT collection of 555 unique
          carefully made Spaceships on the Solana Blockchain.
        </FAQItem>
        <FAQItem
          title="Where will AWPONSClub x Spaceships be minting?"
          active={active === 1}
          toggleOpen={() => {
            toggleActive(1);
          }}
        >
          A Launchpad, haven`t decided yet.
        </FAQItem>
        <FAQItem
          title="How many will I be able to mint?"
          active={active === 2}
          toggleOpen={() => {
            toggleActive(2);
          }}
        >
          You will be able to mint 1 Spaceship per transaction.
        </FAQItem>
        <FAQItem
          title="When is your mint date?"
          active={active === 3}
          toggleOpen={() => {
            toggleActive(3);
          }}
        >
          TBA. All our latest news will be released in our Discord and on Twitter.
        </FAQItem>
        <FAQItem
          title="What will the mint price be and how will your mint work?"
          active={active === 4}
          toggleOpen={() => {
            toggleActive(4);
          }}
        >
          Mint price 0.77 SOL.
        </FAQItem>
      </FAQContainer>
    </div>
  );
};

export default FAQ;
