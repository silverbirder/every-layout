import { ReactNode, HTMLAttributes } from "react";
import { clsx } from "clsx";
import "./stack.css";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  recursive?: boolean;
  // splitAfter?: number;
  space?: string;
  children: ReactNode;
}

export const Stack = ({
  recursive = false,
  // splitAfter,
  space = "var(--s1)",
  children,
  className,
  style,
  ...rest
}: StackProps) => {
  const stackClassNames = clsx("stack", {
    ["recursive"]: recursive,
    // ["splitAfter"]: splitAfter,
    className,
  });

  const stackStyle = {
    "--space": space,
    // "--splitAfter": splitAfter ? splitAfter : undefined,
    ...style,
  } as React.CSSProperties;

  return (
    <div className={stackClassNames} style={stackStyle} {...rest}>
      {children}
    </div>
  );
};
