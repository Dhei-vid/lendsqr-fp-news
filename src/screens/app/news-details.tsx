import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParams} from '../../navigation/app-navigation';
import {format} from 'date-fns';

const windowHeight = Dimensions.get('window').height;

type ReviewChallengeProps = NativeStackScreenProps<
  AppStackParams,
  'NewsDetail'
>;

const NewsDetail: React.FC<ReviewChallengeProps> = ({navigation, route}) => {
  const {Title, Source, PublishedOn, Description, Summary, Categories} =
    route.params.data;

  const formattedDate = format(new Date(PublishedOn), 'MMM dd yyyy');

  return (
    <ScrollView style={styles.main}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text>The latest News Today</Text>

        <Text style={styles.title}>{Title}</Text>

        <View style={styles.publishedMetaInfo}>
          <Text>{Source}</Text>
          <Text style={styles.dot}>|</Text>
          <Text>{formattedDate}</Text>
        </View>
        <Image
          source={{uri: route.params.data.Image ?? null}}
          style={styles.coverImage}
        />

        <View style={styles.bodyInfo}>
          <Text style={styles.label}>
            {Categories?.label?.toUpperCase() ?? 'Top News'}
          </Text>
          <Text style={styles.description}>{Description}</Text>
          <Text>{Summary}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
  },
  content: {
    padding: 15,
    gap: 20,
  },
  coverImage: {
    width: '100%',
    height: windowHeight / 3,
    borderRadius: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
  publishedMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    fontSize: 20,
  },
  label: {
    fontWeight: '700',
    color: 'black',
  },
  bodyInfo: {
    gap: 10,
  },
  description: {
    fontStyle: 'italic',
    color: 'gray',
  },
  backButton: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
});
