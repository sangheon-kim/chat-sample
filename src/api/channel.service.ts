import axios, { AxiosInstance } from "axios";

export class ChannelService {
  constructor(private _ajax: AxiosInstance) {}

  async getChannels(req: getChannelsRequest) {
    const {
      path: { workspaceId },
    } = req;
    const { data } = await this._ajax.get<getChannelsResponse>(
      `https://example.com/workspaces/${workspaceId}/channels`
    );

    return data;
  }
}

export const channelService = new ChannelService(axios.create());
