import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  EventsList: undefined;
  EventDetail: {id: number};
};

export type NavigationProps =
  NativeStackScreenProps<RootStackParamList>['navigation'];
