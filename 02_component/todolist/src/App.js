import { useState } from "react";

const styleFormat = {
  backgroundColor:"skyblue",
  height:"50rem",
  textAlign:"center",
  position:"relative",
  fontSize:"20px",
  btn:{backgroundColor:"blue", color:"white"}
}

// FontColorChanger
const FontColorChanger = ({value, setValue, setFontColor}) => {
  
  const onChangeFontColor = e => setValue(e.target.value);

  const onClickColorChanger = () => {
    setFontColor(value);
    setValue("");
  };

  return (
    <section>
    <input type="text" value={value} onChange={onChangeFontColor}/>
    <button onClick={onClickColorChanger}>색 변경</button>
  </section>
  )
};

// Section1
const Section1 = ({list, setList, fontColor}) => {
  
  const [isChecked, setIsChecked] = useState(false);

  const onChecked = (id) => {
    setIsChecked((prev) => ({
      ...prev,
      [id]:!prev[id]
    }));
  };

  const onRemove = id => {
    
    const removeList = list.filter(list => list.id !== id);
    setList(removeList);
  };

  const toDoList = list.map(
    list => {
      return (
        <li key={list.id}>
          <input type="checkBox" checked={isChecked[list.id] || false} onChange={() => onChecked(list.id)}/>
          <label style={{textDecoration: isChecked[list.id]? 'line-through' : 'none'}}>{list.contents}</label>
          <button style={styleFormat.btn} onClick={() => onRemove(list.id)}>삭제</button>
        </li>
      )
    }
  );

  return (
    <section style={fontColor}>
    <ui>
      {toDoList}
    </ui>
  </section>
  )
}

// Section2
const Section2 = ({list, setList, fontColor}) => {

  const [id, setId] = useState(0);

  const [contents, setContents] = useState("");

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

  return (
    <section style={fontColor}>
    <input onChange={onChangeHandler} value={contents}/>
    <button style={styleFormat.btn} onClick={onClickHandler}>추가</button>
  </section>
  )
}

// 애플리케이션 전체 화면
function App() {

  const [list, setList] = useState([]);

  const [fontColor, setFontColor] = useState("");

  const [value, setValue] = useState("");

  const styleColor = {
    color : fontColor
  };

  const [background, setBackground] = useState({});

  const onBlackmode = () => {
    if(Object.keys(background).length === 0){
      setBackground({
        color:"white",
        backgroundColor:"black",
        height:"50rem",
        textAlign:"center",
        position:"relative",
        fontSize:"20px"
      })
    }else{
      setBackground({

      })
    }
    
  };

  return (
    <>
      <div style={Object.keys(background).length === 0? styleFormat : background}>
        <div>
          <h1>To do list</h1>

          <button onClick={onBlackmode}>다크 모드</button>

          <FontColorChanger value={value} setValue={setValue} setFontColor={setFontColor}/>

          <Section1 list={list} setList={setList} fontColor={styleColor}/>

          <Section2 list={list} setList={setList} fontColor={styleColor}/>
          
        </div>
      </div>
    </>
  );
}

export default App;
