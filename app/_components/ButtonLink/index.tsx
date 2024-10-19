import React from "react";
import styles from "./index.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Link({ href, children }: Props) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
}
