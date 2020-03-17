export const typeDefs = ["type Schedule {\n  id: Int!\n  userId: User!\n  date: String!\n  startTime: String\n  endTime: String\n  overTime: String\n  break: String!\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype Query {\n  GetMyProfile: GetMyProfileResponse!\n  user: User!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  name: String!\n  startH: String\n  startM: String\n  endH: String\n  endM: String\n  salary: String\n  password: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  SignIn(email: String!, password: String!): SignInResponse!\n  SignUp(email: String!, name: String!, password: String!, startH: String, startM: String, endH: String, endM: String, salary: String): SignUpResponse!\n  UpdateMyProfile(name: String, startH: String, startM: String, endH: String, endM: String, salary: String, password: String): UpdateMyProfileResponse!\n}\n\ntype SignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetMyProfile: GetMyProfileResponse;
  user: User;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  id: number;
  email: string;
  name: string;
  startH: string | null;
  startM: string | null;
  endH: string | null;
  endM: string | null;
  salary: string | null;
  password: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  SignIn: SignInResponse;
  SignUp: SignUpResponse;
  UpdateMyProfile: UpdateMyProfileResponse;
}

export interface SignInMutationArgs {
  email: string;
  password: string;
}

export interface SignUpMutationArgs {
  email: string;
  name: string;
  password: string;
  startH: string | null;
  startM: string | null;
  endH: string | null;
  endM: string | null;
  salary: string | null;
}

export interface UpdateMyProfileMutationArgs {
  name: string | null;
  startH: string | null;
  startM: string | null;
  endH: string | null;
  endM: string | null;
  salary: string | null;
  password: string | null;
}

export interface SignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface SignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface UpdateMyProfileResponse {
  ok: boolean;
  error: string | null;
}

export interface Schedule {
  id: number;
  userId: User;
  date: string;
  startTime: string | null;
  endTime: string | null;
  overTime: string | null;
  break: string;
}
