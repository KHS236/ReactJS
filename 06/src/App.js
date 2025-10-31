import logo from './logo.svg';
import './App.css';

// 라우팅하려면 {BrowserRouter,Routes,Route} 임폴트 / 설치 해줘야함
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import About from './06ROUTE/About';
import Contact from './06ROUTE/Contact';
import Home from './06ROUTE/Home';
import Nav from './06ROUTE/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <h1>REACT ROUTE</h1> */}
      <Router>
        <Routes>
          {/* <Route path="/경로" element={<컴포넌트/>}/> 
            Home을 메인으로 하고 싶으면 경로를 최상위 경로로 하고 컴포넌트 불러오기
          */}
          <Route path="/" element={<Home/>} />
          {/* <Route path="/Home" element={<Home/>} /> */}
          <Route path="/About" element={<About/>} />
          <Route path="/Contact/:name/:age" element={<Contact/>} />
          {/* <Route path="/Contact/:name?/:age?" element={<Contact/>} /> */}
          {/* 물음표를 붙이면 null값이어도 문제 없음. */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
