import React, { useEffect, useState } from 'react';
import fetchData from './fetchData';
import { PostsResponse, WpTerm3 } from './jsonStructure';
import BlogPostCard from './BlogPostCard';
import './card.css';

// Elements that we need
// 1. Topic - links to a number
// 2. Image = `featured_media`
// 3. Title = `title.rendered`
// 4. Author = "post._embedded.author[0].name" (assuming that there is only one author per post)
// 5. Date - need to transform from string to readable date
// 6. Post type = categories? = "post._embedded['wp:term'][0][0].name" (again, assuming there is only one category)

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
