import { useState } from "react"


const Footer = () => {

    const [isWhite, setIsWhite] = useState(false);

    const footerBlackStyle = {
        backgroundColor : "black",
        textAlign:"center",
        position:"fixed",
        bottom:0,
        width:"100%",
        height:"5%",
        button:{
            color:"orange",
            backgroundColor:"crimson"
        }
    }

    const footerWhiteStyle = {
        backgroundColor : "white",
        textAlign:"center",
        position:"fixed",
        bottom:0,
        width:"100%",
        height:"5%",
        button:{
            color:"orangered",
            backgroundColor:"black"
        }
    }

    const onClickHandler = () => {
        setIsWhite(!isWhite);
    }

    return (
        <>
            <footer style={isWhite? footerWhiteStyle : footerBlackStyle}>
                <button style={isWhite? footerWhiteStyle.button : footerBlackStyle.button} onClick={onClickHandler}>이 블로그는 화성으로 갑니다.</button>
            </footer>
        </>
    )
}

export default Footer;