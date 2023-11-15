import { Card, Link } from "@canonical/react-components";
import { PostsResponse } from "./jsonStructure";
import getCategory from "./cardAttributes/getCategory";
import getDate from "./cardAttributes/getDate";
import getTopic from "./cardAttributes/getTopic";
import './card.css';

interface GenerateCardProps {
    post: PostsResponse;
  }
  
  function GenerateCard({ post }: GenerateCardProps) {
    const topic = getTopic(post);
    const image = post.featured_media;
    const title = post.title.rendered;
    const titleURL = post._links.self[0].href;
    const author = post._embedded.author[0].name;
    const authorURL = post._embedded.author[0].link;
    const date = getDate(post.date.toString());
    const category = getCategory(post);
    return <>
      <Card className="card">
        <div>
          <section>
            <p className="article-topic">{topic}</p>
          </section>
          <section>
            <hr className="separator" />
            <div className="content-section">
              <img className="post-image" src={image} alt="blog post image" />
            </div>
            <div className="content-section">
              <Link href={titleURL} className="article-title">
                {title}
              </Link>
            </div>
            <div className="content-section">
              <p className="article-author-date">
                By <Link href={authorURL} className="author-link">{author}</Link> on {date}
              </p>
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


  

export default GenerateCard;