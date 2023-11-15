import { PostsResponse } from "../jsonStructure";

function getCategory(post: PostsResponse) {
    const categoryNumber = post.categories[0];
    const wpTerm = post._embedded['wp:term'];
  
    let category;
    for (let i = 0; i < wpTerm.length; i++) {
      for (let j = 0; j < wpTerm[i].length; j++) {
          let item = wpTerm[i][j]
          if (item.id === categoryNumber) {
              category = item.name;
              return category;
          }
      }
    }
    return category;
}

export default getCategory;