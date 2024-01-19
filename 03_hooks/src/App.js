import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import UseEffectCleanUp from "./01_useEffect/04_userEffect-cleanup";
import { Container } from "./01_useEffect/05_useEffect-cleanup-example";
import Quiz from "./01_useEffect/quiz";
import { Counter, UseReducerBasic } from "./02_useReducer/01_reducer-basic";
import ReducerFormControl from "./02_useReducer/02_reducer-form-control";


function App() {
  const [message, setMessage] = useState("안녕하세요~");

  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <UseEffectCleanUp/> */}
    {/* <Container/> */}
    {/* <Quiz/> */}
    {/* <Counter/> */}
    {/* <UseReducerBasic/> */}
    <ReducerFormControl/>
    </>
  );
}

export default App;