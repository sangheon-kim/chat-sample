import React from "react";
import styles from "./Header.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const Header = () => {
  return <header className={cx("Wrapper")}>Header</header>;
};

export default Header;
