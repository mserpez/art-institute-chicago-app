import React from 'react';
import {StyleSheet, View} from 'react-native';
import RenderHtml from 'react-native-render-html';

import {ReadMoreButton, Title} from '../../../components';
import {THEME} from '../../../constants';

interface BodyProps {
  description: string;
  shortDescription: string;
}

export default function Body(props: BodyProps) {
  const {shortDescription} = props;

  return (
    <View style={styles.container}>
      <Title title="Information" />
      <RenderHtml
        contentWidth={200}
        source={{html: shortDescription}}
        baseStyle={styles.htmlContent}
      />
      <ReadMoreButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: THEME.unit(1),
    padding: THEME.unit(1),
    backgroundColor: '#ffffff',
  },
  htmlContent: {
    color: THEME.colors.textPrimary,
  },
});
