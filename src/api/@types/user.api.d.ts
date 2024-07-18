interface Profile {
  /** 프로필 이미지 */
  imageUrl: string;
  /** 소개 */
  bio: string;
  /** 전화번호 */
  telNumber: string;
}

interface User {
  /** ID */
  id: string;
  /** 이름 */
  name: string;
  /** 이메일 */
  email: string;
  /** 유저 프로필 */
  profile: Profile;
}

type getMyInfoRequestPath = {};

type getMyInfoRequestParam = {};

type getMyInfoRequestBody = {};

type getMyInfoRequest = {
  path?: getMyInfoRequestPath;
  param?: getMyInfoRequestParam;
  body?: getMyInfoRequestBody;
};

type getMyInfoResponse = User;
