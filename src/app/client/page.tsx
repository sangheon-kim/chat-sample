import { userService } from "@/api/user.service";
import workspaceService from "@/api/workspace.service";
import WorkspaceList from "@/components/WorkspaceList/WorkspaceList";
import { EventEmitterReferencingAsyncResource } from "events";
import { Metadata } from "next";

type ClientPageProps = {
  searchParams: {
    more?: string;
  };
};

export default async function CientPage(props: ClientPageProps) {
  const {
    searchParams: { more },
  } = props;
  const [workspaceData, userData] = await Promise.all([
    workspaceService.getWorkspaces({}),
    userService.getMyInfo(),
  ]);

  return (
    <div
      style={{
        background: "#4a154b",
      }}
    >
      <WorkspaceList
        workspaces={workspaceData.results}
        email={userData.email}
        more={!!more}
      />
    </div>
  );
}
