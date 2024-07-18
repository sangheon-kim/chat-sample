import { channelService } from "@/api/channel.service";
import workspaceService from "@/api/workspace.service";
import { redirect } from "next/navigation";

type WorkspacePageProps = {
  params: {
    workspaceId: string;
  };
};

export default async function WorkspacePage(props: WorkspacePageProps) {
  const {
    params: { workspaceId },
  } = props;

  const [channelList, workspaceData] = await Promise.all([
    channelService.getChannels({
      path: {
        workspaceId,
      },
    }),
    workspaceService.getWorkspaceDetail({
      path: {
        workspaceId,
      },
    }),
  ]);

  if (workspaceData) {
    redirect(`/client/${workspaceId}/${channelList.results[0].id}`);
  }

  return (
    <div>
      여기서는 해당 워크스페이스에 생성된 채널을 불러와서,
      <p>첫번째 채널로 리다이렉션 합니다.</p>
    </div>
  );
}
