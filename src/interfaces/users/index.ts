export interface INewUserRequest {
  nickname: string;
  password: string;
}
export interface INewUserResponse {
  id: string;
  nickname: string;
  createdAt: string;
}
export interface IUserLogin {
  nickname: string;
  password: string;
}
