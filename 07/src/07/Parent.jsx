
import {useState,useEffect,useContext} from "react"
import Son_01 from "./Son"
import CustomContext from "./Context"
import Son_02 from "./Son2"

const Parent_01 = ()=>{
    const [name,setName] = useState("홍길동")

    const {globalState,setGlobalState} = useContext(CustomContext)
    // 이름을 받아서 setName에 변경될 이름으로 전달
    const handleChangeName = (name)=>{
        setName(name)
    }
    return(
        <div>
            <h2>Parent_01 COMPONENT - name {name}</h2>
            부모 상태값 name : {name}<br/>
            공유변수 : {globalState}
            <hr/>
            {/* 부모 > 자식 props 전달 */}
            {/* <Son_01 user={name} /> */}

            {/* 자식 > 부모 callback함수 */}
            <Son_01
                user={name}
                onChangeName={handleChangeName}
                />
            <hr/>
            <Son_02
                user={name}
                onChangeName={handleChangeName}
            />
        </div>


    )
}

export default Parent_01


