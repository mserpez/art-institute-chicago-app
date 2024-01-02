import {useQuery} from '@tanstack/react-query';
import {ArtServiceEvent, ArtServicePaginatedResponse} from '../@types';
import {getEvents} from '../api';

export default function useGetEvents() {
  const query = useQuery<ArtServicePaginatedResponse<ArtServiceEvent[]>>({
    queryKey: ['events'],
    queryFn: () => getEvents(),
  });

  return {
    isLoading: query.isLoading,
    data: query.data?.data,
    error: query.error,
  };
}
