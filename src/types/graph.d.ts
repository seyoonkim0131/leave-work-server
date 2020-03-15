export const typeDefs = ["type Schedule {\n  id: Int!\n  userId: Int!\n  date: String!\n  startTime: String\n  endTime: String\n  overTime: String\n  break: String!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  name: String!\n  startH: String\n  startM: String\n  endH: String\n  endM: String\n  salary: String\n  password: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
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

export interface Schedule {
  id: number;
  userId: number;
  date: string;
  startTime: string | null;
  endTime: string | null;
  overTime: string | null;
  break: string;
}
