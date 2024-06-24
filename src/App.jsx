import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Religion from "./Pages/Religion";
import { Register } from "./Pages/Register";
import Login from "./Pages/Login";
import Search from "./Pages/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matrimony" element={<Religion />} />
          <Route path="/registerform" element={<Register />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
