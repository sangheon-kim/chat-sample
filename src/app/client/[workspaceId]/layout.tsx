import React from "react";
import styles from "@/app/_styles/Workspace.layout.module.scss";
import cn from "classnames/bind";
import workspaceService from "@/api/workspace.service";
import { userService } from "@/api/user.service";
import WorkspaceSideBar from "@/components/WorkspaceSideBar/WorkspaceSideBar";
import Header from "@/components/Header/Header";

const cx = cn.bind(styles);

type WorkspaceLayoutProps = {
  params: {
    workspaceId: string;
  };
};

export default async function WorkspaceLayout(
  props: React.PropsWithChildren<WorkspaceLayoutProps>
) {
  const { children, params } = props;
  const { workspaceId } = params;

  const [workspaceData, userData] = await Promise.all([
    workspaceService.getWorkspaceDetail({
      path: {
        workspaceId,
      },
    }),
    userService.getMyInfo(),
  ]);

  return (
    <div className={cx("Wrapper")}>
      <Header />
      <main className={cx("Main")}>
        <WorkspaceSideBar {...workspaceData} />
        {children}
      </main>
    </div>
  );
}
