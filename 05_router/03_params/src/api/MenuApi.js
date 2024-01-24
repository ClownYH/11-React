import menus from "../data/menu-detail.json";


// json 형식으로 메뉴 전체를 반환
export function getMenuList (){
    return menus;
}

// menuDetails에서 넘겨준 메뉴 코드 값과 일치하는 메뉴 객체를 반환
export function getMenuDetail(menuCode){
    
    // 사용자가 요청한 메뉴 코드와 일치하는 메뉴를 반환함
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0]; // [0] => 반환되는 값을 1개만 받게 함, 그렇지 않으면 객체 배열 형식으로 넘어옴
}

export function searchMenu(menuName){
    return menus.filter(menu => menu.menuName.match(menuName));
}

// 서버에 공통적으로 요청하는 것들을 api 폴더로 묶음