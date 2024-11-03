import { ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./Stack.module.css";

interface StackProps {
  recursive?: boolean;
  splitAfter?: number;
  space?: string;
  children: ReactNode;
}

export const Stack = ({
  recursive = false,
  splitAfter,
  space = "var(--s1)",
  children,
}: StackProps) => {
  const stackClassNames = clsx(styles.stack, {
    [styles.recursive]: recursive,
    [styles.splitAfter]: splitAfter,
  });

  const stackStyle = {
    "--space": space,
    "--splitAfter": splitAfter ? splitAfter : undefined,
  } as React.CSSProperties;

  return (
    <div className={stackClassNames} style={stackStyle}>
      {children}
    </div>
  );
};
