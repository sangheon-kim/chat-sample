interface Channel {
  /** 채널 ID */
  id: string;
  /** 채널 명 */
  name: string;
  /** 채널 타입 */
  type: string;
  /** 공개 여부 */
  isSecret: boolean;
  /** 참여 멤버 */
  members: User[];
}

type getChannelsRequestPath = {
  workspaceId: string;
};

type getChannelsRequestParam = {};

type getChannelsRequestBody = {};

type getChannelsRequest = {
  path: getChannelsRequestPath;
  param?: getChannelsRequestParam;
  body?: getChannelsRequestBody;
};

type getChannelsResponse = {
  results: Channel[];
};
