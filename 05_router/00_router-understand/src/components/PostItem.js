import { Link } from "react-router-dom";


const PostItem = ({post}) => {

    const req = {
        width:"200px",
        height:"200px",
        backgroundColor: "grey",
        textAlign:"center",
        alignItems:"center"
    }
    return (
        <Link to = {`/post/${post.postNo}`}>
            <div style={req}>
                <h4>No : {post.postNo}</h4>
                <h3>Title : {post.title}</h3>
                <h4>Date : {post.date}</h4>
            </div>
        </Link>
    )
}

export default PostItem;