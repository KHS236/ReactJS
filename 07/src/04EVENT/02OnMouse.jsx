import { useState,useEffect } from "react";
//마우스가 들어가고 나왔을 때 뭔가 연계 처리 하고 싶은 경우 Hook 불러오기
//usetate 이용해서 마우스가 들어오고 나갈때 문자열을 반환
//usestate를 통한 setStr을 감지해서 또 처리할 이벤트는 useEffect 이용하면 됨

const EventComponent_02 = ()=>{
    const [str,setStr] = useState("INIT") //

    const handleMouseEnter = (e)=>{
        console.log("mouse enter...",e)
        setStr("MOUSE ENTER")

    }
    const handleMouseLeave = (e)=>{
        console.log("mouse leave....",e)
        setStr("MOUSE LEAVE")
    }


    return (
    <div
    className="box1"
    style={{width:"150px",height:"150px",border:"1px solid"}}
    onMouseEnter={handleMouseEnter} // 마우스 들어올 때 마우스 엔터 처리기 연결
    onMouseLeave={handleMouseLeave} //마우스 떠날때 마우스 리브 처리기 연결
    >
        {str}
    </div>
    )
}

export default EventComponent_02