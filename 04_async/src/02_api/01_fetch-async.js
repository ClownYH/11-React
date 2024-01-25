
/* 
    자바스크립트를 사용하면 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아올 수 있다.
    ajax를 이용해 페이지 새로고침 없이(비동기식) 서버에 데이터를 가져올 수 있다.
    ajax 외에도 서버에 네트워크 요청을 보내고 받아올 수 있는 방법 중 fetch api를 이용할 수 있다.
    fetch는 구식 브라우저에서는 지원하지 않지만 대부분의 모던 브라우저가 지원하고 있다.

    기본 사용 방법
    let promise = fetch(url, [option]);

    url : 접근하고자 하는 url
    options : 선택 매개변수로 http method나 headers, body 내용을 객체로 지정할 수 있다.

    options에 아무 값도 넣지 않으면 기본 get 메소드(8가지 http method)로 요청하게 된다.

    fetch를 호출하면 브라우저는 네트워크 요청을 보내고 promise를 반환한다.
    반환받은 promise가 내장 클래스 response 인스턴스와 함께 이행 상태가 된다.
    아직 본문(body)이 도착하기 전이지만 개발자는 응답 헤더를 보고 요청이 성공적으로 처리되었는지 할 수 있다.
    네트워크 문제로 존재하지 않은 경로 혹은 http 요청을 보낼 수 없는 상태에서는 promise는 거부 상태가 된다.
    fake api를 제공하고 RestAPI 방식으로 데이터를 호출할 수 있는 경로
    https://jsonplaceholder.typicode.com
*/

async function callApi(){
/*     const promise = await fetch("https://jsonplaceholder.typicode.com/users")
                            .then(response => response.json()); -> const jsonValue = await promise.json(); 이렇게 사용할 수도 있다. */
    // async로만 보내면 promise 객체 자체로 와서 쓸 수 없다. await를 사용해 받아야 한다. 둘 다 사용하지 않아도 promise로 온다.

    const promise = fetch("https://jsonplaceholder.typicode.com/");
users
    // promise의 반환 타입을 이용하여 사용하기
    // promise.then(response => {
    //     console.log(response);
    // });

    // async await을 이용하여 사용하기
    const response = await promise;
    console.log(response);

    console.log(`응답 상태 : ${response.status}`);
    console.log("응답 헤더");
    for(let [key, value] of response.headers){ // 토큰 정보는 body보다는 headers에 담아 보낸다.
        console.log(`${key}:${value}`);
    }

    console.log(`본문 내용 사용 여부 : ${response.bodyUsed}`);

    const json = await response.json();
    console.log(json);

    json.forEach(element => {
        console.log(element);
    });
}

callApi();

