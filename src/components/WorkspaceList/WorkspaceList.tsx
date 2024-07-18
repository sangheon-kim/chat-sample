// "use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./WorkspaceList.module.scss";
import cn from "classnames/bind";
import Link from "next/link";

const cx = cn.bind(styles);

type WorkspaceProps = React.PropsWithChildren<{
  email: string;
  workspaces: Workspace[];
  more?: boolean;
}>;

const WorkspaceList = (props: WorkspaceProps) => {
  const { email, workspaces, more } = props;
  // const [more, setMore] = React.useState(false);

  const list = (() => {
    if (!more) {
      return workspaces.slice(0, 3);
    }

    return workspaces;
  })();

  return (
    <div
      // className={`${styles.Wrapper} ${isActive ? 'active' : ''}`}
      className={cx("Wrapper", {})}
    >
      <p className={cx("TopSection")}>{email}의 워크스페이스</p>
      <ul className={cx("WorkspaceList")}>
        {list.map((workspace) => {
          return (
            <li key={workspace.id} className={cx("WorkspaceItemWrapper")}>
              <div className={cx("Info")}>
                <img
                  src={workspace.imageUrl}
                  alt={workspace.name + "logo"}
                  className={cx("Thumbnail")}
                />
                <div className={cx("Summary")}>
                  <p>{workspace.name}</p>
                </div>
              </div>
              <Link
                href={`/client/${workspace.id}`}
                className={cx("ContainedButton", "SlackButton")}
              >
                Slack 실행
              </Link>
            </li>
          );
        })}
      </ul>
      {!more && (
        <Link
          href={{
            pathname: "/client",
            query: { more: true },
          }}
          className={cx("MoreButton")}
        >
          더보기
        </Link>
      )}
    </div>
  );
};

export default WorkspaceList;
