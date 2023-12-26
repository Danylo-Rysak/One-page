import { createSlice } from '@reduxjs/toolkit';
import { WorkerState } from './interfaces';
import {
  fetchPositions,
  fetchUserById,
  fetchUsers,
  postNewUser,
} from 'store/worker-service/actions';
import {
  changeStatusError409Operation,
  changeSuccessOperation,
  fetchPositionsOperation,
  fetchUserByIdOperation,
  fetchUsersErrorOperation,
  fetchUsersFulfilledOperation,
  fetchUsersPendingOperation,
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
  success: false,
  error409: false,
};

const workerReducer = createSlice({
  name: 'worker',
  initialState,
  reducers: {
    showMoreWorkers: showMoreWorkersOperation,
    changeSuccess: changeSuccessOperation,
    changeStatusError409: changeStatusError409Operation,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, fetchUsersPendingOperation)
      .addCase(fetchUsers.fulfilled, fetchUsersFulfilledOperation)
      .addCase(fetchUsers.rejected, fetchUsersErrorOperation)
      .addCase(fetchUserById.fulfilled, fetchUserByIdOperation)
      .addCase(postNewUser.fulfilled, postNewUserOperation)
      .addCase(fetchPositions.fulfilled, fetchPositionsOperation);
  },
});

export const { showMoreWorkers, changeSuccess, changeStatusError409 } =
  workerReducer.actions;

export default workerReducer.reducer;
