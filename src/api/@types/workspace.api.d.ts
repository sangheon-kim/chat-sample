interface Workspace {
  id: number;
  name: string;
  imageUrl: string;
}

type getWorkspacesRequestPath = {};

type getWorkspacesRequestParam = {};

type getWorkspacesRequestBody = {};

type getWorkspacesRequest = {
  path?: getWorkspacesRequestPath;
  param?: getWorkspacesRequestParam;
  body?: getWorkspacesRequestBody;
};

type getWorkspacesResponse = {
  results: Workspace[];
};

type getWorkspaceRequestPath = {
  workspaceId: string;
};

type getWorkspaceRequestParam = {};

type getWorkspaceRequestBody = {};

type getWorkspaceRequest = {
  path: getWorkspaceRequestPath;
  param?: getWorkspaceRequestParam;
  body?: getWorkspaceRequestBody;
};

type getWorkspaceResponse = Workspace;
