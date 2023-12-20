import { createSlice } from '@reduxjs/toolkit';
import { WorkerState } from './interfaces';
import {
  fetchPositions,
  fetchUserById,
  fetchUsers,
  postNewUser,
} from 'store/worker-service/actions';
import {
  fetchPositionsOperation,
  fetchUserByIdOperation,
  fetchUsersOperation,
  postNewUserOperation,
  showMoreWorkersOperation,
} from 'store/worker-service/operations';

const initialState: WorkerState = {
  users: null,
  currentUser: null,
  positions: [],
  maxCount: 0,
  count: 6,
  disabled: false,
  loading: false,
  error: false,
};

const workerReducer = createSlice({
  name: 'worker',
  initialState,
  reducers: {
    showMoreWorkers: showMoreWorkersOperation,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, fetchUsersOperation)
      .addCase(fetchUserById.fulfilled, fetchUserByIdOperation)
      .addCase(postNewUser.fulfilled, postNewUserOperation)
      .addCase(fetchPositions.fulfilled, fetchPositionsOperation);
  },
});

export const { showMoreWorkers } = workerReducer.actions;

export default workerReducer.reducer;
