import { http, HttpResponse } from "msw";
import { fa, faker } from "@faker-js/faker";

const getFakeUser: () => User = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    profile: {
      imageUrl: faker.image.avatar(),
      bio: faker.person.bio(),
      telNumber: faker.phone.number(),
    },
  };
};

export const handlers = [
  http.get("https://example.com/workspaces", () => {
    return HttpResponse.json<getWorkspacesResponse>({
      results: new Array(10).fill(0).map((_, idx) => {
        return {
          id: idx + 1,
          name: faker.company.name(),
          imageUrl: faker.image.url(),
        };
      }),
    });
  }),
  http.get("https://example.com/workspaces/:workspaceId", (req) => {
    return HttpResponse.json<getWorkspaceResponse>({
      id: Number(req.params.workspaceId),
      name: faker.company.name(),
      imageUrl: faker.image.url(),
    });
  }),
  http.get("https://example.com/my-info", () => {
    return HttpResponse.json<getMyInfoResponse>(getFakeUser());
  }),
  http.get("https://example.com/workspaces/:workspaceId/channels", () => {
    return HttpResponse.json<getChannelsResponse>({
      results: new Array(10).fill(0).map((_, idx) => {
        return {
          id: faker.string.uuid(),
          name: faker.company.name(),
          type: "PUBLIC",
          isSecret: faker.datatype.boolean(),
          members: new Array(faker.number.int({ max: 10 }))
            .fill(0)
            .map(() => getFakeUser()),
        };
      }),
    });
  }),
];
