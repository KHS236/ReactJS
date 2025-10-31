// 흐름 EventComponent_03만들고 리턴문에 html구조 대충 인풋3개 만들어놓고
// 이벤트 처리기 만들어 놓고 각 태그에 연결
// 이벤트 처리기 로직 만들기

//Hook 써보기
// useState 상태저장 만들고 이름,세터함수,리턴 만들고

import { useState,useEffect } from "react";

const EventComponent_03 = () => {
    const [state,setState] = useState("")

    const handleKeyUp = (e)=>{
        console.log("On Key Up...",e.key);
        setState(state+e.key)
    }
    const handleKeyDown = (e)=>{
        console.log("On Key Down...",e.keyCode)
    }
    const handleKeyPress = (e)=>{
        console.log("On Key Press...",e.keyCode)
    }



    return (

        <div>
            <div>
                STATE : {state}
            </div>
            KEY UP : <input type="text" onKeyUp={handleKeyUp} className="keyUp"/><br/>
            KEY DOWN : <input type="text" onKeyUp={handleKeyDown}/><br/>
            KEY PRESS : <input type="text" onKeyPress={handleKeyPress}/><br/>
        </div>

    )
};

export default EventComponent_03;

