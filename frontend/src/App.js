import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path = "/" element= {<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
