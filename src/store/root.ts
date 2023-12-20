import { configureStore } from '@reduxjs/toolkit';
import workerReducer from 'store/worker-service/reducer';

const store = configureStore({
  reducer: {
    workerReducer,
  },
});

// Global store type
export type StoreType = ReturnType<typeof store.getState>;

// Dispatch type
export type DispatchType = typeof store.dispatch;

export default store;
