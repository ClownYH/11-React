import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Main from "./pages/Main";
import Error from "./pages/Error";
import MyPage from "./pages/Mypage";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import 'normalize.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>}/>
          <Route path="post">
            <Route index element={<Post/>}/> {/* 하위 페이지가 여럿이기 때문에 그냥 "post" 페이지로 이동하려면 index가 필요하다. */}
            <Route path=":postNo" element={<PostDetail/>}/>
          </Route>
          <Route path="mypage" element={<MyPage/>}/>
        </Route>
        <Route path="/*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
