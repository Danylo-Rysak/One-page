import { PayloadAction } from '@reduxjs/toolkit';
import { WorkerState } from 'store/worker-service/interfaces';
import { Position, User } from 'core/types';

export const fetchUsersOperation = (
  state: WorkerState,
  { payload }: PayloadAction<Array<User> | undefined>
) => {
  state.users = payload || null;
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
  const remainingItems = state.maxCount - state.count;
  const loadMore = Math.min(remainingItems, 6);
  state.count += loadMore;
  state.disabled = remainingItems <= 6;
};

export const fetchPositionsOperation = (
  state: WorkerState,
  { payload }: PayloadAction<Array<Position> | undefined>
) => {
  if (payload) state.positions = [...payload];
};
