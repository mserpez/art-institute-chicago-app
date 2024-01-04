import {useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Container} from '../../components';
import {THEME} from '../../constants';
import {useGetEventDetail} from '../../hooks';
import {AboutSection, BuyTicketsSection, InfoSection} from './components';
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
            <View style={styles.bodyContainer}>
              <InfoSection event={data} />
              <AboutSection event={data} />
              <BuyTicketsSection event={data} />
            </View>
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
  bodyContainer: {
    paddingBottom: THEME.unit(1),
    padding: THEME.unit(1),
    backgroundColor: '#ffffff',
  },
  scrollText: {
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000',
  },
});
