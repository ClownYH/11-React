import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./page/MyPage";
import Layout from "./layouts/Layout";
import Main from "./page/Main";
import Login from "./page/Login";
import Error from "./page/Error";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="mypage" element={<MyPage/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="*" element={<Error/>}/> {/* 존재하지 않는 페이지는 핸들링 */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
