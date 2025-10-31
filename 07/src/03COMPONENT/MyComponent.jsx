import {useState,useEffect} from "react"
//리액트에서 제공함

const MyComponent = ()=>{
    //state
    // let count = 0

    const [count,setCount] = useState(1)
// handler
// 얘가 없으면 그냥 카운트0버튼 클릭하면 카운트 값 증가하도록 하는데
// 이 작업을 하려면 let count 주석처리하고 , useState 사용
// 카운트는 말 그대로 useState에서 초기값 setCount는 setter함수임
// 버튼에 onClick 다는 거 까먹지 않기
    const handleClick=()=>{
        // count++;
        setCount(count+1) // <-비동기 함수(이게 왜 중요하냐면 ↓)
        // console.log(count) // 동시에 처리되기 때문에 count에 +1 안 해주면 값이 1늦게 확인됨
    }//얘를 주석처리하고 useEffect 사용
    //02. 여러개 사용 가능함, 두번째 인자 [] 가 비어 있어도 사용 가능함
    // 최초 1회만 실행 (1회만 랜더링 이후 처리 Hook)
    useEffect(()=>{
        console.log("init setting");
    },[])
    //01. useEffect(()=>{},[감시할 상태변수 얘의 값이 바뀔 때 좌측에 동작할 함수])
    // const state 가 변경될 때마다 실행
    useEffect(()=>{
        console.log("count state changed..",count)
    },[count])

    //콘솔로그
    // init setting
    // count state changed.. 1,2,3...

    return (
        <>
            <h2>MyComponent...</h2>
            <button onClick={handleClick}>Btn count : {count}</button>
        </>
    )

}

export default MyComponent