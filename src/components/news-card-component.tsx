import {View, Text, TouchableOpacity} from 'react-native';
import {INews} from '../common/types';

interface INewsCard {
  data: INews;
  //   id: number;
}

const NewsCard: React.FC<INewsCard> = ({data}) => {
  //   const {title} = data;
  return (
    <TouchableOpacity>
      <View>
        <Text>Challenge Card</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
