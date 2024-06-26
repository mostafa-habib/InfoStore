import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, deleteArticle } from '../features/articles/articlesSlice';

const ArticlesList = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteArticle(id));
  };

  return (
    <div>
      <h2>Articles</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.title}
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
