import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {ApiResponse, fetchNewsData} from '../common/helpers';
import {INews} from '../common/types';

export const fetchNewsHeadlines = createAsyncThunk(
  'news/fetchNewsHeadlines',
  async (_, thunkAPI) => {
    try {
      const result = await fetchNewsData();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch issues.');
    }
  },
);

export interface INewsHeadLineState {
  news: INews[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: INewsHeadLineState = {
  news: [],
  status: 'idle',
  error: null,
};

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNewsHeadlines.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchNewsHeadlines.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload || [];
      })
      .addCase(fetchNewsHeadlines.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
        state.news = [];
      });
  },
});

export default newsSlice.reducer;
