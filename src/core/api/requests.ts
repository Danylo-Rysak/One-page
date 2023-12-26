import { api } from './axios';
import {
  PositionsResponse,
  TokenResponse,
  UserResponse,
  UsersResponse,
} from './interfaces';
import { _count } from './constants';
import { Position, User, UsersInfo } from 'core/types';

export const getToken = async () => {
  try {
    const response = await api.get<TokenResponse>('/token');
    const { success, token } = response.data;
    if (success) {
      localStorage.setItem('token', token);
    } else {
      console.error('Token request failed.');
    }
  } catch (error) {
    console.error('Error fetching token:', error);
  }
};

export const postUser = async (formData: FormData) => {
  try {
    if (localStorage.getItem('token')) {
      const response = await api.post('/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } else {
      console.error('Failed to post user. No access');
    }
  } catch (error) {
    console.error('Error posting user:', error);
    return { success: false, message: 'Error posting user' };
  }
};

export const getUserById = async (userId: number): Promise<User | undefined> => {
  try {
    const response = await api.get<UserResponse>(`/users/${userId}`);
    const { success, user } = response.data;
    if (success && user) {
      return user;
    } else {
      console.error('Failed to fetch user:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

export const getUsersInfo = async (count = _count): Promise<UsersInfo | undefined> => {
  try {
    const response = await api.get<UsersResponse>(`/users?count=${count}`);
    const { success, users, total_users } = response.data;
    if (success) {
      return { users, total_users };
    } else {
      console.error('Users request failed.');
    }
    return { users, total_users };
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const getPositions = async (): Promise<Array<Position> | undefined> => {
  try {
    const response = await api.get<PositionsResponse>('/positions');
    const { success, positions } = response.data;
    if (success && positions) {
      return positions;
    } else {
      console.error('Failed to fetch positions:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching positions:', error);
  }
};
