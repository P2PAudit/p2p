import './App.css';
import logo from './images/logop2p.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
            </div>
            <div className="register">
              <div className="registerbutton">
                Register
              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
