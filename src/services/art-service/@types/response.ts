import {CommonResponse} from './common';

export type ArtServiceResponse<T> = CommonResponse & {
  data: T;
};
