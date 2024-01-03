import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ValueItemProps {
  title: string;
  value: string;
}

export default function ValueItem(props: ValueItemProps) {
  const {title, value} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    width: 160,
  },
  value: {
    fontWeight: '500',
  },
});
