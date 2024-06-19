import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Religion from "./Pages/Religion";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
          <Route path="religion" element={<MainPage />} />
=======
          <Route path="religion" element={<Religion />} />
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </>
  );
}

export default App;
