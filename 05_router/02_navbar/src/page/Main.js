import { useState } from "react";


const Main = () => {
    const [main, setMain] = useState(0);

    return (
        <div>
            <h1>메인</h1>
            <button onClick={() => setMain + 1}>+1</button>
        </div>
        
    )
}

export default Main;