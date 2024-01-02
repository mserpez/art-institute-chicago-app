import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {SCREENS, THEME} from '../../../../constants';
import {NavigationProps} from '../../../../navigation';
import {ArtServiceEvent} from '../../../../services/art-service';

interface CardProps {
  event: ArtServiceEvent;
}

export default function Card(props: CardProps) {
  const {event} = props;
  const navigation = useNavigation<NavigationProps>();

  const navigateToDetailsHandler = () => {
    navigation.navigate(SCREENS.EVENT_DETAIL, {id: event.id});
  };

  return (
    <TouchableOpacity onPress={navigateToDetailsHandler}>
      <View style={styles.container}>
        <Text>{event.id}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: THEME.unit(1),
    marginHorizontal: THEME.unit(1),
    padding: THEME.unit(2),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
