import {ArtServiceEventDetail, ArtServiceResponse} from '../@types';
import {BaseService} from '../base-service';

export default function getEventDetail(
  id: number,
): Promise<ArtServiceResponse<ArtServiceEventDetail>> {
  return BaseService.get(`/events/${id}`);
}
