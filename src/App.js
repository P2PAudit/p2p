import './App.css';
import logo from './images/logop2p.png';

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <div className="navbar">
            <img src={logo} className="logo" alt="logo" />
            <div className="p2paudit">
              p2paudit.xyz
            </div>
            <div className="sections">
              <div className="sectionh">Services</div>
              <div className="sectionh">LeaderBoard</div>
              <div className="sectionh">Reports</div>
              <div className="sectionh">Marathons</div>
              <div className="sectionh">Docs</div>
              <div className="sectionhbtn">
                <div className="register">
                  Register
                </div>
              </div>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
