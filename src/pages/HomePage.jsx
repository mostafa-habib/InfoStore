import React, { useState } from 'react';
import ArticlesList from '../components/ArticlesList';
import ArticleForm from '../components/ArticleForm';

const HomePage = () => {
  const [currentArticle, setCurrentArticle] = useState(null);

  return (
    <div>
      <h1>Home Page</h1>
      <ArticleForm currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} />
      <ArticlesList />
    </div>
  );
};

export default HomePage;
