import { useState } from "react";

// 애플리케이션 전체 화면
function App() {

  const styleFormat = {
    backgroundColor:"skyblue",
    height:"50rem",
    textAlign:"center",
    position:"relative",
    fontSize:"20px",
    btn:{backgroundColor:"blue", color:"white"}
  }

  const [list, setList] = useState([]);

  const [id, setId] = useState(0);
  const [contents, setContents] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandler = e => setContents(e.target.value);
  const onClickHandler = () => {
    const addList = list.concat({
      id:id,
      contents:contents
    });
    // console.log(addList);
    setList(addList);
    setId(id + 1);
    setContents("");
  };

  const onChecked = () => {
    setIsChecked(!isChecked);
  };

  const styleChange = {
    textDecoration: isChecked? 'line-through' : 'none'
  };

  const onRemove = id => {
    
    const removeList = list.filter(list => list.id !== id);
    setList(removeList);
  };

  const toDoList = list.map(
    list => {
      return (
        <li key={list.id} style={styleChange}>
          <input type="checkbox" checked={isChecked} onChange={onChecked}/>{list.contents}
          <button style={styleFormat.btn} onClick={() => onRemove(list.id)}>삭제</button>
        </li>
      )
    }
  );

  return (
    <>
      <div style={styleFormat}>
        <h1>To do list</h1>

        <section>
          <ui>
            {toDoList}
          </ui>
        </section>

        <section>
          <input onChange={onChangeHandler} value={contents}/>
          <button style={styleFormat.btn} onClick={onClickHandler}>추가</button>
        </section>
      </div>
    </>
  );
}

export default App;
