import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Religion from "./Pages/Religion";
import { Register } from "./Pages/Register";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme";
import ViewProfile from "./Pages/ViewProfile";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matrimony" element={<Religion />} />
          <Route path="/registerform" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/viewprofile" element={<ViewProfile />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
