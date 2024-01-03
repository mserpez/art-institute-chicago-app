import React from 'react';
import {StyleSheet, View} from 'react-native';
import RenderHtml from 'react-native-render-html';

import {THEME} from '../../../constants';

interface BodyProps {
  description: string;
}

export default function Body(props: BodyProps) {
  const {description} = props;

  return (
    <View style={styles.container}>
      <RenderHtml contentWidth={200} source={{html: description}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: THEME.unit(2),
    padding: THEME.unit(1),
  },
});
