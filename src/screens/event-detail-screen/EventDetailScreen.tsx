import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {Container} from '../../components';

export default function EventDetailScreen() {
  // TODO: fix type.
  const navigationState = useRoute<any>();
  const eventId = navigationState.params?.id as number;

  return (
    <Container>
      <Text> {`Event Detail: ${eventId}`} </Text>
    </Container>
  );
}
