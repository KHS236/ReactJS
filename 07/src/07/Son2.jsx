import {useState,useEffect, useContext} from "react"
import CustomContext from "./Context"

const Son_02 = ({onChangeName})=>{

    const {globalState,setGlobalState} = useContext(CustomContext)

    const handleChange = (e)=>{
        setGlobalState(e.target.value)
    }
    const handleClick = ()=>{
        onChangeName(globalState)
    }

    return (
        <>
            <h3>SON_02 COMPONENT</h3>
            <hr/>

            {/* 자식 - > 부모 콜백함수 */}
            전역 변수 : {globalState} <br/>
            자식 상태값 name : {globalState} <br/>
            변경하기 : <input onChange={handleChange} className="input" type="text" value = {globalState}/>
            <button onClick={handleClick}>이름 변경</button>
        </>


    )
}

export default Son_02