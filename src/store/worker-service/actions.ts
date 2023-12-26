import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  UserFetchPositions,
  UserFetchUserById,
  UserFetchUsers,
  UserPostUser,
} from 'store/action-types';
import { getPositions, getUserById, getUsersInfo, postUser } from 'core/api/requests';

export const fetchUserById = createAsyncThunk(
  UserFetchUserById,
  async (userId: number) => {
    return await getUserById(userId);
  }
);

export const fetchUsers = createAsyncThunk(UserFetchUsers, async (count?: number) => {
  return await getUsersInfo(count);
});

export const postNewUser = createAsyncThunk(UserPostUser, async (formData: FormData) => {
  return await postUser(formData);
});

export const fetchPositions = createAsyncThunk(UserFetchPositions, async () => {
  return await getPositions();
});
