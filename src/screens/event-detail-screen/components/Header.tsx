import * as React from 'react';
import {Animated, Image, StyleSheet, Text} from 'react-native';
import {THEME} from '../../../constants';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 80;

interface HeaderProps {
  animHeaderValue: Animated.Value;
  title: string;
  imageUrl: string;
}

export default function DynamicHeader(props: HeaderProps) {
  const {imageUrl, title, animHeaderValue} = props;

  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: ['#00000044', '#00000090'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, {height: animateHeaderHeight}]}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Animated.View
        style={[
          styles.textOverlay,
          {backgroundColor: animateHeaderBackgroundColor},
        ]}>
        <Text style={styles.headerText}>{title}</Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    height: 200,
    width: '100%',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    height: HEADER_MIN_HEIGHT,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: THEME.unit(2),
  },
});
