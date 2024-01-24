import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import { getNick, getPostDetail } from "../components/CommonFunctionApi";


const PostDetail = () => {

    const {postNo} = useParams();
    const [post, setPost] = useState({
        postNo:"",
        title : "",
        date : "",
        contents : ""
    });
    const author = useRef(null);    

    useEffect(() => {
        author.current = getNick();
        setPost(getPostDetail(postNo));
    }, []);

    return (
        <>
            <h2>{post.title}</h2>
            <h3>{author.current}</h3>
            <h4>{post.date}</h4>
            <h5>내용</h5>
            <p>{post.contents}</p>
        </>
    )

}

export default PostDetail;