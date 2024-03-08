import { Home } from "./screens/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Browser } from "./screens/Browser";
import { TeamProvider } from "./context/TeamProvider";

function App() {
  return (
    <TeamProvider>
      <div className="App">
        <Router basename="/rick-and-morty">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browser" element={<Browser />} />
          </Routes>
        </Router>
      </div>
    </TeamProvider>
  );
}

export default App;
