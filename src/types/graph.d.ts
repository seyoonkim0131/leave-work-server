export const typeDefs = ["type GetMyScheduleResponse {\n  ok: Boolean!\n  error: String\n  schedule: [Schedule]\n}\n\ntype Query {\n  GetMySchedule: GetMyScheduleResponse!\n  schedule: Schedule\n  GetMyProfile: GetMyProfileResponse!\n  user: User!\n}\n\ntype Schedule {\n  id: Int!\n  userId: Int!\n  user: User!\n  date: String!\n  startTime: String\n  endTime: String\n  overTime: String\n  break: String!\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  id: Int!\n  email: String!\n  name: String!\n  startH: String\n  startM: String\n  endH: String\n  endM: String\n  salary: String\n  password: String!\n  schedule: [Schedule]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  SignIn(email: String!, password: String!): SignInResponse!\n  SignUp(email: String!, name: String!, password: String!, startH: String, startM: String, endH: String, endM: String, salary: String): SignUpResponse!\n  UpdateMyProfile(name: String, startH: String, startM: String, endH: String, endM: String, salary: String, password: String): UpdateMyProfileResponse!\n}\n\ntype SignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetMySchedule: GetMyScheduleResponse;
  schedule: Schedule | null;
  GetMyProfile: GetMyProfileResponse;
  user: User;
}

export interface GetMyScheduleResponse {
  ok: boolean;
  error: string | null;
  schedule: Array<Schedule> | null;
}

export interface Schedule {
  id: number;
  userId: number;
  user: User;
  date: string;
  startTime: string | null;
  endTime: string | null;
  overTime: string | null;
  break: string;
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
  schedule: Array<Schedule> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
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
