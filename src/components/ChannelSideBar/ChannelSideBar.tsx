"use client";
import React from "react";
import styles from "./ChannelSideBar.module.scss";
import cn from "classnames/bind";
import Icon from "../Icons/Icon";
import { useRouter } from "next/navigation";
import ActionButton from "../ActionButton/ActionButton";

const cx = cn.bind(styles);

type ChannelSideBarProps = {
  workspaceData: Workspace;
  channelList: Channel[];
  channelId: string;
};

const ICON_COLOR = "#fff";
const ICON_SIZE = 20;
const ChannelSideBar = (props: ChannelSideBarProps) => {
  const { workspaceData, channelList, channelId } = props;
  const router = useRouter();

  return (
    <div className={cx("Wrapper")}>
      <div className={cx("WorkspaceInfo")}>
        <ActionButton className={cx("WorkspaceNameButton")}>
          <h2 className={cx("WorkspaceName")}>{workspaceData.name}</h2>
        </ActionButton>
        <ActionButton>
          <Icon.Filter size={ICON_SIZE} color={ICON_COLOR} />
        </ActionButton>
        <ActionButton>
          <Icon.Note size={ICON_SIZE} color={ICON_COLOR} />
        </ActionButton>
      </div>
      <nav className={cx("ChannelList")}>
        {channelList.map((channel, idx) => {
          return (
            <ActionButton
              key={idx}
              onClick={() =>
                router.push(`/client/${workspaceData.id}/${channel.id}`)
              }
              className={cx("ChannelItem", {
                selected: idx === 0,
              })}
            >
              {channel.isSecret ? (
                <Icon.Lock size={12} color={ICON_COLOR} />
              ) : (
                <Icon.HashTag size={12} color={ICON_COLOR} />
              )}
              <span>{channel.name}</span>
            </ActionButton>
          );
        })}
      </nav>
    </div>
  );
};

export default ChannelSideBar;
