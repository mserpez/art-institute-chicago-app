import {CommonResponse} from './common';

export type ArtServicePaginatedResponse<T> = CommonResponse & {
  pagination: Pagination;
  data: T[];
};

export type Pagination = {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
};
