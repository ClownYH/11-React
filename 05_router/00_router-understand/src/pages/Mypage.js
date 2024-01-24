import Host from "../data/MyData.json"

const MyPage = () => {
    
    return (
        <>        
        <h1>마이페이지</h1>
        <hr/>
        <div>
            <img src={Host.img} alt="프로필"/> {/* public에서 이미지를 받아올 때는 기본 경로가 이미 public/~이다. */}
            <p>
                <label>닉네임 : </label>
                <span>{Host.nick}</span>
            </p>
            <p>
                <label>이름 : </label>
                <span>{Host.name}</span>
            </p>
            <p>
                <label>생일 : </label>
                <span>{Host.birthday}</span>
            </p>
            <p>
                <label>취미 : </label>
                <span>{Host.hobby}</span>
            </p>
            <p>
                <label>MBTI : </label>
                <span>{Host.MBTI}</span>
            </p>
        </div>
        </>
    )
}

export default MyPage;