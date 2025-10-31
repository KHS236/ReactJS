import logo from './logo.svg';
import './App.css';

import Component_01 from './05조건부랜더링/01Component';
import Component_02 from './05조건부랜더링/02Component';
import Component_03 from './05조건부랜더링/03Component';


function App() {
  return (
    <div className="App">
      <h1>조건부 랜더링</h1>
  {/* 조건부 랜더링은 if문 삼항연산자 && 를 이용할 수 있다. */}
      {/* // if */}
      <Component_01 isAuth={true} />
      <Component_01 isAuth={false} />
      <hr/>
      {/* 삼항연산자 */}
      <Component_02 isAuth={true} />
      <Component_02 isAuth={false} />
      <hr/>
      {/* &&연산자 */}
      <Component_03 items={['a','bbb','ccc','ddd']}/> {/* item로 리스트 형태 데이터 전달 */}

    </div>
  );
}

export default App;
