import { useState,useEffect } from "react";


const EventComponent_04 = () => {
    const [str,setStr] = useState("")
    const [bgColor, setBgColor] = useState("white");


    const handleChange1 = (e)=>{
        console.log("onChange....1",e)
        const {name,value,type,checked}= e.target;
        console.log(name,value,type,checked)
        setStr("chainged1")
        setBgColor("#ffd966")
    }

    const handleChange2 = (e)=>{
    
        console.log("onChange....2",e)
        const {name,value,type,checked}= e.target;
        console.log(name,value,type,checked)
        setStr("chainged2")
        setBgColor("#a4c2f4")
    }

    const handleChange3 = (e)=>{
        console.log("onChange....3",e)
        const {name,value,type,checked}= e.target;
        console.log(name,value,type,checked)
        setStr("chainged3")
        setBgColor("#b6d7a8")
    }

    const handleChange4 = (e)=>{
        console.log("onChange....4",e)
        const {name,value,type,checked}= e.target;
        console.log(name,value,type,checked)
        setStr("chainged4")
        setBgColor("#f4cccc")
    }

    return (
        <div>
            텍스트 : <input type="text"onChange={handleChange1} /><br/>
            체크박스 : <input type="checkbox" onChange={handleChange2}/><br/>
            라디오 선택 1 : <input type="radio"
            name="radio" onChange={handleChange3} value="r1"/><br/>
            라디오 선택 2 : <input type="radio"
            name="radio" onChange={handleChange4} value="r2"/>

            <div style={{width:'100px',height:'30px',border:'1px solid',margin:'0 auto',backgroundColor:bgColor}}>
                {str}
            </div>
        </div>
        
    )
};
//라디오 이름 같이 잡기
export default EventComponent_04;
