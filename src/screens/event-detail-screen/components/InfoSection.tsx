import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, ValueItem} from '../../../components';
import {THEME} from '../../../constants';
import {ArtServiceEventDetail} from '../../../service';
import {formatDate} from '../../../utils';

interface InfoSectionProps {
  event: ArtServiceEventDetail;
}

export default function InfoSection(props: InfoSectionProps) {
  const {event} = props;

  return (
    <View>
      <Title title="Info" />
      <View style={styles.container}>
        <ValueItem title="Location" value={event.location} />
        <ValueItem title="Date:" value={formatDate(event.start_date)} />
        <ValueItem title="Paid:" value={event.is_free ? 'No' : 'Yes'} />
        <ValueItem title="Sold out:" value={event.is_sold_out ? 'Yes' : 'No'} />
        <ValueItem
          title="Virtual:"
          value={event.is_virtual_event ? 'Yes' : 'No'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: THEME.unit(2),
    gap: THEME.unit(2),
  },
});
