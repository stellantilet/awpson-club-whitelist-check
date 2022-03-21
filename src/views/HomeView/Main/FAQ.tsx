import { ReactNode } from "react";

const FAQContainer = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);

const FAQItem = ({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) => (
  <div className="mb-8">
    <div className="text-lg mb-4">{title}</div>
    <div className="text-sm">{children}</div>
  </div>
);

const FAQ = () => (
  <div className="container mx-auto px-4 py-10 max-w-5xl">
    <h3 className="text-xl md:text-3xl mb-8 text-center">
      Frequently Asked Questions
    </h3>
    <FAQContainer>
      <FAQItem title="What is project AWPSONClub?">
        The AWPSON team is building a unique virtual world where players can
        stay in their own rooms or together, build their own rooms and watch
        movies together. We want to bring people together, crypto and non-crypto
        movie enthusiasts, to create beautiful, meaningful as well as creative
        things, movie + metaverse platforms in the future, as well as staking in
        the first round of the first drop spaceships which will be the start-up
        of the project, low supply + utilities, on the long term this is a
        utility project that will make passive income for everyone in the
        project. - 555 uniquely generated spaceships are made by the best space
        engineers to take the Intergalactiens to their unique rooms.
      </FAQItem>
      <FAQItem title="What is the benefit of holding an AWPSONClub NFT?">
        <p>- staking, passive income.</p>
        <p>- access to all upcoming series/movies and platforms. </p>
        <p>- in the future metagame verse.</p>
      </FAQItem>
    </FAQContainer>
  </div>
);

export default FAQ;
