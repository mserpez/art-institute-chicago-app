import React from 'react';
import {Button, Linking, StyleSheet, Text, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {Title} from '../../../components';
import {THEME} from '../../../constants';
import {ArtServiceEventDetail} from '../../../service';

interface BuyTicketsSectionProps {
  event: ArtServiceEventDetail;
}

export default function BuyTicketsSection(props: BuyTicketsSectionProps) {
  const {event} = props;

  const onBuyPressHandler = () => {
    Linking.canOpenURL(event.rsvp_link).then(supported => {
      if (supported) {
        Linking.openURL(event.rsvp_link);
      } else {
        console.log("Don't know how to open URI: " + event.rsvp_link);
      }
    });
  };

  return (
    <View>
      <Title title="Buy Tickets" />
      {!event.is_sold_out ? (
        <View style={styles.buySection}>
          <Button title={event.buy_button_text} onPress={onBuyPressHandler} />
          {event.buy_button_caption && (
            <RenderHtml
              contentWidth={200}
              source={{
                html: event.buy_button_caption,
              }}
            />
          )}
        </View>
      ) : (
        <View style={styles.buySection}>
          <Text>{"There aren't any tickets available"}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buySection: {
    margin: THEME.unit(2),
    gap: THEME.unit(2),
    display: 'flex',
    alignItems: 'center',
  },
  soldOutText: {
    marginTop: THEME.unit(2),
    fontWeight: '200',
  },
});
