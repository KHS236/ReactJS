


const Headblbl = () => {

    return (

        <>
            {/* 헤더 */}
            <header id="header">
                <div className="top-header">
                    <div className="logoarea">
                        <a className="logo-a" href="./main.html">
                            <img className="logo" src="./img/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="navarea">
                        <ul className="nav">
                            <li className="nav-li">
                                <a href="#" className="nav-item">
                                    로그인
                                </a>
                            </li>
                            <li className="nav-li">
                                <a href="#" className="nav-item">
                                    회원가입
                                </a>
                            </li>
                            <li className="nav-li">
                                <a href="./notice-page.html" className="nav-item">
                                    공지사항
                                </a>
                            </li>
                            <li className="nav-li">
                                <a href="./고객센터테스트.html" className="nav-item">
                                    고객센터
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 탭 바 */}
                <nav className="tab-bar" id="tab-bar" />
            </header>
        </>


    )

}
export default Headblbl;