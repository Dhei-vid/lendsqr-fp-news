import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../store/store';
import {fetchNewsHeadlines} from '../../store/news-slice';
import NewsCard from '../../components/news-card-component';
import Separator from '../../components/separator';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NewsListings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {news, status, error} = useSelector((state: RootState) => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNewsHeadlines());
    }
  }, [status, dispatch]);

  return (
    <View style={styles.main}>
      <Text>Hot News Today</Text>

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
        renderItem={data => <NewsCard data={data.item} />}
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
  notFound: {},
});
