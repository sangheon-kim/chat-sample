import axios, { AxiosInstance } from "axios";

export class UserService {
  constructor(private _ajax: AxiosInstance) {}

  async getMyInfo() {
    const { data } = await this._ajax.get<getMyInfoResponse>(
      "https://example.com/my-info"
    );

    return data;
  }
}

export const userService = new UserService(axios.create());
