import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {THEME} from '../constants';

export default function ReadMoreButton() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>Read More</Text>
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
