import {Link,useParams} from "react-router-dom"
// 파라미터 받는 방법 2 (경로 기반)
// useParams 임폴트
//  경로기반으로 파라미터를 받을 경우 App.js에서 경로(path)에 파라미터 자리를 지정해줘야한다
//  >>> <Route path="/Contact/:name/:age" element={<Contact/>} />
const Contact = ()=>{
    const {name,age} = useParams()
    console.log(name,age)

    return (
        <>
            <h1 style={{width:"50%",backgroundColor:"red",margin:"0 auto"}}>CONTACT PAGE</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </>
    )
}




export default Contact