import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { searchMenu } from "../api/MenuApi";
import boxStyle from "./Menu.module.css"
import MenuItem from "../component/MenuItem";


const MenuSearchResult = () => {

    const [search] = useSearchParams(); // 쿼리스트링 파라미터가 넘어올 때 받는 훅스
    const searchMenuName = search.get("menuName");
    const [menuList, setMenuList] = useState([]);
    /* 
        pathVariable http:localhost/menu/30 -> 넘어올 것이 1개이기 때문
        queryString Params http:localhost/menu?menuName="김치 튀김"&menuPrice=500 -> 넘어올 것이 여러 개일 경우
     */

    useEffect(
        () => {
            setMenuList(searchMenu(searchMenuName));
        }, []
    )

    return (
        <>
            <h1>검색 결과 </h1>
            <div className={boxStyle.menubox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default MenuSearchResult;