import {Link} from "react-router-dom"
//파라미터 받는 방법
import {useLocation} from "react-router-dom"
// 유즈로케이션은 위치정보를 확인하는 객체

const About = ()=>{
    const location = useLocation();
    // console.log(location.search) 로그 확인되는 거 체크했음
    const query = new URLSearchParams(location.search)
    // console.log(query.get("파라미터 명"))
    console.log(query.get("name"),query.get("age"))
    return ( //괄호가 리턴 옆에 없으면 안 된다네요
        //>> 리액트에서는 줄바꿈하면 세미콜론이 자동으로 붙는다네요

        <>
            <h1 style={{width:"50%",backgroundColor:"blue",margin:"0 auto"}}>ABOUT PAGE</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div>
                Param : {query.get("name")} , {query.get("age")}
            </div>
        </>
    )
}

// 파라미터 받는 방법
// 홈에서 준 파라미터 name age를 받는 임폴트문
// import {useLocation} from "react-router-dom"
export default About