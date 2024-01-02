import {BaseService} from '../base-service';

export default function getEventDetail(id: number) {
  return BaseService.get(`/events/${id}`);
}
