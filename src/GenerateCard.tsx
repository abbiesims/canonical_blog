import { Card } from "@canonical/react-components";
import { PostsResponse } from "./jsonStructure";
import getCategory from "./cardAttributes/getCategory";
import getAuthor from "./cardAttributes/getAuthor";
import getAuthorURL from "./cardAttributes/getAuthorUrl";
import getDate from "./cardAttributes/getDate";
import getImage from "./cardAttributes/getImage";
import getTitle from "./cardAttributes/getTitle";
import getTitleURL from "./cardAttributes/getTitleUrl";
import getTopic from "./cardAttributes/getTopic";

interface GenerateCardProps {
    post: PostsResponse;
  }
  
  function GenerateCard({ post }: GenerateCardProps) {
    const topic = getTopic(post);
    const image = getImage(post);
    const title = getTitle(post);
    const titleURL = getTitleURL(post);
    const author = getAuthor(post);
    const authorURL = getAuthorURL(post);
    const date = getDate(post);
    const category = getCategory(post);
  
    return <Card title={title} thumbnail={category}>
      This is a card
    </Card>
  }


  

export default GenerateCard;