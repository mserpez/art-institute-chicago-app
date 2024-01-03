import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {THEME} from '../constants';

interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps) {
  const {title} = props;
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: THEME.colors.primary.dark,
    fontWeight: '700',
    fontSize: 16,
  },
});
