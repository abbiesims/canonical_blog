import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogPostCard from './BlogPostCard';
import './globalStyles.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BlogPostCard />
  </React.StrictMode>
);

