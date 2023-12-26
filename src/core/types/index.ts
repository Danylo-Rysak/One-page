export type User = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  positions_id: string;
  registration_timestamp?: number;
  photo: string | File;
};

export type Position = {
  id: number;
  name: string;
};

export type UsersInfo = {
  users: Array<User>;
  total_users: number;
};

export type StatusInfo = {
  name: boolean;
  email: boolean;
  phone: boolean;
  position: boolean;
  positions_id: boolean;
  photo: boolean;
};

export type ValidationForm = {
  errorStatus: boolean;
  message: string;
  class: string;
};
