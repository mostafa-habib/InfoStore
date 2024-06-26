import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle, updateArticle } from '../features/articles/articlesSlice';

const ArticleForm = ({ currentArticle, setCurrentArticle }) => {
  const [title, setTitle] = useState(currentArticle ? currentArticle.title : '');
  const [content, setContent] = useState(currentArticle ? currentArticle.content : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentArticle) {
      dispatch(updateArticle({ id: currentArticle.id, title, content }));
    } else {
      dispatch(addArticle({ title, content }));
    }
    setTitle('');
    setContent('');
    setCurrentArticle(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">{currentArticle ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ArticleForm;
