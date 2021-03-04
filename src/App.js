import './App.css';
import profileimg from "./profileimg.png";

function App() {
    return (
        <div className="body">
            <div className="header">
                <h1>MyPage</h1>
            </div>

            <div className="main">
                <img src={profileimg} alt="profileimg" />
                <div className="text">
                    <h3>About</h3>
                    <p>Hello My Profile Page!<br></br>
                    Name:Taro<br></br>
                    Birthday:2021/03/04
                    </p>
                    <h3>Study</h3>
                    <p>JavaScript / HTML / CSS</p>
                    <h3></h3>
                </div>
            </div>

            <div className="footer">
                <p>Copyright ©</p>
            </div>
        </div>
    );
}

export default App;
