import React from "react";
type Props = Omit<React.ComponentProps<"img">, "classNames"> & {};
interface MoreProps extends Props {
  size?: "small" | "normal" | "large";
  src?: string;
  alt?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?:
    | "noopener noreferrer"
    | "noopener noreferrer"
    | "noopener noreferrer"
    | "noreferrer";
}
const Image = React.forwardRef<HTMLImageElement, MoreProps>(
  ({ children, title, src, className, alt, size, onClick, ...props }, ref) => {
    return (
      <img
        src={src}
        alt={alt}
        ref={ref}
        {...props}
        title={title}
        className={`${className}`}
      />
    );
  }
);
Image.displayName = "Image";
export default Image;
