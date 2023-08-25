import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { twMerge } from "tailwind-merge";
import rehypeRaw from "rehype-raw";
import { ReactNode } from "react";

type Props = {
  children: string | number | ReactNode;
  renderAs?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p"
    | "markdown";
  className?: string;
};

const Typo = ({ children, renderAs = "span", className }: Props) => {
  const Element = renderAs === "markdown" ? "p" : renderAs;
  return (
    <>
      {renderAs === "markdown" ? (
        <ReactMarkdown
          linkTarget={"_blank"}
          className={twMerge(
            className,
            "hyphen-mobile",
            "markdown-container",
            "whitespace-pre-wrap"
          )}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {children as any}
        </ReactMarkdown>
      ) : (
        <Element
          className={twMerge("whitespace-pre-line hyphen-mobile", className)}
        >
          {children}
        </Element>
      )}
    </>
  );
};
export default Typo;
