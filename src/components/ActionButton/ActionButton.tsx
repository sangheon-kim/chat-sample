import React from "react";
import cn from "classnames/bind";
import styles from "./ActionButton.module.scss";

const cx = cn.bind(styles);

type ActionButtonProps = React.PropsWithChildren<{
  className?: string;
  onClick?: (...args: any) => void;
}>;

const ActionButton = (props: ActionButtonProps) => {
  const { children, className, onClick } = props;
  return (
    <button className={cx("Wrapper", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default ActionButton;
