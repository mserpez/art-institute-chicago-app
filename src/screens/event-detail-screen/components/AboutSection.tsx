import React from 'react';
import {StyleSheet, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {ShowMoreButton, Title} from '../../../components';
import {THEME} from '../../../constants';
import {ArtServiceEventDetail} from '../../../service';

interface AboutSectionProps {
  event: ArtServiceEventDetail;
}
export default function AboutSection(props: AboutSectionProps) {
  const {event} = props;
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  const toggleShowFullDescription = () => {
    setShowFullDescription(oldVal => !oldVal);
  };

  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  htmlSection: {
    marginHorizontal: THEME.unit(2),
  },
  htmlContent: {
    color: THEME.colors.textPrimary,
  },
});
