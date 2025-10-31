import logo from './logo.svg';
import './App.css';

import Parent_01 from './07/Parent';
import CustomProvider from './07/Provider';

function App() {
  return (
    <CustomProvider>
      <div className="App">
        <h1>컴포넌트 간 통신</h1>

        {/* 부모 -> 자식 컴포넌트 전달(props) */}
        <Parent_01 />
        <hr />


        {/* 부모 <- 자식 컴포넌트 전달 (callback)*/}



        {/* 컴포넌트간의 데이터 공유 ContextAPI(공유데이터) */}



      </div>
    </CustomProvider>
  );
}

export default App;
