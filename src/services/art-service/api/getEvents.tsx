import {BaseService} from '../base-service';

export default function getEvents(page = 1, limit = 10) {
  return BaseService.get(`/events?page=${page}&limit=${limit}`);
}
