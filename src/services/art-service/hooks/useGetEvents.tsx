import {useQuery} from '@tanstack/react-query';
import {getEvents} from '../api';

export default function useGetEvents() {
  const query = useQuery({queryKey: ['events'], queryFn: () => getEvents()});

  return {
    isLoading: query.isLoading,
    data: query.data,
    error: query.error,
  };
}
