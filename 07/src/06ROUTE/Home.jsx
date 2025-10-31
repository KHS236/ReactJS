import {Link} from "react-router-dom"


const Home = ()=>{

    return (
        <>
            <h1 style={{width:"50%",backgroundColor:"green",margin:"0 auto"}}>HOME PAGE</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* 파라미터 전달하기 */}
                <li><Link to="/about?name=timo&age=100">About_1</Link></li>
                <li><Link to="/about?name=yumi&age=3">About_2</Link></li>
                {/* 경로기반 작업 */}
                <li><Link to="/contact/jung/40">Contact</Link></li>
            </ul>
        </>
    )
}

// 리액트에서는 a태그를 쓰는 방식을 권장하지 않음
// a를 쓰면 페이지가 새로고침 되면서 아예 새로운 요청이 돼서 덜그덕거림
//  컴포넌트를 라우트로 바꿔끼운다고 생각하면 편함
// 
// 컴포넌트에 import {Link} from "react-router-dom" 임폴트
// 그리고 a 태그를 Link로 / href를 to로 바꿔주면 된다


export default Home