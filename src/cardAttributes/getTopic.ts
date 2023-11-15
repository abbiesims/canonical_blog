import { PostsResponse } from "../jsonStructure";

function getTopic(post: PostsResponse) {
  const topicNumber = post.topic[0];
  const wpTerm = post._embedded['wp:term'];

  let topic;
  for (let i = 0; i < wpTerm.length; i++) {
    for (let j = 0; j < wpTerm[i].length; j++) {
        let item = wpTerm[i][j]
        if (item.id === topicNumber) {
            topic = item.name;
            return topic;
        }
    }
  }

  // if there is no topic, return 'General'
  return topic || 'General';
}

export default getTopic;