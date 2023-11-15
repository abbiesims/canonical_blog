import { Card, Link, Strip } from "@canonical/react-components";
import { PostsResponse } from "./jsonStructure";
import getCategory from "./cardAttributes/getCategory";
import getAuthor from "./cardAttributes/getAuthor";
import getAuthorURL from "./cardAttributes/getAuthorUrl";
import getDate from "./cardAttributes/getDate";
import getTitle from "./cardAttributes/getTitle";
import getTitleURL from "./cardAttributes/getTitleUrl";
import getTopic from "./cardAttributes/getTopic";
import './card.css';

interface GenerateCardProps {
    post: PostsResponse;
  }
  
  function GenerateCard({ post }: GenerateCardProps) {
    const topic = getTopic(post);
    const image = post.featured_media;
    const title = getTitle(post);
    const titleURL = getTitleURL(post);
    const author = getAuthor(post);
    const authorURL = getAuthorURL(post);
    const date = getDate(post);
    const category = getCategory(post);
    console.log(category)
    return <>
      <Card className="card">
        <div>
          <p>{topic.toUpperCase()}</p>
          <section>
            <hr className="separator" />
            <div>
              <img className="post_image" src={image} alt="blog post image" />
            </div>
          </section>
          <section>
            <hr className="separator" />
            <p>{category}</p>
          </section>
        </div>
      </Card>
    </>
  }


  

export default GenerateCard;