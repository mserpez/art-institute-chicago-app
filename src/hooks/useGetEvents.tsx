import {useQuery} from '@tanstack/react-query';
import {ArtServiceEvent, ArtServicePaginatedResponse} from '../service/@types';
import {getEvents} from '../service/api';

export default function useGetEvents() {
  const query = useQuery<ArtServicePaginatedResponse<ArtServiceEvent>>({
    queryKey: ['events'],
    queryFn: () => getEvents(1, 20),
  });

  return {
    isLoading: query.isLoading,
    data: query.data?.data,
    error: query.error,
  };
}
