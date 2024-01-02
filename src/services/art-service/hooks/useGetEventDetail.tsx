import {useQuery} from '@tanstack/react-query';
import {getEventDetail} from '../api';

export default function useGetEventDetail(id: number) {
  const query = useQuery({
    queryKey: [`event_${id}`],
    queryFn: () => getEventDetail(id),
  });

  return {
    isLoading: query.isLoading,
    data: query.data,
    error: query.error,
  };
}
