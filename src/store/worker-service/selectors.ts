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

export const getSuccessSelector = (store: StoreType) => {
  return store.workerReducer.success;
};

export const getError409Selector = (store: StoreType) => {
  return store.workerReducer.error409;
};

export const getLoadingSelector = (store: StoreType) => {
  return store.workerReducer.loading;
};

export const getDisabledSelector = (store: StoreType) => {
  return store.workerReducer.disabled;
};

export const getCountSelector = (store: StoreType) => {
  return store.workerReducer.count;
};
