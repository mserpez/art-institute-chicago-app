import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

interface ContainerProps extends React.PropsWithChildren {
  isLoading?: boolean;
  error?: Error | null;
  fixedScroll?: boolean;
}

export default function Container(props: ContainerProps) {
  const {children, error, isLoading, fixedScroll} = props;

  const isDarkMode = useColorScheme() === 'dark';

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error?.message}</Text>
      </View>
    );
  }

  if (fixedScroll) {
    return <View style={styles.fixedContainer}>{children}</View>;
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixedContainer: {
    flex: 1,
  },
});
