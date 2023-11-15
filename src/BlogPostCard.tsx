import { Card, Link } from "@canonical/react-components";
import { PostsResponse } from "./jsonStructure";
import getCategory from "./helperFunctions/getCategory";
import getDate from "./helperFunctions/getDate";
import './style/card.css';

interface BlogPostCardProps {
    blogPost: PostsResponse;
  }
  
  function BlogPostCard({ blogPost: blogPost }: BlogPostCardProps) {
    const topic = getCategory(blogPost, blogPost.topic[0]);
    const image = blogPost.featured_media;
    const title = blogPost.title.rendered;
    const titleURL = blogPost._links.self[0].href;
    const author = blogPost._embedded.author[0].name;
    const authorURL = blogPost._embedded.author[0].link;
    const date = getDate(blogPost.date.toString());
    const category = getCategory(blogPost, blogPost.categories[0]);
    return <>
      <Card className="card">
        <div>
          <section>
            <p className="article-topic">{topic}</p>
          </section>
          <section>
            <div className="main-content">
              <hr className="separator" />
              <div className="content-section">
                <img className="post-image" src={image} alt="blog post image" />
              </div>
              <div className="content-section">
                <div className="title-container">
                  <Link href={titleURL} className="article-title">
                    {title}
                  </Link>
                </div>
              </div>
              <div className="content-section">
                <p className="article-author-date">
                  By <Link href={authorURL} className="author-link">{author}</Link> on {date}
                </p>
              </div>
            </div>
          </section>
          <section>
            <hr className="separator" />
            <p className="article-category">{category}</p>
          </section>
        </div>
      </Card>
    </>
  }

export default BlogPostCard;