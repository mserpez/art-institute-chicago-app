import React from 'react';

import {Container} from '../../components';
import {useGetEvents} from '../../services/art-service';
import {Card} from './components';

export default function EventsListScreen() {
  const {data, isLoading, error} = useGetEvents();

  return (
    <Container error={error} isLoading={isLoading}>
      {data?.map(event => (
        <Card key={event.id} event={event} />
      ))}
    </Container>
  );
}
