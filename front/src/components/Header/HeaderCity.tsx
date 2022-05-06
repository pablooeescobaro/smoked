import React, { FC } from "react";
import styles from "./Header.module.scss";

type Props = {};

export const HeaderCity: FC<Props> = () => {
  return <div className={styles.header}></div>;
};

export default HeaderCity;
