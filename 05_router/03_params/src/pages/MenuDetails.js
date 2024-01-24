import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMenuDetail } from "../api/MenuApi";


const MenuDetails = () => {

    const {menuCode} = useParams(); // 한 개의 값만을 사용해 pathVariable로 쓴다.
    const [menu, setMenu] = useState({
        menu:'',
        menuPrice:'',
        categoryName:'',
        detail:{}
    });

    useEffect(() => {
        setMenu(getMenuDetail(menuCode));
    }, []);

    return (
        <>
            <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름 : {menu.menuName}</h3>
            <h3>메뉴 가격 : {menu.menuPrice}</h3>
            <h3>메뉴 카테고리 : {menu.categoryName}</h3>
            <h3>메뉴 설명 : {menu.detail.description}</h3>

            <img src={menu.detail.image} style={{mexWidth:500}}/>{/* import나 require로 이미지를 불러오면 실제 서버 동작시 출력되지 않을 수도 있다. public을 써라 */}
        </>
    )
}

export default MenuDetails;