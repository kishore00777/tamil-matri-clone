import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Religion from "./Pages/Religion";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matrimony" element={<Religion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
