import { Position, User } from 'core/types';

export interface WorkerState {
  users: Array<User> | null;
  currentUser: User | null;
  positions: Array<Position>;
  maxCount: number;
  count: number;
  disabled: boolean;
  loading: boolean;
  error: boolean;
  success: boolean;
  error409: boolean;
}
