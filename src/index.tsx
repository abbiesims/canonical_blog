import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogPostCard from './BlogPostCard';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BlogPostCard />
  </React.StrictMode>
);

