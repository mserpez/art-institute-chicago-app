import {useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {Animated, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Container} from '../../components';
import {useGetEventDetail} from '../../hooks';
import {Body} from './components';
import DynamicHeader from './components/Header';

export default function EventDetailScreen() {
  // TODO: fix type.
  const navigationState = useRoute<any>();
  const eventId = navigationState.params?.id as number;
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const {data, error, isLoading} = useGetEventDetail(eventId);

  return (
    <Container fixedScroll error={error} isLoading={isLoading}>
      {data && (
        <SafeAreaView style={styles.container}>
          <DynamicHeader
            animHeaderValue={scrollOffsetY}
            imageUrl={data.image_url}
            title={data.title}
          />
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
              {useNativeDriver: false},
            )}>
            <Body description={data.description} />
          </ScrollView>
        </SafeAreaView>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 0,
  },
  scrollText: {
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000',
  },
});
