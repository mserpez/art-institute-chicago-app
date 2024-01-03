import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {SCREENS, THEME} from '../../../constants';
import {NavigationProps} from '../../../navigation';
import {ArtServiceEvent} from '../../../service';
import {cutText} from '../../../utils';

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
        {event.is_free && (
          <View style={styles.containerFree}>
            <Text style={styles.textFree}>Free</Text>
          </View>
        )}
        <Image style={styles.image} source={{uri: event.image_url}} />
        <View style={styles.containerInfo}>
          <Text style={styles.textTitle}>{cutText(event.title, 60)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    gap: THEME.unit(1),
    flexDirection: 'row',
    marginTop: THEME.unit(1),
    marginHorizontal: THEME.unit(1),
    backgroundColor: '#fff',
    borderRadius: THEME.radius,
    overflow: 'hidden',
  },
  // Free tag
  containerFree: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: THEME.colors.main,
    opacity: 0.85,
    paddingHorizontal: THEME.unit(1),
    borderTopRightRadius: THEME.radius,
  },
  textFree: {
    color: 'white',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '400',
  },
  // Information
  containerInfo: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: THEME.unit(1),
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: THEME.colors.textPrimary,
    marginTop: THEME.unit(0.5),
  },
  textExtra: {
    fontSize: 14,
    fontWeight: '500',
    color: THEME.colors.textSecondary,
  },
  // Image
  image: {
    borderTopLeftRadius: THEME.radius,
    borderBottomLeftRadius: THEME.radius,
    height: 100,
    width: 100,
  },
});
