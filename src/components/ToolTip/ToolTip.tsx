import React from "react";
import styles from "./ToolTip.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

interface ToolTipProps {
  position?: "top" | "bottom" | "left" | "right";
  setArrowElement: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | undefined>
  >;
  styles: {
    [key: string]: React.CSSProperties;
  };
  attributes: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | undefined;
  };
  isVisible: boolean;
}

export const ToolTip = React.forwardRef(
  (
    props: React.PropsWithChildren<ToolTipProps>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const {
      children = "ToolTip",
      setArrowElement,
      styles,
      attributes,
      isVisible,
    } = props;

    return (
      <div
        className={cx("ToolTip")}
        ref={ref}
        style={styles.popper}
        {...attributes.popper}
        data-popper-reference-hidden={!isVisible}
      >
        <p>{children}</p>
        <div
          ref={setArrowElement}
          className={cx("Arrow")}
          style={styles.arrow}
          data-popper-arrow
        />
      </div>
    );
  }
);

ToolTip.displayName = "ToolTip";
