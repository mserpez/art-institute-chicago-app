import {useQuery} from '@tanstack/react-query';
import {ArtServiceEventDetail, ArtServiceResponse} from '../@types';
import {getEventDetail} from '../api';

export default function useGetEventDetail(id: number) {
  const query = useQuery<ArtServiceResponse<ArtServiceEventDetail>>({
    queryKey: [`event_${id}`],
    queryFn: () => getEventDetail(id),
  });

  return {
    isLoading: query.isLoading,
    data: query.data?.data,
    error: query.error,
  };
}
