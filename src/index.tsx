import React from 'react';
import ReactDOM from 'react-dom/client';
import QueryBlogPostData from './QueryBlogPostData';
import './style/globalStyles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryBlogPostData />
  </React.StrictMode>
);

