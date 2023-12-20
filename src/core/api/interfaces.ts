import { Position, User } from 'core/types';

export interface TokenResponse {
  success: boolean;
  token: string;
}

export interface UserResponse {
  success: boolean;
  user?: User;
  message?: string;
}

export interface UsersResponse {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: Array<User>;
}

export interface PositionsResponse {
  success: boolean;
  positions?: Array<Position>;
  message?: string;
}
