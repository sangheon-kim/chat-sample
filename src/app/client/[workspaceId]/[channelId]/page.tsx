import React from "react";

type ChannelPageProps = {
  params: {
    channelId: string;
    workspaceId: string;
  };
};

export default function ChannelPage() {
  // channelId, workspaceId 를 params로 받을 수 있어요.

  // 이걸 토대로, 해당 채널의 채팅을 불러온다.
  return <div>채널이 선택되고, 해당 채널의 채팅을 불러옵니다.</div>;
}
