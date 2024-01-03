import React from 'react';
import {Button, Linking, StyleSheet, Text, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {ShowMoreButton, Title, ValueItem} from '../../../components';
import {THEME} from '../../../constants';
import {ArtServiceEventDetail} from '../../../service';
import {formatDate} from '../../../utils';

interface BodyProps {
  event: ArtServiceEventDetail;
}

export default function Body(props: BodyProps) {
  const {event} = props;

  const [showFullDescription, setShowFullDescription] = React.useState(false);

  const toggleShowFullDescription = () => {
    setShowFullDescription(oldVal => !oldVal);
  };

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
    <View style={styles.container}>
      <Title title="Info" />
      <View style={styles.infoSection}>
        <ValueItem title="Location" value={event.location} />
        <ValueItem title="Date:" value={formatDate(event.start_date)} />
        <ValueItem title="Paid:" value={event.is_free ? 'No' : 'Yes'} />
        <ValueItem title="Sold out:" value={event.is_sold_out ? 'Yes' : 'No'} />
        <ValueItem
          title="Virtual:"
          value={event.is_virtual_event ? 'Yes' : 'No'}
        />
      </View>
      <Title title="About" />
      <View style={styles.htmlSection}>
        <RenderHtml
          contentWidth={200}
          source={{
            html: showFullDescription
              ? event.description
              : event.short_description,
          }}
          baseStyle={styles.htmlContent}
        />
      </View>
      <ShowMoreButton
        onPress={toggleShowFullDescription}
        isShowingMore={showFullDescription}
      />
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
  container: {
    paddingBottom: THEME.unit(1),
    padding: THEME.unit(1),
    backgroundColor: '#ffffff',
  },
  // Info
  infoSection: {
    margin: THEME.unit(2),
    gap: THEME.unit(2),
  },
  // About
  htmlSection: {
    marginHorizontal: THEME.unit(2),
  },
  htmlContent: {
    color: THEME.colors.textPrimary,
  },
  // Buy tickets
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
