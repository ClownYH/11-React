
/* 
    axios는 데이터 변환처리기(json()) 등을 하지 않아도 되므로 편리하게 사용할 수 있다.
    (이미 파싱된 데이터가 data라는 조회 결과 response 객체의 프로퍼티로 들어가 있다.)
    -> 사용하려면 라이브러리를 받아야 한다.(npm i axios)
*/

import axios from "axios"

const callApi = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

const fetchCall = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json())
    .then(d => console.log(d));
}

// 사용법의 차이가 있지만 거의 유사하다.

const AxiosCallComponent = () => {
    return (
        <>
            <button onClick={callApi}>axios 요청</button>
            <button onClick={fetchCall}>fetch 요청</button>
        </>
    )
}

export default AxiosCallComponent;