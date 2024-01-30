import { Link } from "react-router-dom"


const Error = () => {

    return (
        <>
            <h1>404 Error</h1>
            <Link to={"/"}>
                <span>메인으로</span>
            </Link>
        </>
    )
}

export default Error;