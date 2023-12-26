import { PayloadAction } from '@reduxjs/toolkit';
import { WorkerState } from 'store/worker-service/interfaces';
import { Position, User, UsersInfo } from 'core/types';

export const fetchUsersPendingOperation = (state: WorkerState) => {
  state.loading = true;
};

export const fetchUsersFulfilledOperation = (
  state: WorkerState,
  { payload }: PayloadAction<UsersInfo | undefined>
) => {
  state.users = payload?.users || null;
  state.maxCount = payload?.total_users || 0;
  state.loading = false;
};

export const fetchUsersErrorOperation = (state: WorkerState) => {
  state.error = true;
  state.loading = false;
};

export const fetchUserByIdOperation = (
  state: WorkerState,
  { payload }: PayloadAction<User | undefined>
) => {
  state.currentUser = payload || null;
};

export const postNewUserOperation = (
  state: WorkerState,
  { payload }: PayloadAction<User | undefined>
) => {
  if (payload) {
    state.users = state.users ? [...state.users, payload] : [payload];
  }
};

export const showMoreWorkersOperation = (state: WorkerState) => {
  if (state.maxCount % 6 < 6 && (state.maxCount % 6) + state.count === state.maxCount) {
    state.count = state.maxCount;
    state.disabled = true;
  } else {
    console.log('mama');
    state.count = state.count + 6;
    state.disabled = false;
  }
};

export const changeSuccessOperation = (
  state: WorkerState,
  { payload }: PayloadAction<boolean>
) => {
  state.success = payload;
};

export const changeStatusError409Operation = (
  state: WorkerState,
  { payload }: PayloadAction<boolean>
) => {
  state.error409 = payload;
};

export const fetchPositionsOperation = (
  state: WorkerState,
  { payload }: PayloadAction<Array<Position> | undefined>
) => {
  if (payload) state.positions = [...payload];
};
