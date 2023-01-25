export interface IErr {
  type: 'error';
  value: Error;
}

export interface ISuccess<T> {
  type: 'success';
  value: T;
}

export interface IMessage {
  msg: string;
}

export type IResult<T> = ISuccess<T> | IErr;
