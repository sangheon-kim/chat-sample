import React from "react";
import ChannelSideBar from "@/components/ChannelSideBar/ChannelSideBar";
import styles from "@/app/_styles/Channel.layout.module.scss";
import cn from "classnames/bind";
import workspaceService from "@/api/workspace.service";
import { channelService } from "@/api/channel.service";
const cx = cn.bind(styles);

type ChannelLayoutProps = {
  params: {
    workspaceId: string;
    channelId: string;
  };
};

export default async function ChannelLayout(
  props: React.PropsWithChildren<ChannelLayoutProps>
) {
  const {
    params: { workspaceId, channelId },
  } = props;
  const [workspaceData, channelData] = await Promise.all([
    workspaceService.getWorkspaceDetail({
      path: {
        workspaceId,
      },
    }),
    channelService.getChannels({
      path: {
        workspaceId,
      },
    }),
  ]);
  const { children } = props;

  return (
    <div className={cx("Wrapper")}>
      <ChannelSideBar
        channelId={channelId}
        channelList={channelData.results}
        workspaceData={workspaceData}
      />
      <div className={cx("Container")}>{children}</div>
    </div>
  );
}
