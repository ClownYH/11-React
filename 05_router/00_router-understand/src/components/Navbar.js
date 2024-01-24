import { NavLink } from "react-router-dom"


const Navbar = () => {

    return (
        <>
        <ul>
            <li>
                <NavLink to = "/main">Home</NavLink>
            </li>
            <li>
                <NavLink to = "/post">Post</NavLink>
            </li>
            <li>
                <NavLink to = "/mypage">MyPage</NavLink>
            </li>
        </ul>
        
        </>
    )
}

export default Navbar;