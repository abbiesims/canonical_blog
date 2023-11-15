import { PostsResponse } from "../jsonStructure";

/* 
This function queries for the topic (the information in the header of the card)
or the category (the information in the footer).
For the purpose of this exercise, the assumption was made that there would
be only one topic and one category per blog post card. 
*/
function getCategory(blogPost: PostsResponse, queryNumber: number) {
    const wpTerm = blogPost._embedded['wp:term'];
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