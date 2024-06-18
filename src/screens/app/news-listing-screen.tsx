import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../store/store';
import {fetchNewsHeadlines} from '../../store/news-slice';
import NewsCard from '../../components/news-card-component';

const NewsListings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {news, status, error} = useSelector((state: RootState) => state.news);

  // console.log('NEWSSSSSSSSSSS ', news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNewsHeadlines());
    }
  }, [status, dispatch]);

  return (
    <View style={styles.main}>
      <Text>News Listing Screen</Text>

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
  flatList: {},
  notFound: {},
});
