import { createActions, handleActions } from "redux-actions";


const initialState = {};

export const LOGIN = "user/LOGIN";
export const RESET_LOGIN_USER = "user/RESET_LOGIN_USER";

export const {user : {login, resetLoginUser}} = createActions({
    [LOGIN] : (res) => ({res}),
    [RESET_LOGIN_USER] : (res = initialState) => ({res}) // {}도 감싸지 않아도 동작은 하지만 확실한 타입을 명시해주는 것이 좋다.
});

const userReducer = handleActions({
    [LOGIN] : (state, {payload:{res}}) => { // payload에 :{res}를 해준 이유는 payload 내에 여러 개의 데이터가 있을 경우 대상을 찾지 못할 수 있기 때문이다.
        if(res){
            localStorage.setItem("isLogin", true);
        }else{
            res = {message : "LOGIN_FAIL"};
        }

        return res;
    },
    [RESET_LOGIN_USER] : (state, {payload:{res}}) => {
        return res;
    }
}, initialState);

export default userReducer;