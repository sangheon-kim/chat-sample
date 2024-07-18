import axios, { AxiosInstance } from "axios";

export class WorkspaceService {
  constructor(private _ajax: AxiosInstance) {}

  async getWorkspaces(req: getWorkspacesRequest) {
    const { data } = await this._ajax.get<getWorkspacesResponse>(
      "https://example.com/workspaces"
    );

    return data;
  }

  async getWorkspaceDetail(req: getWorkspaceRequest) {
    const { data } = await this._ajax.get<getWorkspaceResponse>(
      `https://example.com/workspaces/${req.path.workspaceId}`
    );

    return data;
  }
}

export default new WorkspaceService(axios.create());
