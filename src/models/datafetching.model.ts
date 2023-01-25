export interface Err {
  type: 'error';
  value: Error;
}

export interface Success<T> {
  type: 'success';
  value: T;
}

export interface Message {
  msg: string;
}

export type Result<T> = Success<T> | Err;
