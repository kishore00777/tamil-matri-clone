import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainPage from "./Components/Religion/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="religion" element={<MainPage />} />
         
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
