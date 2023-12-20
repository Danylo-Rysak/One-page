// Store
import { StoreType } from '../root';

export const getUsersSelector = (store: StoreType) => {
  return store.workerReducer.users;
};

export const getUserByIdSelector = (store: StoreType) => {
  return store.workerReducer.currentUser;
};

export const getPositionsSelector = (store: StoreType) => {
  return store.workerReducer.positions;
};
