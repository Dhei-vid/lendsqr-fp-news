import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../store/store';
import {fetchNewsHeadlines} from '../../store/news-slice';
import NewsCard from '../../components/news-card-component';
import Separator from '../../components/separator';
import {INews} from '../../common/types';
import {AppStackParams} from '../../navigation/app-navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ReviewChallengeProps = NativeStackScreenProps<
  AppStackParams,
  'NewsListing'
>;

const NewsListings: React.FC<ReviewChallengeProps> = ({
  navigation: {navigate},
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {news, status} = useSelector((state: RootState) => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNewsHeadlines());
    }
  }, [status, dispatch]);

  const handleNewsCardPress = (data: INews) => {
    // Navigate to details screen with article data
    navigate('NewsDetail', {data});
  };

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Hot News Today</Text>

      <FlatList
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={news}
        onRefresh={() => console.log('Refreshing')}
        refreshing={status === 'loading'}
        ListEmptyComponent={
          <Text style={styles.notFound}>No Results Found</Text>
        }
        ItemSeparatorComponent={Separator}
        renderItem={data => (
          <NewsCard
            data={data.item}
            onClick={() => handleNewsCardPress(data.item)}
          />
        )}
      />
    </View>
  );
};

export default NewsListings;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  flatList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  heading: {
    marginVertical: 20,
  },
  notFound: {
    color: 'red',
  },
});
