import { Card, Link } from "@canonical/react-components";
import { PostsResponse } from "./jsonStructure";
import getCategory from "./cardAttributes/getCategory";
import getAuthor from "./cardAttributes/getAuthor";
import getAuthorURL from "./cardAttributes/getAuthorUrl";
import getDate from "./cardAttributes/getDate";
import getTitle from "./cardAttributes/getTitle";
import getTopic from "./cardAttributes/getTopic";
import './card.css';

interface GenerateCardProps {
    post: PostsResponse;
  }
  
  function GenerateCard({ post }: GenerateCardProps) {
    const topic = getTopic(post);
    const image = post.featured_media;
    const title = getTitle(post);
    const titleURL = post._links.self[0].href;
    const author = getAuthor(post);
    const authorURL = getAuthorURL(post);
    const date = getDate(post);
    const category = getCategory(post);
    console.log(category)
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
              <a href={titleURL} className="article-title">
                {title}
              </a>
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