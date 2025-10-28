import logo from './logo.svg';
import './App.css';

import Headblbl from './test/blblheader';
import './test/blblcommon.css';
import Footblbl from './test/blblfooter';

function App() {
  return (
    <div className="App">

      <Headblbl />
      <div style={{width:"1200px",height:"500px",border:"1px solid",margin:"0 auto"}}>
        메인 영역
      </div>
      <Footblbl />

    </div>
  );
}

export default App;
