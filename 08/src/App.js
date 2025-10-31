import logo from './logo.svg';
import './App.css';

// 라우팅 임폴트
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </Router>

      </>
  );
}

export default App;
