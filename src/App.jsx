import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Religion from "./Pages/Religion";
import { Register } from "./Pages/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matrimony" element={<Religion />} />
          <Route path="/registerform" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
