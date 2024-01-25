import { useState } from "react"


const DigimonDic = () => {
    const [digimon, setDigimon] = useState("");
    const [digimonInfo, setDigimonInfo] = useState({});
    const [img, setImg] = useState("");

    const onChangeHandler = (e) => {
        setDigimon(e.target.value);
    };

    const onClickHandler = () => {
        fetch(`https://digi-api.com/api/v1/digimon/${digimon}`)
        .then(response => {
            return  response.json();
        })
        .then(data => {
            setDigimonInfo(data);
            setImg(data.images[0].href);
        })
    }

    return (
        <>
            <h1>디지몬 사전</h1>
            <h3>디지몬 검색(코드나 영문명을 입력해주세요.)</h3>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>검색</button>

            <h3>{digimonInfo.name}</h3>
            <img src={img}/>
        </>
    )
}

export default DigimonDic;