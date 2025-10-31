import { Button } from 'react-bootstrap'; //부트스트랩 버튼 가져와보기
import "./03BootStrap.scss"

const Component_03 = () => {



    return (
        <div>
            <h3>리액트 부트스트랩?</h3>
            <div>
                {/* 컴포넌트 버튼즈에서 가져오기 */}
                <Button variant="primary" className='text-primary'>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </div>


        </div>


    )
}

export default Component_03


// 리액트 부트스트랩
// npm install react-bootstrap bootstrap 개편하누
// 부트스트랩에서 제공하는 css 갖고오기
// import 'bootstrap/dist/css/bootstrap.min.css';
// 얘는 App.js or index.html에
// CDN으로 가져올 거면 퍼블릭 index.html에 헤드에 넣어줘야 하고