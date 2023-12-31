import React, { useEffect, useState } from 'react';
import fetchData from './fetchData';
import { PostsResponse, WpTerm3 } from './jsonStructure';
import BlogPostCard from './BlogPostCard';
import './style/card.css';

function QueryBlogPostData() {
  const [data, setData] = useState<PostsResponse[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDataAndHandleErrors = async () => {
      try {
        const result = await fetchData();
        setData(result as PostsResponse[]);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchDataAndHandleErrors();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((post) => {
        return (
            <div className="card-layout">
              <BlogPostCard blogPost={post}/>
            </div>
        )
      })}
    </div>
  );
}


export default QueryBlogPostData;
