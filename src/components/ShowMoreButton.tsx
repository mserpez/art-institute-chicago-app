import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {THEME} from '../constants';

interface ReadMoreButtonProps {
  onPress: () => void;
  isShowingMore: boolean;
}

export default function ReadMoreButton(props: ReadMoreButtonProps) {
  const {onPress, isShowingMore} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {isShowingMore ? 'Show Less' : 'Show More'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  text: {
    color: THEME.colors.primary.main,
    fontWeight: '700',
    fontSize: 12,
  },
});
