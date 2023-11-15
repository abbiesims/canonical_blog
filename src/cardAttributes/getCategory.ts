import { PostsResponse } from "../jsonStructure";

function getCategory(post: PostsResponse, queryNumber: number) {
    const wpTerm = post._embedded['wp:term'];
    let category;
    for (let i = 0; i < wpTerm.length; i++) {
      for (let j = 0; j < wpTerm[i].length; j++) {
          let item = wpTerm[i][j]
          if (item.id === queryNumber) {
              category = item.name;
              return category;
          }
      }
    }
     // if there is no category, return 'General'
    return category || 'General';
}

export default getCategory;