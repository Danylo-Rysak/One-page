export interface TokenResponse {
  success: boolean;
  token: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
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
  users: User[];
}

export interface Position {
  id: number;
  name: string;
}

export interface PositionsResponse {
  success: boolean;
  positions?: Array<Position>;
  message?: string;
}
