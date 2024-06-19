import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {INews} from '../common/types';
import {format} from 'date-fns';

const windowWidth = Dimensions.get('window').width;

interface INewsCard {
  data: INews;
  onClick: () => void;
}

const NewsCard: React.FC<INewsCard> = ({data, onClick}) => {
  const {Title, Description, PublishedOn, Categories} = data;
  const date = format(new Date(PublishedOn), 'MMM dd yyyy');

  return (
    <TouchableOpacity style={styles.main} onPress={onClick}>
      <Text style={styles.label}>
        {Categories?.label ? Categories.label.toUpperCase() : 'NEWS'}
      </Text>
      <View style={styles.cardItem}>
        <View style={styles.mataInfoContainer}>
          <Text style={styles.title}>{Title}</Text>
          <View style={styles.newsMetaInfo}>
            <Text>{date ? date : 'No Date'}</Text>
          </View>
        </View>
        <Image
          source={{
            uri: data.Image ?? null,
          }}
          style={styles.cardImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  cardImage: {
    width: 150,
    height: 'auto',
    borderRadius: 8,
  },
  mataInfoContainer: {
    width: windowWidth / 2.1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  newsMetaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    color: 'green',
  },
});
