import posts from "../data/PostList.json"
import user from "../data/MyData.json"

export function getPostList(){

    return posts;
}

export function getPostDetail(postCode){

    return posts.filter(post => post.postNo === parseInt(postCode))[0];
}

export function getNick(){

    return user.nick;
}