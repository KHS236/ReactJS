

// 중괄호 씌워서 App.js items에 들어갈 자료 받기
const Component_03 = ({items})=>{
    console.log('item.length ?',items.length);

// && 연산자

    return (
        <ul>
            {/* 변수 받아오기
                items.length가 0을 초과할 경우 오른쪽을 실행하도록 &&연산 활용
            */}
            {items.length>=2 && items.map((item,idx)=>{
                return (
                    <li key={idx}>{item}</li>
                )
            })}
        </ul>

    )
}


export default Component_03;