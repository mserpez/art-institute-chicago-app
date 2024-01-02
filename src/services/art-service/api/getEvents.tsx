import {ArtServiceEvent, ArtServicePaginatedResponse} from '../@types';
import {BaseService} from '../base-service';

export default function getEvents(
  page = 1,
  limit = 10,
): Promise<ArtServicePaginatedResponse<ArtServiceEvent[]>> {
  return BaseService.get(`/events?page=${page}&limit=${limit}`);
}
