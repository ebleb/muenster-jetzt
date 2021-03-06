import React, { FC } from "react";
import clsx from "clsx";
import styles from "./StyledProjectName.module.scss";

interface IStyledProjectNameProps {
  noBackground?: boolean;
  // className?: string;
}

const StyledProjectName: FC<IStyledProjectNameProps> = ({ noBackground }) => (
  <span
    className={clsx(styles.styledName, {
      [styles.styledNameBackground]: !noBackground,
    })}
  >
    Münster Jetzt
  </span>
);

export default StyledProjectName;
