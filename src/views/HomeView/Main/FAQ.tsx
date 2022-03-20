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
    <h3 className="text-2xl mb-8 text-center">Frequently Asked Questions</h3>
    <FAQContainer>
      <FAQItem title="What is frequently asked in a FAQ?">
        FAQ is most commonly pronounced as an initialism, but may also be
        pronounced as an acronym, Web designers often label a single list of
        questions as a, such as on Google Search, while using to denote multiple
        lists of questions such as on United States Treasury sites.
      </FAQItem>
      <FAQItem title="What is frequently asked in a FAQ?">
        FAQ is most commonly pronounced as an initialism, but may also be
        pronounced as an acronym, Web designers often label a single list of
        questions as a, such as on Google Search, while using to denote multiple
        lists of questions such as on United States Treasury sites.
      </FAQItem>
    </FAQContainer>
  </div>
);

export default FAQ;
