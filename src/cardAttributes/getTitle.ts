import { PostsResponse } from "../jsonStructure";

function getTitle(post: PostsResponse) {
    return post.title.rendered;
}

export default getTitle;