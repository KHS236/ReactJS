


const Component_02 = ({ isAuth }) => {


    return (
        // {isAuth? "true" : "false" } 기존에 사용하던 삼항연산자 기본
        // 랜더링을 할 어쩌구 소괄호로 해야 어쩌구
        // 한 줄은 소괄호,부모태그 생략 가능
        // <>
        //     {isAuth ? <p>로그인 완료</p> : <p>로그인 실패</p>}
        // </>

        // 여러줄일 경우
        <>
            {isAuth? (
                <>
                    <p>isAuth:true</p>
                    <p>로그인 완료</p>
                    <p>환영합니다</p>
                </>
            ):(
                <> 
                    <hr/>
                    <p>isAuth:false</p>
                    <p>로그인 실패</p>
                    <p>로그인을 하세요</p>
                </>
            )}
        </>
    )
    // 다시 한 줄이라고 치면
    // return isAuth ? <p>로그인 확인</p> : <p>로그인 실패</p>



}

export default Component_02;