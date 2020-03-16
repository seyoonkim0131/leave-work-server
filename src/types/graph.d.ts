export const typeDefs = ["type Schedule {\n  id: Int!\n  userId: User!\n  date: String!\n  startTime: String\n  endTime: String\n  overTime: String\n  break: String!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  name: String!\n  startH: String\n  startM: String\n  endH: String\n  endM: String\n  salary: String\n  password: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  user: User!\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  SignIn(email: String!, password: String!): SignInResponse!\n  SignUp(email: String!, name: String!, password: String!, startH: String, startM: String, endH: String, endM: String, salary: String): SignUpResponse!\n}\n\ntype SignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n"];
/* tslint:disable */

export interface Query {
  user: User;
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

export interface Schedule {
  id: number;
  userId: User;
  date: string;
  startTime: string | null;
  endTime: string | null;
  overTime: string | null;
  break: string;
}
