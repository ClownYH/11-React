import { useEffect, useState } from "react";
import { getPostList } from "../components/CommonFunctionApi";
import PostItem from "../components/PostItem";


const Post = () => {
    const [postList, SetPostList] =useState([]);

    useEffect(
        () => {
            SetPostList(getPostList());
        },[]
    )

    return (
        <>
            <h1>포스트 목록</h1>
            <section className="postList">
                {postList.map(post => <PostItem key={post.postNo} post={post}/>)}
            </section>
        </>
    )
}

export default Post;