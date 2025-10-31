import {useState, useEffect, useContext} from "react"
import CustomContext from "./Context"

// user말고 onChangeName도 받을 수 있음
const Son_01 = ({user,onChangeName})=>{
    const [name,setName] = useState(user)

    const {globalState,setGlobalState} = useContext(CustomContext)
    // 바로 onclick에 onChangeName 넣어서 쓸 수도 있지만
    // 클릭 핸들러 만들어주는 게 좋다
    const handleChange = (e)=>{
        setName(e.target.value)
    }
    const handleClick = ()=>{
        onChangeName(name)
    }

    return(
        <>
            <h3>SON_01 COMPONENT</h3>
            자식 상태값 name : {name}<br/>
            {/* 부모 - > 자식props로 user 받아서 표현하기 */}
            {/* name : {user} */}

            {/* 자식 - > 부모 콜백함수 */}
            전역 변수 : {globalState} <br/>
            자식 상태값 name : {name} <br/>
            변경하기 : <input onChange={handleChange} className="input" type="text" value = {name}/>
            <button onClick={handleClick}>이름 변경</button>

        </>

    )
}

export default Son_01


