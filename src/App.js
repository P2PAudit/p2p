import './App.css';
import Header from './components/Header'; 
import Body from './components/Body';
import Connect from './components/Connect';
import Leaderboard from './components/Leaderboard';
import Services from './components/Services';
import Reports from './components/Reports';
import Docs from './components/Docs';
import Register from './components/Register';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="App-header">
            <Header />
              <Routes>
                <Route path="p2p/" element={<Body />} />
                <Route path="p2p/connect" element={<Connect />} />
                <Route path="p2p/leaderboard" element={<Leaderboard />} />
                <Route path="p2p/services" element={<Services />} />
                <Route path="p2p/reports" element={<Reports />} />
                <Route path="p2p/docs" element={<Docs />} />
                <Route path="p2p/register" element={<Register />} />
              </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
