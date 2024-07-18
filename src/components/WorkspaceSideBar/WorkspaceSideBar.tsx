"use client";
import React from "react";
import styles from "./WorkspaceSideBar.module.scss";
import cn from "classnames/bind";
import Icon from "../Icons/Icon";
import { IconType } from "react-icons";
import { ToolTip } from "../ToolTip/ToolTip";
import { usePopper } from "react-popper";

const cx = cn.bind(styles);

type ActionTabProps = {
  name: string;
  icon: React.ReactNode;
  selected?: boolean;
};

const ActionTab = (props: ActionTabProps) => {
  const { name, icon, selected } = props;

  const [isVisible, setVisible] = React.useState(false);
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLButtonElement | null>();
  const [arrowElement, setArrowElement] =
    React.useState<HTMLDivElement | null>();
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    strategy: "fixed",
    placement: "right", //preferred placement of popper
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 4],
        },
      },
      {
        name: "flip",
      },
      {
        name: "preventOverflow",
        options: {
          padding: 10,
        },
      },
      {
        name: "arrow",
        options: {
          element: arrowElement,
        },
      },
    ],
  });
  // const IconComponent = icon;
  return (
    <div className={cx("ActionTabWrapper")}>
      <button
        className={cx("ActionButton", { selected })}
        ref={setReferenceElement}
        onPointerOver={() => setVisible(true)}
        onPointerLeave={() => setVisible(false)}
      >
        {icon}
      </button>
      <p className={cx("Label")}>{name}</p>
      <ToolTip
        ref={setPopperElement}
        setArrowElement={setArrowElement}
        attributes={attributes}
        styles={styles}
        isVisible={isVisible}
      >
        {name}
      </ToolTip>
    </div>
  );
};

const WORKSPACE_DEFAULT_DATA: Array<Omit<ActionTabProps, "selected">> = [
  {
    name: "홈",
    // icon: Icon.Home,
    icon: <Icon.Home />,
  },
  {
    name: "DM",
    // icon: Icon.Chat,
    icon: <Icon.Chat />,
  },
  {
    name: "내 활동",
    // icon: Icon.Bell,
    icon: <Icon.Bell />,
  },
  {
    name: "더 보기",
    // icon: Icon.MoreDot,
    icon: <Icon.MoreDot />,
  },
];

type WorkspaceSideBarProps = React.PropsWithChildren<{} & Workspace>;
const WorkspaceSideBar = (props: WorkspaceSideBarProps) => {
  const { imageUrl } = props;
  return (
    <div className={cx("Wrapper")}>
      <img src={imageUrl} alt={"로고"} className={cx("Logo")} />
      <nav className={cx("Navigation")}>
        {WORKSPACE_DEFAULT_DATA.map((data, idx) => {
          return (
            <ActionTab
              key={idx}
              {...data}
              icon={React.cloneElement(data.icon as React.ReactElement, {
                color: "#fff",
                size: 24,
              })}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default WorkspaceSideBar;
