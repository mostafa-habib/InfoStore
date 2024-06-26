import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/apiClient';

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

// Thunks for async operations
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const response = await apiClient.get('/posts');
  return response.data;
});

export const addArticle = createAsyncThunk('articles/addArticle', async (article) => {
  const response = await apiClient.post('/posts', article);
  return response.data;
});

export const updateArticle = createAsyncThunk('articles/updateArticle', async (article) => {
  const response = await apiClient.put(`/posts/${article.id}`, article);
  return response.data;
});

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (id) => {
  await apiClient.delete(`/posts/${id}`);
  return id;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        state.articles.push(action.payload);
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        const index = state.articles.findIndex((article) => article.id === action.payload.id);
        state.articles[index] = action.payload;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.articles = state.articles.filter((article) => article.id !== action.payload);
      });
  },
});

export default articlesSlice.reducer;
